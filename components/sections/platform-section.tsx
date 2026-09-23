"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { platforms } from "@/data/portfolio";

export function PlatformSection() {
  const [openPlatform, setOpenPlatform] = useState(0);
  return <section className="section platform-section" id="platforms"><div className="section-label"><span>03</span><span>Model evaluation</span></div><div className="section-heading-row"><div><h2>AI Platform &amp;<br /><em>Model Evaluation LLM  Experience</em></h2></div><p className="heading-description">The work behind reliable AI is often careful, structured and invisible. Here&apos;s the shape of it.</p></div><div className="platform-list">{platforms.map((platform, index) => <article className={`platform-card accent-${platform.accent} ${openPlatform === index ? "is-open" : ""}`} key={platform.name}><button type="button" className="platform-trigger" onClick={() => setOpenPlatform(openPlatform === index ? -1 : index)} aria-expanded={openPlatform === index}><span className="platform-mark">{platform.mark}</span><span className="platform-name"><strong>{platform.name}</strong><small>{platform.project}</small></span><span className="platform-role">{platform.role}</span><ChevronDown className="chevron" size={19} /></button><AnimatePresence initial={false}>{openPlatform === index && <motion.div className="platform-details" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}><p>{platform.summary}</p><ul>{platform.details.map((detail) => <li key={detail}>{detail}</li>)}</ul><div className="tag-row">{platform.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></motion.div>}</AnimatePresence></article>)}</div></section>
}
