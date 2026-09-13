"use client";

import { Mail, Send, UsersRound } from "lucide-react";
import { FormEvent, useState } from "react";
import { profile } from "@/data/portfolio";

type Status = "idle" | "sending" | "success" | "error";
export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("sending");
    try { const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(event.currentTarget).entries())) }); setStatus(response.ok ? "success" : "error"); if (response.ok) event.currentTarget.reset(); } catch { setStatus("error"); }
  }
  return <section className="contact-section" id="contact"><div className="contact-inner"><div className="section-label light"><span>07</span><span>Get in touch</span></div><div className="contact-grid"><div><h2>Have a hard problem?<br /><em>Let&apos;s talk.</em></h2><p>For roles, collaborations or a thoughtful exchange about AI systems and software, send a note.</p><div className="contact-links">{profile.email && <a href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email}</a>}{profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer"><UsersRound size={18} /> LinkedIn ↗</a>}</div></div><form className="contact-form" onSubmit={handleSubmit}><label>Your name<input required name="name" placeholder="Jane Smith" /></label><label>Email address<input required type="email" name="email" placeholder="jane@company.com" /></label><label>What&apos;s on your mind?<textarea required name="message" rows={4} placeholder="Tell me a little about the problem..." /></label><button className="button button-light" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : <>Send message <Send size={16} /></>}</button>{status === "success" && <p className="form-message success">Thanks. Your note has been sent.</p>}{status === "error" && <p className="form-message error">Please check the fields and try again.</p>}</form></div></div></section>;
}
