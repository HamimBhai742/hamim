export interface SkillItem {
  name: string;
  level?: "strong" | "comfortable" | "familiar";
}

export interface SkillCategory {
  id: string;
  label: string;
  description: string;
  icon: string;
  skills: SkillItem[];
  highlight?: boolean;
}

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    label: "Backend",
    description: "Server-side development, API design, and business logic",
    icon: "server",
    highlight: true,
    skills: [
      { name: "Node.js", level: "strong" },
      { name: "Express.js", level: "strong" },
      { name: "REST API Design", level: "strong" },
      { name: "Python", level: "comfortable" },
      { name: "Firebase", level: "comfortable" },
      { name: "AWS", level: "familiar" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    description: "Data modeling, querying, and database architecture",
    icon: "database",
    highlight: true,
    skills: [
      { name: "MongoDB", level: "strong" },
      { name: "PostgreSQL", level: "strong" },
      { name: "Prisma ORM", level: "strong" },
      { name: "Supabase", level: "comfortable" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    description: "Component-based UI development and modern web frameworks",
    icon: "layout",
    skills: [
      { name: "React", level: "comfortable" },
      { name: "Next.js", level: "comfortable" },
      { name: "TypeScript", level: "comfortable" },
      { name: "JavaScript", level: "strong" },
      { name: "HTML", level: "strong" },
      { name: "CSS", level: "comfortable" },
    ],
  },
  {
    id: "styling",
    label: "UI & Styling",
    description: "Design systems, component libraries, and visual styling",
    icon: "palette",
    skills: [
      { name: "Tailwind CSS", level: "strong" },
      { name: "shadcn/ui", level: "comfortable" },
      { name: "Material UI", level: "comfortable" },
      { name: "DaisyUI", level: "comfortable" },
    ],
  },
  {
    id: "tools",
    label: "Tools & DevOps",
    description: "Development workflow, version control, and deployment",
    icon: "wrench",
    skills: [
      { name: "Git", level: "strong" },
      { name: "Docker", level: "familiar" },
      { name: "Vercel", level: "comfortable" },
      { name: "VS Code", level: "strong" },
    ],
  },
];
