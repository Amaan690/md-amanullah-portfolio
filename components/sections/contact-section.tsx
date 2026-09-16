"use client";

import { Mail, Send, UsersRound } from "lucide-react";
import { FormEvent, useState } from "react";
import { profile } from "@/data/portfolio";

type Status = "idle" | "sending" | "success" | "fallback" | "error";
type ContactResponse = { error?: string; message?: string; fallbackUrl?: string };

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [fallbackUrl, setFallbackUrl] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setStatusMessage("");
    setFallbackUrl("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(event.currentTarget).entries())),
      });
      const data = await response.json() as ContactResponse;

      if (response.ok) {
        setStatus("success");
        setStatusMessage(data.message ?? "Thanks. Your note has been sent.");
        event.currentTarget.reset();
      } else if (data.fallbackUrl) {
        setStatus("fallback");
        setStatusMessage(data.error ?? "Open your email app to finish sending your message.");
        setFallbackUrl(data.fallbackUrl);
      } else {
        setStatus("error");
        setStatusMessage(data.error ?? "Please check the fields and try again.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("The contact service is unavailable. You can reach out directly.");
    }
  }

  return <section className="contact-section" id="contact"><div className="contact-inner"><div className="section-label light"><span>07</span><span>Get in touch</span></div><div className="contact-grid"><div><h2>Have a hard problem?<br /><em>Let&apos;s talk.</em></h2><p>For roles, collaborations or a thoughtful exchange about AI systems and software, send a note.</p><div className="contact-links">{profile.email && <a href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email}</a>}{profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer"><UsersRound size={18} /> LinkedIn ↗</a>}</div></div><form className="contact-form" onSubmit={handleSubmit}><label>Your name<input required maxLength={100} name="name" placeholder="Jane Smith" /></label><label>Email address<input required maxLength={254} type="email" name="email" placeholder="jane@company.com" /></label><label>What&apos;s on your mind?<textarea required maxLength={3000} name="message" rows={4} placeholder="Tell me a little about the problem..." /></label><button className="button button-light" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : <>Send message <Send size={16} /></>}</button>{status !== "idle" && status !== "sending" && <div className="form-feedback" aria-live="polite"><p className={`form-message ${status === "success" ? "success" : status === "fallback" ? "fallback" : "error"}`}>{statusMessage}</p>{status === "fallback" && fallbackUrl && <a className="text-link" href={fallbackUrl}>Open email app <Mail size={15} /></a>}{status === "error" && profile.email && <a className="text-link" href={`mailto:${profile.email}`}>Email {profile.email} <Mail size={15} /></a>}</div>}</form></div></div></section>;
}
