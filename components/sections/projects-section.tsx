"use client";

import { motion } from "framer-motion";
import { Check, MoveUpRight } from "lucide-react";
import { useState } from "react";
import { projects } from "@/data/portfolio";

const filters = ["All", "AI/ML", "Full Stack", "Backend", "Web"] as const;
export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const filtered = activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter);
  return <section className="section projects-section" id="projects"><div className="section-label"><span>05</span><span>Selected work</span></div><div className="section-heading-row"><h2>Things I&apos;ve shipped<br /><em>and shaped.</em></h2><span className="heading-aside">{projects.length} projects</span></div><div className="filter-row" role="tablist" aria-label="Filter projects">{filters.map((filter) => <button type="button" role="tab" aria-selected={activeFilter === filter} className={activeFilter === filter ? "active" : ""} key={filter} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div><div className="projects-grid">{filtered.map((project) => <motion.article layout className="project-card" key={project.name}><div className="project-top"><span className="project-number">{project.number}</span><span className="project-category">{project.category}</span></div><h3>{project.name}</h3><p>{project.description}</p><div className="project-features">{project.features.map((feature) => <span key={feature}><Check size={13} /> {feature}</span>)}</div><div className="project-footer"><div className="stack-list">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div><span className="project-arrow"><MoveUpRight size={18} /></span></div></motion.article>)}</div></section>;
}
