import SectionHeading from "@/components/ui/SectionHeading";
import { education } from "@/data/experience";
import { GraduationCap, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="section-padding"
    >
      <div className="container-custom">
        <SectionHeading
          id="education-heading"
          eyebrow="Academic Background"
          title="Education"
          align="left"
        />

        <div className="max-w-2xl space-y-6">
          {education.map((edu) => (
            <article
              key={edu.id}
              className="glass-card p-6 sm:p-8"
              aria-labelledby={`edu-title-${edu.id}`}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{
                    background: "var(--color-accent-glow)",
                    border: "1px solid rgba(99,102,241,0.2)",
                  }}
                  aria-hidden="true"
                >
                  <GraduationCap size={18} style={{ color: "var(--color-accent-light)" }} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
                    <h3
                      id={`edu-title-${edu.id}`}
                      className="font-bold text-base leading-tight"
                      style={{ color: "var(--color-foreground)" }}
                    >
                      {edu.degree}
                    </h3>
                    {edu.gpa && (
                      <span
                        className="flex-shrink-0 text-xs font-bold px-2.5 py-1 rounded-lg"
                        style={{
                          background: "var(--color-accent-glow)",
                          border: "1px solid rgba(99,102,241,0.2)",
                          color: "var(--color-accent-light)",
                        }}
                        aria-label={`GPA: ${edu.gpa}`}
                      >
                        GPA {edu.gpa}
                      </span>
                    )}
                  </div>
                  <p className="text-sm mt-0.5" style={{ color: "var(--color-subtle)" }}>
                    {edu.institution} &middot; {edu.period}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "var(--color-subtle)" }}
              >
                {edu.description}
              </p>

              {/* Coursework */}
              <div style={{ borderTop: "1px solid var(--color-border)" }} className="pt-4">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen size={13} style={{ color: "var(--color-muted)" }} aria-hidden="true" />
                  <p
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: "var(--color-muted)" }}
                  >
                    Key Coursework
                  </p>
                </div>
                <ul className="flex flex-wrap gap-2" role="list" aria-label="Key coursework">
                  {edu.coursework.map((course) => (
                    <li
                      key={course}
                      className="text-xs px-2.5 py-1 rounded-md"
                      style={{
                        background: "var(--color-surface-elevated)",
                        border: "1px solid var(--color-border)",
                        color: "var(--color-subtle)",
                      }}
                    >
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
