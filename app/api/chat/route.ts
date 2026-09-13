import { NextResponse } from "next/server";
import { experiences, platforms, profile, projects, skillGroups } from "@/data/portfolio";

const portfolioContext = JSON.stringify({ profile, experiences, platforms, projects, skillGroups });

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = typeof body.message === "string" ? body.message.trim() : "";
    if (!message || message.length > 500) return NextResponse.json({ error: "Please ask a short question." }, { status: 400 });
    if (!process.env.GEMINI_API_KEY) return NextResponse.json({ reply: "The AI assistant is not connected yet. You can still explore the projects, experience and AI platform sections, or send a message through the contact form." });

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${process.env.GEMINI_MODEL ?? "gemini-2.0-flash"}:generateContent?key=${process.env.GEMINI_API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: [{ role: "user", parts: [{ text: `You are Md Amanullah's portfolio assistant. Answer as a helpful professional guide in concise language. Only use the portfolio facts below. Never invent employers, dates, metrics, links, client details or confidential AI task instructions. If asked about hiring or collaboration, direct the visitor to the contact form. Portfolio facts: ${portfolioContext}\n\nVisitor question: ${message}` }] }], generationConfig: { temperature: 0.3, maxOutputTokens: 280 } }),
    });
    if (!response.ok) return NextResponse.json({ error: "Assistant unavailable." }, { status: 502 });
    const data = await response.json();
    return NextResponse.json({ reply: data.candidates?.[0]?.content?.parts?.[0]?.text ?? "I could not find that in the portfolio." });
  } catch { return NextResponse.json({ error: "Assistant unavailable." }, { status: 400 }); }
}
