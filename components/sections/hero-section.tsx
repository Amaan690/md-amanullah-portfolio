"use client";

import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Code2, UsersRound } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";

export function HeroSection() {
  return <section className="hero section" id="top">
    <div className="hero-grid" aria-hidden="true"><span /><span /><span /><span /><span /><span /></div>
    <div className="hero-copy">
      <motion.p className="kicker" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>{profile.eyebrow}</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08 }}>Engineering clarity<br /><em>from complexity.</em></motion.h1>
      <motion.p className="hero-intro" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .16 }}>{profile.intro}</motion.p>
      <div className="hero-actions"><a className="button button-primary" href="#projects">Explore projects <ArrowDownRight size={17} /></a><a className="text-link" href="#contact">Start a conversation <ArrowUpRight size={16} /></a></div>
      <div className="social-links"><a href={profile.github || "#contact"} target={profile.github ? "" : undefined} rel="noreferrer" aria-label="GitHub"><Code2 size={18} /></a><a href={profile.linkedin || "#contact"} target={profile.linkedin ? "_blank" : undefined} rel="noreferrer" aria-label="LinkedIn"><UsersRound size={18} /></a><span className="availability"><i /> Open to meaningful problems</span></div>
    </div>
    <motion.div className="hero-portrait" initial={{ opacity: 0, scale: .95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }}>
      <div className="portrait-frame"><Image src="/images/profile.svg" alt="Illustrated professional portrait of Md Amanullah" fill priority sizes="(max-width: 900px) 80vw, 480px" /></div><div className="portrait-note"><span>Currently</span><strong>Senior Software Engineer</strong><small>Arclogiq Software · Noida</small></div><div className="orbit orbit-one" /><div className="orbit orbit-two" />
    </motion.div>
  </section>;
}
