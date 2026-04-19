import SectionHeading from "@/components/ui/SectionHeading";
import { Lightbulb, Layers, Globe } from "lucide-react";

const traits = [
  {
    icon: Lightbulb,
    label: "Curiosity-Driven",
    description:
      "I don't just implement features — I ask why they work the way they do, and how they could be better.",
  },
  {
    icon: Layers,
    label: "Architecture-Minded",
    description:
      "I think about how things fit together, how they scale, and how easy they'll be to maintain six months later.",
  },
  {
    icon: Globe,
    label: "Full-Stack Capable",
    description:
      "Comfortable from the API layer to the UI — I can build and connect both sides of an application.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-padding"
      style={{ background: "var(--color-surface)" }}
    >
      <div className="container-custom">
        <SectionHeading
          id="about-heading"
          eyebrow="Who I Am"
          title="About Me"
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Copy */}
          <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--color-subtle)" }}>
            <p>
              I&apos;m{" "}
              <strong style={{ color: "var(--color-foreground)" }}>Hamim</strong>{" "}
              — a backend-focused, full-stack developer who enjoys turning ideas
              into real digital products. My strongest area is backend
              engineering: designing REST APIs, modeling databases, writing
              business logic, and building server-side systems that are clean,
              maintainable, and built to scale.
            </p>
            <p>
              I approach software development with curiosity and consistency. I
              don&apos;t just implement features — I think about how they fit
              together, how they&apos;ll perform under load, and how easy
              they&apos;ll be to maintain six months from now.
            </p>
            <p>
              On the frontend, I&apos;m comfortable with React and Next.js,
              which means I can build complete, cohesive products from the API
              layer to the user interface.
            </p>
            <p>
              When I&apos;m not coding, I&apos;m exploring tech content, working
              on my written communication, or playing mobile games to unwind.
            </p>

            {/* Quick facts */}
            <div
              className="grid grid-cols-2 gap-4 pt-4 mt-4"
              style={{ borderTop: "1px solid var(--color-border)" }}
            >
              {[
                { label: "Focus", value: "Backend Engineering" },
                { label: "Level", value: "Junior Developer" },
                { label: "Education", value: "Diploma in CS&T" },
                { label: "Status", value: "Open to Opportunities" },
              ].map((fact) => (
                <div key={fact.label}>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: "var(--color-muted)" }}>
                    {fact.label}
                  </p>
                  <p className="text-sm font-medium" style={{ color: "var(--color-foreground)" }}>
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Trait cards */}
          <div className="flex flex-col gap-4">
            {traits.map((trait) => {
              const Icon = trait.icon;
              return (
                <div key={trait.label} className="glass-card p-5 flex gap-4 items-start">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      background: "var(--color-accent-glow)",
                      border: "1px solid rgba(99,102,241,0.2)",
                    }}
                    aria-hidden="true"
                  >
                    <Icon size={18} style={{ color: "var(--color-accent-light)" }} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: "var(--color-foreground)" }}>
                      {trait.label}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-subtle)" }}>
                      {trait.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Brand statement */}
            <blockquote
              className="mt-2 px-5 py-4 rounded-xl italic text-sm leading-relaxed"
              style={{
                background: "var(--color-accent-glow)",
                border: "1px solid rgba(99,102,241,0.2)",
                color: "var(--color-accent-light)",
                borderLeft: "3px solid var(--color-accent)",
              }}
            >
              &ldquo;I build the backend systems that make things actually work —
              clean APIs, solid databases, and scalable architecture that teams
              can rely on.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
