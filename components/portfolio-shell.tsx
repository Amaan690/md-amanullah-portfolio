import { AboutSection, EducationSection, MetricsStrip, SiteFooter, SkillsSection } from "@/components/sections/content-sections";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PlatformSection } from "@/components/sections/platform-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { AiChatbot } from "@/components/ai-chatbot";
import { SiteHeader } from "@/components/sections/site-header";

export default function PortfolioShell() {
  return <main><SiteHeader /><HeroSection /><MetricsStrip /><AboutSection /><ExperienceSection /><PlatformSection /><SkillsSection /><ProjectsSection /><EducationSection /><ContactSection /><SiteFooter /><AiChatbot /></main>;
}
