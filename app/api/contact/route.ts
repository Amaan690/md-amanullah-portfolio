import { NextResponse } from "next/server";

function createEmailFallback(to: string, name: string, email: string, message: string) {
  const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

  return `mailto:${to}?subject=${subject}&body=${body}`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Please complete every field." }, { status: 400 });
    }

    if (name.length > 100 || email.length > 254 || message.length > 3000) {
      return NextResponse.json({ error: "Please shorten your message and try again." }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const contactToEmail = process.env.CONTACT_TO_EMAIL ?? "dev.amaan690@gmail.com";
    const fallbackUrl = createEmailFallback(contactToEmail, name, email, message);

    if (!process.env.RESEND_API_KEY || !contactToEmail) {
      return NextResponse.json(
        {
          error: "Direct delivery is temporarily unavailable. Open your email app to send the prepared message.",
          fallbackUrl,
        },
        { status: 503 },
      );
    }

    const delivery = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? "portfolio@example.com",
        to: [contactToEmail],
        reply_to: email,
        subject: `Portfolio enquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    });
    if (!delivery.ok) {
      return NextResponse.json(
        { error: "Direct delivery failed. Open your email app to send the prepared message.", fallbackUrl },
        { status: 502 },
      );
    }
    return NextResponse.json({ success: true, message: "Your message has been sent." });
  } catch {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 400 });
  }
}
