import SectionHeading from "@/components/ui/SectionHeading";

const milestones = [
  {
    period: "Start",
    label: "HTML & CSS",
    description:
      "Started with the fundamentals — building small pages, experimenting with layouts, and getting comfortable with how the web works.",
    tag: "Foundation",
  },
  {
    period: "Next",
    label: "JavaScript & the Backend",
    description:
      "Moved into JavaScript and discovered something important: the most interesting problems aren't on the screen — they're in the systems behind it. I became drawn to data structures, server responses, authentication flows, and how business logic stays readable as a codebase grows.",
    tag: "Turning Point",
    accent: true,
  },
  {
    period: "Built",
    label: "Real-World Projects",
    description:
      "Built an e-commerce platform, a booking system, a learning platform, and a management system. Each one taught me something new — a more efficient data model, better error handling, or seeing old code with fresh eyes and knowing what to do differently.",
    tag: "Growth",
  },
  {
    period: "Now",
    label: "Professional Practice",
    description:
      "Working as a backend developer, applying those lessons in a real professional environment and continuing to grow every day. My goal is to become an engineer who builds systems that teams trust — reliable, well-documented, and straightforward to work with.",
    tag: "Current",
    accent: true,
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="section-padding"
    >
      <div className="container-custom">
        <SectionHeading
          id="journey-heading"
          eyebrow="How I Got Here"
          title="My Journey"
          description="A consistent path of learning by building, questioning how things work, and choosing depth over shortcuts."
          align="center"
        />

        {/* Timeline */}
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: "var(--color-border)" }}
            aria-hidden="true"
          />

          <ol className="space-y-8" aria-label="Career journey timeline">
            {milestones.map((milestone, index) => (
              <li key={milestone.label} className="relative flex gap-6 sm:gap-8">
                {/* Timeline dot */}
                <div
                  className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold z-10"
                  style={{
                    background: milestone.accent
                      ? "var(--color-accent)"
                      : "var(--color-surface-elevated)",
                    border: milestone.accent
                      ? "2px solid var(--color-accent-light)"
                      : "2px solid var(--color-border)",
                    color: milestone.accent ? "#fff" : "var(--color-muted)",
                  }}
                  aria-hidden="true"
                >
                  {index + 1}
                </div>

                {/* Content */}
                <div
                  className="flex-1 pb-2"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3
                      className="font-semibold text-base"
                      style={{ color: "var(--color-foreground)" }}
                    >
                      {milestone.label}
                    </h3>
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded-full"
                      style={{
                        background: milestone.accent
                          ? "var(--color-accent-glow)"
                          : "var(--color-surface-elevated)",
                        color: milestone.accent
                          ? "var(--color-accent-light)"
                          : "var(--color-muted)",
                        border: milestone.accent
                          ? "1px solid rgba(99,102,241,0.25)"
                          : "1px solid var(--color-border)",
                      }}
                    >
                      {milestone.tag}
                    </span>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-subtle)" }}
                  >
                    {milestone.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
