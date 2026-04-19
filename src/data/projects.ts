export interface Project {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  role: string;
  technologies: string[];
  backendResponsibilities: string[];
  notableFeatures: string[];
  challenge: string;
  solution: string;
  outcome: string;
  liveUrl?: string;
  repoUrl?: string;
  category: "e-commerce" | "booking" | "learning" | "management";
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    summary:
      "A full-stack e-commerce platform with product management, cart logic, and order processing.",
    problem:
      "Building a reliable shopping experience requires coordinating product inventory, user sessions, order states, and payment flow — all of which need to stay consistent and accurate across concurrent requests.",
    role: "Sole developer — designed and built the full stack from the database schema to the user interface.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
    backendResponsibilities: [
      "Designed the REST API layer covering product, cart, order, and user endpoints",
      "Modeled the database schema for products, categories, orders, and users with relational references",
      "Implemented JWT-based authentication and role-based authorization (admin vs. customer)",
      "Built cart management logic with persistent state and stock validation",
      "Wrote the order processing service including state transitions (pending → confirmed → fulfilled)",
      "Handled input validation and structured error responses across all endpoints",
    ],
    notableFeatures: [
      "Product catalog with category filtering and search",
      "Persistent cart with inventory validation at checkout",
      "Order management dashboard for admin users",
      "JWT authentication with protected routes",
    ],
    challenge:
      "Keeping cart state and product stock consistent when multiple users attempt to purchase the same item simultaneously — preventing overselling without degrading performance.",
    solution:
      "Implemented stock validation at the point of order creation with atomic database operations, so inventory checks and updates happen in a single database operation rather than two separate reads and writes.",
    outcome:
      "A production-ready commerce backend demonstrating real transactional logic, data consistency, and role-separated access control.",
    liveUrl: "#",
    repoUrl: "#",
    category: "e-commerce",
    featured: true,
  },
  {
    slug: "booking-system",
    title: "Booking System",
    summary:
      "A scheduling platform with real-time availability management, slot conflict detection, and confirmation flow.",
    problem:
      "Booking systems are deceptively complex — they must prevent double-bookings, handle overlapping time slots correctly, and maintain data integrity when multiple users book at the same time.",
    role: "Sole developer — architected the availability model and built the full booking engine.",
    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "React",
      "TypeScript",
    ],
    backendResponsibilities: [
      "Designed the slot availability data model with start time, end time, and status fields",
      "Built conflict detection logic that queries overlapping bookings before confirming any new reservation",
      "Implemented booking state management (available → pending → confirmed → cancelled)",
      "Created an admin API for managing availability windows and viewing all bookings",
      "Added email confirmation trigger on successful booking",
      "Applied database-level constraints to enforce slot integrity as a safety net",
    ],
    notableFeatures: [
      "Real-time slot availability display",
      "Conflict-free booking with server-side validation",
      "Booking confirmation and cancellation flow",
      "Admin panel for schedule management",
    ],
    challenge:
      "Preventing race conditions where two users could book the same slot within milliseconds of each other — a classic concurrency problem that becomes critical in a booking context.",
    solution:
      "Used database-level row locking within a transaction so that only one booking request can proceed for a given slot at a time, making the conflict check and update atomic.",
    outcome:
      "A reliable booking engine that handles concurrency correctly — demonstrating edge-case thinking, time-sensitive data management, and precision in backend logic.",
    liveUrl: "#",
    repoUrl: "#",
    category: "booking",
    featured: true,
  },
  {
    slug: "learning-platform",
    title: "Learning Platform",
    summary:
      "An online learning platform with course management, structured content delivery, progress tracking, and role-based access.",
    problem:
      "Learners need a clear, structured path through content with accurate progress tracking, while instructors need tools to manage courses without impacting learners mid-session.",
    role: "Sole developer — designed the course data model and built the full platform.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Auth",
      "React",
      "Next.js",
      "TypeScript",
    ],
    backendResponsibilities: [
      "Designed a hierarchical course data model: course → module → lesson",
      "Built enrollment logic with access validation at the lesson level",
      "Implemented role-based permissions distinguishing student and instructor capabilities",
      "Created a progress-tracking system that records lesson completions per user",
      "Built the course management API for instructors to create, update, and publish content",
      "Used Firebase Auth for identity management, integrated with the custom authorization layer",
    ],
    notableFeatures: [
      "Course catalog with enrollment management",
      "Structured module and lesson navigation",
      "Per-user progress tracking with completion state",
      "Separate instructor and student dashboards",
    ],
    challenge:
      "Designing a flexible content structure that supports different course lengths and formats without forcing a database schema change for each new content type.",
    solution:
      "Used a reference-based hierarchical model with a shared lesson schema, allowing courses of any structure to be composed dynamically without schema migrations.",
    outcome:
      "A multi-role learning platform demonstrating hierarchical data design, role-based access control, and scalable content management patterns.",
    liveUrl: "#",
    repoUrl: "#",
    category: "learning",
    featured: true,
  },
  {
    slug: "management-system",
    title: "Management System",
    summary:
      "An internal management tool for handling structured records, user roles, and business workflows.",
    problem:
      "Internal tools require strict data structure, clear role separation, and workflows that enforce business rules automatically — not just CRUD operations.",
    role: "Sole developer — modeled the domain logic and built the full backend and admin UI.",
    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    backendResponsibilities: [
      "Designed the relational data model with normalized tables and foreign key integrity",
      "Built a role and permission system supporting multiple user levels (admin, manager, staff)",
      "Implemented workflow state management with allowed transitions enforced server-side",
      "Created audit-trail logic to record who changed what and when",
      "Wrote comprehensive input validation and structured error handling",
      "Optimized common queries with proper indexing and relation fetching",
    ],
    notableFeatures: [
      "Role-based dashboard with permission-gated actions",
      "Workflow state engine with valid transition rules",
      "Audit trail for all record mutations",
      "Paginated data tables with filtering and sorting",
    ],
    challenge:
      "Modeling complex business rules — where certain actions are only valid in specific states and only by specific roles — into a clean, maintainable service layer that doesn't become a spaghetti of if/else checks.",
    solution:
      "Extracted business rules into a dedicated service layer with a transition map pattern, keeping controllers thin and making business logic explicitly testable.",
    outcome:
      "An admin-grade internal tool that demonstrates domain modeling, workflow thinking, access control, and the discipline of separating business logic from infrastructure code.",
    liveUrl: "#",
    repoUrl: "#",
    category: "management",
    featured: true,
  },
];
