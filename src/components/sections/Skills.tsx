import SectionHeading from "@/components/ui/SectionHeading";
import SkillBadge from "@/components/ui/SkillBadge";
import { skillCategories } from "@/data/skills";
import { Server, Database, Layout, Palette, Wrench } from "lucide-react";

const CategoryIcon: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties }>> = {
  server: Server,
  database: Database,
  layout: Layout,
  palette: Palette,
  wrench: Wrench,
};

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="section-padding"
    >
      <div className="container-custom">
        <SectionHeading
          id="skills-heading"
          eyebrow="Tech Stack"
          title="What I Work With"
          description="Organized by area. My backend and database skills are where I'm strongest — the rest supports full-stack delivery."
          align="center"
        />

        {/* Legend */}
        <div className="flex items-center justify-center gap-5 mb-10 flex-wrap">
          {[
            { level: "strong", label: "Strong", color: "var(--color-accent)" },
            { level: "comfortable", label: "Comfortable", color: "#22d3ee" },
            { level: "familiar", label: "Familiar", color: "var(--color-muted)" },
          ].map((item) => (
            <div key={item.level} className="flex items-center gap-1.5 text-xs" style={{ color: "var(--color-subtle)" }}>
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: item.color }}
                aria-hidden="true"
              />
              {item.label}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category) => {
            const Icon = CategoryIcon[category.icon] ?? Server;
            return (
              <article
                key={category.id}
                className="glass-card p-5 flex flex-col gap-4"
                style={{
                  borderColor: category.highlight
                    ? "rgba(99,102,241,0.2)"
                    : "var(--color-border)",
                  background: category.highlight
                    ? "var(--color-surface-elevated)"
                    : "var(--color-surface)",
                }}
                aria-labelledby={`skill-category-${category.id}`}
              >
                {/* Category header */}
                <div className="flex items-center gap-3">
                  <div
                    className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{
                      background: category.highlight
                        ? "var(--color-accent-glow)"
                        : "var(--color-surface-elevated)",
                      border: category.highlight
                        ? "1px solid rgba(99,102,241,0.2)"
                        : "1px solid var(--color-border)",
                    }}
                    aria-hidden="true"
                  >
                    <Icon
                      size={16}
                      style={{
                        color: category.highlight
                          ? "var(--color-accent-light)"
                          : "var(--color-subtle)",
                      }}
                    />
                  </div>
                  <div>
                    <h3
                      id={`skill-category-${category.id}`}
                      className="font-semibold text-sm"
                      style={{ color: "var(--color-foreground)" }}
                    >
                      {category.label}
                      {category.highlight && (
                        <span
                          className="ml-2 text-xs font-medium px-1.5 py-0.5 rounded"
                          style={{
                            background: "var(--color-accent-glow)",
                            color: "var(--color-accent-light)",
                          }}
                        >
                          Core
                        </span>
                      )}
                    </h3>
                    <p className="text-xs mt-0.5" style={{ color: "var(--color-muted)" }}>
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill badges */}
                <ul className="flex flex-wrap gap-2" role="list" aria-label={`${category.label} skills`}>
                  {category.skills.map((skill) => (
                    <SkillBadge
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
