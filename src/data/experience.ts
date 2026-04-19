export interface Experience {
  id: string;
  role: string;
  company: string;
  type: "full-time" | "part-time" | "contract" | "freelance";
  period: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
  coursework: string[];
  description: string;
}

export const experiences: Experience[] = [
  {
    id: "backend-dev-2026",
    role: "Backend Developer",
    company: "Company Name",
    type: "full-time",
    period: "Feb 2026 – Present",
    startDate: "2026-02",
    current: true,
    description: [
      "Contributing to the design and implementation of server-side systems and RESTful APIs that power core product features.",
      "Building and maintaining API endpoints with a focus on reliability, proper error handling, and input validation.",
      "Structuring and querying relational and document databases to support efficient data access patterns.",
      "Writing business logic in a service-layer architecture, keeping controllers thin and logic explicitly testable.",
      "Collaborating with team members on feature delivery, code review, and maintaining shared engineering standards.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "REST API",
      "Git",
    ],
  },
];

export const education: Education[] = [
  {
    id: "diploma-cst",
    degree: "Diploma in Computer Science and Technology",
    institution: "Institution Name",
    period: "2022 – 2026",
    gpa: "3.3 / 4.0",
    coursework: [
      "Data Structures",
      "Web Development",
      "Database Systems",
      "Networking",
      "Operating Systems",
      "Computer Organization",
    ],
    description:
      "My diploma provided a strong theoretical foundation — from data structures and algorithm thinking to database design and systems-level concepts. The coursework shaped how I reason about performance, memory, and architecture, which directly informs how I approach backend engineering today.",
  },
];
