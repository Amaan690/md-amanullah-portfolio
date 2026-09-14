"use client";

import { ArrowUpRight, Code2, Menu, Moon, Sun, UsersRound, X } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

const navItems = [
  ["About", "#about"], ["Experience", "#experience"], ["Education", "#education"], ["AI platforms", "#platforms"], ["Projects", "#projects"], ["Contact", "#contact"],
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => { document.documentElement.dataset.theme = darkMode ? "dark" : "light"; }, [darkMode]);

  return <header className="site-header">
    <a className="brand" href="#top" aria-label="Md Amanullah home"><span className="brand-mark">MA</span><span>Md Amanullah</span></a>
    <nav className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
      {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
    </nav>
    <div className="header-actions">
      <button className="icon-button" type="button" aria-label={darkMode ? "Use light theme" : "Use dark theme"} onClick={() => setDarkMode((value) => !value)}>{darkMode ? <Sun size={17} /> : <Moon size={17} />}</button>
      <a className="header-contact" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
      <button className="menu-button" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
    </div>
    <div className="header-socials" aria-label="Social links">
      {profile.github && <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={15} /></a>}
      {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><UsersRound size={15} /></a>}
    </div>
  </header>;
}
