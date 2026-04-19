import type { Project } from "@/data/projects";
import { ExternalLink, GitFork } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className="glass-card flex flex-col h-full p-6 group"
      aria-labelledby={`project-title-${project.slug}`}
    >
      {/* Category label */}
      <div className="mb-4">
        <span
          className="text-xs font-semibold tracking-widest uppercase px-2 py-1 rounded-md"
          style={{
            background: "var(--color-accent-glow)",
            color: "var(--color-accent-light)",
          }}
        >
          {project.category}
        </span>
      </div>

      {/* Title & summary */}
      <h3
        id={`project-title-${project.slug}`}
        className="text-xl font-bold mb-2 group-hover:text-accent-light transition-colors duration-200"
        style={{ color: "var(--color-foreground)" }}
      >
        {project.title}
      </h3>
      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-subtle)" }}>
        {project.summary}
      </p>

      {/* Backend responsibilities */}
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--color-muted)" }}>
          Backend Focus
        </p>
        <ul className="space-y-1">
          {project.backendResponsibilities.slice(0, 3).map((resp) => (
            <li
              key={resp}
              className="flex items-start gap-2 text-sm"
              style={{ color: "var(--color-subtle)" }}
            >
              <span
                className="mt-1.5 shrink-0 w-1 h-1 rounded-full"
                style={{ background: "var(--color-accent)" }}
                aria-hidden="true"
              />
              {resp}
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-0.5 rounded-md font-mono"
            style={{
              background: "var(--color-surface-elevated)",
              color: "var(--color-subtle)",
              border: "1px solid var(--color-border)",
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid var(--color-border)" }}>
        {project.repoUrl && project.repoUrl !== "#" ? (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 hover:text-accent"
            style={{ color: "var(--color-subtle)" }}
            aria-label={`View source code for ${project.title} on GitHub`}
          >
            <GitFork size={15} aria-hidden="true" />
            Code
          </a>
        ) : (
          <span
            className="flex items-center gap-1.5 text-sm font-medium cursor-not-allowed"
            style={{ color: "var(--color-muted)" }}
            title="Repository link coming soon"
          >
            <GitFork size={15} aria-hidden="true" />
            Code
          </span>
        )}

        {project.liveUrl && project.liveUrl !== "#" ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
            style={{ color: "var(--color-accent-light)" }}
            aria-label={`View live demo of ${project.title}`}
          >
            Live Demo
            <ExternalLink size={13} aria-hidden="true" />
          </a>
        ) : (
          <span
            className="ml-auto flex items-center gap-1.5 text-sm font-medium cursor-not-allowed"
            style={{ color: "var(--color-muted)" }}
            title="Live demo coming soon"
          >
            Live Demo
            <ExternalLink size={13} aria-hidden="true" />
          </span>
        )}
      </div>
    </article>
  );
}
