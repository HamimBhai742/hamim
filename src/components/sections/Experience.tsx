import SectionHeading from "@/components/ui/SectionHeading";
import { experiences } from "@/data/experience";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="section-padding"
      style={{ background: "var(--color-surface)" }}
    >
      <div className="container-custom">
        <SectionHeading
          id="experience-heading"
          eyebrow="Work History"
          title="Experience"
          align="left"
        />

        <div className="max-w-2xl space-y-6">
          {experiences.map((exp) => (
            <article
              key={exp.id}
              className="glass-card p-6 sm:p-8"
              aria-labelledby={`exp-title-${exp.id}`}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                <div className="flex items-start gap-3">
                  <div
                    className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-0.5"
                    style={{
                      background: "var(--color-accent-glow)",
                      border: "1px solid rgba(99,102,241,0.2)",
                    }}
                    aria-hidden="true"
                  >
                    <Briefcase size={17} style={{ color: "var(--color-accent-light)" }} />
                  </div>
                  <div>
                    <h3
                      id={`exp-title-${exp.id}`}
                      className="font-bold text-lg leading-tight"
                      style={{ color: "var(--color-foreground)" }}
                    >
                      {exp.role}
                    </h3>
                    <p className="text-sm mt-0.5" style={{ color: "var(--color-subtle)" }}>
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {exp.current && (
                    <span
                      className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        background: "rgba(74,222,128,0.1)",
                        border: "1px solid rgba(74,222,128,0.25)",
                        color: "#4ade80",
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                      Current
                    </span>
                  )}
                  <span
                    className="flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{
                      background: "var(--color-surface-elevated)",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-muted)",
                    }}
                  >
                    <Calendar size={11} aria-hidden="true" />
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Description */}
              <ul className="space-y-2.5 mb-5" aria-label="Responsibilities">
                {exp.description.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-relaxed"
                    style={{ color: "var(--color-subtle)" }}
                  >
                    <span
                      className="mt-1.5 shrink-0 w-1 h-1 rounded-full"
                      style={{ background: "var(--color-accent)" }}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Tech used */}
              <div className="flex flex-wrap gap-1.5 pt-4" style={{ borderTop: "1px solid var(--color-border)" }}>
                {exp.technologies.map((tech) => (
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
