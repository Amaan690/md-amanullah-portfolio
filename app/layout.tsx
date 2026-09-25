import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ variable: "--font-body", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-display", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Md Amanullah | AI/ML Engineer & Software Engineer",
  description: "Portfolio of Md Amanullah, an AI/ML Engineer and Software Engineer focused on reliable AI systems, LLM evaluation and full-stack delivery.",
  metadataBase: new URL("https://mdamanullah.dev"),
 openGraph: {
  title: "Md Amanullah | AI/ML & Software Engineer",
  description: "Building intelligent, scalable, and reliable software systems powered by AI.",
  type: "website",
},
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${dmSans.variable} ${spaceGrotesk.variable}`}><body>{children}</body></html>;
}
