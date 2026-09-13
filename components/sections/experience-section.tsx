"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";

export function ExperienceSection() {
  return <section className="section dark-section" id="experience"><div className="section-label light"><span>02</span><span>Experience</span></div><div className="section-heading-row"><h2>Built in the real world.</h2><span className="heading-aside">2023 — now</span></div><div className="timeline">{experiences.map((experience, index) => <motion.article className="timeline-item" key={experience.company} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .06 }}><div className="timeline-meta"><span>{experience.period}</span><span>{experience.location}</span></div><div className="timeline-dot"><span /></div><div className="timeline-content"><div className="role-line"><h3>{experience.role}</h3>{experience.current && <span className="current-pill">Current</span>}</div><p className="company">{experience.company}</p><ul>{experience.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div></motion.article>)}</div></section>;
}
