export type ProjectCategory = "AI/ML" | "Full Stack" | "Backend" | "Web";

export const profile = {
  name: "Md Amanullah",
  role: "AI/ML Engineer & Software Engineer",
  eyebrow: "Building reliable systems for the intelligence layer",
  intro:
    "I build production software and evaluate the models shaping how people use it. My work sits at the intersection of full-stack engineering, generative AI, and rigorous technical validation.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
};

export const metrics = [
  { value: "40%", label: "reduction in AI false responses" },
  { value: "70%", label: "manual data-entry automation" },
  { value: "35%", label: "API performance improvement" },
  { value: "50+", label: "production issues resolved" },
];

export const experiences = [
  {
    period: "Aug 2024 — Present",
    company: "Arclogiq Software Pvt. Ltd.",
    role: "Senior Software Engineer",
    location: "Noida, India",
    current: true,
    details: [
      "Build full-stack applications with React.js, Node.js, Express.js and MySQL across the complete development lifecycle.",
      "Shipped an online interview platform with backend APIs, authentication, database integration and interview workflows.",
      "Built a solar energy company website with Next.js, JavaScript, Tailwind CSS and reusable components.",
      "Developed LLM response validation workflows and generative AI automation that turns Excel stock data into dynamic dashboards.",
    ],
  },
  {
    period: "Aug 2023 — Jul 2024",
    company: "Principal Global",
    role: "Software Engineer",
    location: "Pune, India",
    details: [
      "Developed REST APIs and enterprise applications while resolving production issues across live systems.",
      "Used Spring Boot and Python automation for Excel-to-PowerPoint stock reporting workflows.",
      "Improved database performance with optimization, caching and read replicas.",
    ],
  },
  {
    period: "Jan 2023 — Aug 2023",
    company: "Bytes Classes",
    role: "Software Engineer",
    location: "Noida, India",
    details: [
      "Built product experiences with React.js, Tailwind CSS and JavaScript, supported by REST APIs.",
      "Worked with Node.js, Express.js, MongoDB, MySQL and JWT authentication.",
      "Contributed to LLM-powered AI features, response evaluation, prompt validation and Python automation.",
    ],
  },
  {
    period: "Internship",
    company: "Bharat Intern",
    role: "Software Engineer Intern",
    location: "India",
    details: ["Completed a software engineering internship and contributed to assigned development work."],
  },
];

export const platforms = [
  {
    name: "AfterQuery Expert",
    mark: "AQ",
    project: "Project Gold · Project Sand",
    role: "AI solution evaluator",
    accent: "cyan",
    summary: "Structured evaluation of AI-generated solutions against task requirements and test cases.",
    details: [
      "Assess technical correctness, requirement adherence and edge-case behavior.",
      "Identify errors and inconsistencies, then provide quality-focused feedback for model reliability.",
    ],
    skills: ["Technical evaluation", "Test-case validation", "Quality feedback"],
  },
  {
    name: "Alignerr",
    mark: "AL",
    project: "Prometheus Structural Engineer Evaluation",
    role: "Technical solution evaluator",
    accent: "orange",
    summary: "Evaluate technical solutions with attention to correctness, reasoning quality and requirements.",
    details: [
      "Review AI-generated technical work for errors, edge cases and requirement adherence.",
      "Produce structured evaluation and feedback without exposing proprietary task material.",
    ],
    skills: ["Reasoning assessment", "Technical review", "Structured feedback"],
  },
  {
    name: "Mercor",
    mark: "ME",
    project: "Technical assessment work",
    role: "AI/software evaluator",
    accent: "lime",
    summary: "Technical assessment experience across software and AI-oriented evaluation workflows.",
    details: ["Apply software engineering judgment to assess technical quality and model outputs."],
    skills: ["Software engineering", "AI evaluation"],
  },
  {
    name: "Turing",
    mark: "TU",
    project: "AI/software evaluation",
    role: "Technical evaluator",
    accent: "violet",
    summary: "AI and software evaluation work supported by practical engineering experience.",
    details: ["Review technical outputs with a focus on correctness, clarity and useful engineering feedback."],
    skills: ["Technical review", "Model validation"],
  },
  {
    name: "CrowdGen",
    mark: "CG",
    project: "Computer vision data workflows",
    role: "Data quality contributor",
    accent: "blue",
    summary: "Image annotation and data quality workflows supporting AI and computer vision datasets.",
    details: ["Contribute to image annotation, review workflows and dataset quality."],
    skills: ["Image annotation", "Data review", "Computer vision"],
  },
  {
    name: "Mindrift",
    mark: "MI",
    project: "AI training data workflows",
    role: "Content reviewer",
    accent: "pink",
    summary: "Video annotation and content review work contributing to AI training datasets.",
    details: ["Support video annotation and content review workflows for dataset development."],
    skills: ["Video annotation", "Content review", "Data quality"],
  },
  {
    name: "Micro1",
    mark: "M1",
    project: "Robotics-focused data work",
    role: "AI/computer vision contributor",
    accent: "yellow",
    summary: "Robotics-focused image and video processing or annotation work.",
    details: ["Support dataset quality and AI/computer vision workflows around image and video data."],
    skills: ["Image processing", "Video processing", "Dataset quality"],
  },
];

export const skillGroups = [
  { title: "AI & ML", items: ["Generative AI", "LLMs", "Prompt Engineering", "LLM Optimization", "AI Response Evaluation", "AI Code Evaluation", "Model Validation", "Data Annotation", "Content Review", "LangChain", "Python", "Pandas", "NumPy"] },
  { title: "Software Engineering", items: ["Java", "Python", "JavaScript", "TypeScript", "React.js", "Next.js", "Node.js", "Express.js", "Spring Boot", "REST APIs", "Microservices"] },
  { title: "Databases", items: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "Firebase", "Oracle"] },
  { title: "Cloud / DevOps", items: ["Git", "GitHub", "Docker", "Kubernetes", "CI/CD", "AWS", "Azure DevOps", "Amazon S3", "EC2"] },
];

export const projects = [
  { name: "AI / LLM Response Validation System", category: "AI/ML" as ProjectCategory, number: "01", description: "A structured workflow for validating AI responses against requirements, technical correctness and edge cases.", stack: ["Python", "LLMs", "Evaluation"], features: ["Requirement checks", "Technical review", "Reliability feedback"] },
  { name: "AI Chatbot", category: "AI/ML" as ProjectCategory, number: "02", description: "Conversational AI product experience with a focus on useful, dependable responses.", stack: ["Python", "LangChain", "APIs"], features: ["Context-aware chat", "Prompt workflows", "Response validation"] },
  { name: "AI Voice Assistant", category: "AI/ML" as ProjectCategory, number: "03", description: "Voice-first assistant concept connecting natural language interaction to software actions.", stack: ["Python", "Generative AI", "APIs"], features: ["Voice interaction", "Intent handling", "Automation"] },
  { name: "Online Interview Platform", category: "Full Stack" as ProjectCategory, number: "04", description: "Full-stack interview workflow with authentication, backend APIs and database integration.", stack: ["React.js", "Node.js", "MySQL"], features: ["Interview workflows", "Authentication", "Database integration"] },
  { name: "Solar Energy Company Website", category: "Web" as ProjectCategory, number: "05", description: "A polished company website built from reusable components for a solar energy business.", stack: ["Next.js", "Tailwind CSS", "JavaScript"], features: ["Responsive layout", "Reusable UI", "Performance-minded build"] },
  { name: "Elitas Appliances Product Showcase", category: "Web" as ProjectCategory, number: "06", description: "Product-focused web experience for presenting appliances with clarity and strong visual hierarchy.", stack: ["React.js", "JavaScript", "CSS"], features: ["Product presentation", "Responsive UI", "Clear navigation"] },
  { name: "Oasis Water Cooler Website", category: "Web" as ProjectCategory, number: "07", description: "Brand website for a water cooler business with a focused, conversion-ready product experience.", stack: ["React.js", "Tailwind CSS", "JavaScript"], features: ["Product pages", "Responsive design", "Reusable components"] },
  { name: "Excel-to-Dashboard Generative AI Automation", category: "Backend" as ProjectCategory, number: "08", description: "Automation workflow that turns Excel-based stock data into dynamic dashboards with less manual effort.", stack: ["Python", "Generative AI", "Dashboards"], features: ["Data transformation", "Dashboard generation", "Manual effort reduction"] },
  { name: "EKART E-commerce Platform", category: "Full Stack" as ProjectCategory, number: "09", description: "E-commerce platform concept with product discovery and transactional workflow foundations.", stack: ["React.js", "Node.js", "MongoDB"], features: ["Product browsing", "API integration", "Data persistence"] },
  { name: "Online Hotel Booking Platform", category: "Full Stack" as ProjectCategory, number: "10", description: "Booking experience designed around browsing, selection and a straightforward reservation flow.", stack: ["JavaScript", "REST APIs", "Database"], features: ["Search flow", "Booking workflow", "Responsive UI"] },
];

export const education = [
  { degree: "Bachelor of Technology", field: "Electronics & Communication Engineering", institution: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)" },
  { degree: "Diploma", field: "Electronics & Communication Engineering", institution: "Galgotias University" },
];
