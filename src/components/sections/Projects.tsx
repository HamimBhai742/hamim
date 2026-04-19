import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section-padding"
      style={{ background: "var(--color-surface)" }}
    >
      <div className="container-custom">
        <SectionHeading
          id="projects-heading"
          eyebrow="What I've Built"
          title="Featured Projects"
          description="A selection of real-world projects that demonstrate how I approach backend architecture, data modeling, and full-stack delivery."
          align="center"
        />

        <ul
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          role="list"
          aria-label="Featured projects"
        >
          {featured.map((project) => (
            <li key={project.slug} className="flex">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>

        {/* Case study note */}
        <div
          className="mt-10 p-5 rounded-xl text-sm leading-relaxed flex flex-col sm:flex-row gap-3 sm:items-center justify-between"
          style={{
            background: "var(--color-surface-elevated)",
            border: "1px solid var(--color-border)",
          }}
        >
          <p style={{ color: "var(--color-subtle)" }}>
            <strong style={{ color: "var(--color-foreground)" }}>
              Want the full technical breakdown?
            </strong>{" "}
            Each project has a detailed case study covering the problem, data
            model, architecture decisions, and what I learned.
          </p>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-90"
            style={{ background: "var(--color-accent)", color: "#fff" }}
          >
            Ask me about these
          </a>
        </div>
      </div>
    </section>
  );
}
