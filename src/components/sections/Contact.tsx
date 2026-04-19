import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ui/ContactForm";
import { GitFork, Link2, Mail } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "your@email.com",
    href: "mailto:your@email.com",
    description: "Best for detailed inquiries",
  },
  {
    icon: GitFork,
    label: "GitHub",
    value: "github.com/yourusername",
    href: "https://github.com/",
    description: "See my code and projects",
    external: true,
  },
  {
    icon: Link2,
    label: "LinkedIn",
    value: "linkedin.com/in/yourusername",
    href: "https://linkedin.com/",
    description: "Professional profile",
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-padding"
      style={{ background: "var(--color-surface)" }}
    >
      <div className="container-custom">
        <SectionHeading
          id="contact-heading"
          eyebrow="Get In Touch"
          title="Let's Work Together"
          description="Whether you're a recruiter, a team exploring new hires, or someone with a project that needs solid backend architecture — I'd be happy to connect."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 max-w-4xl mx-auto">
          {/* Left: copy + contact methods */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-subtle)" }}>
              I&apos;m currently open to{" "}
              <strong style={{ color: "var(--color-foreground)" }}>
                full-time roles
              </strong>
              ,{" "}
              <strong style={{ color: "var(--color-foreground)" }}>
                part-time contracts
              </strong>
              , and{" "}
              <strong style={{ color: "var(--color-foreground)" }}>
                freelance projects
              </strong>
              . Let&apos;s talk about what you&apos;re building.
            </p>

            <div className="flex flex-col gap-3">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.external ? "_blank" : undefined}
                    rel={method.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group"
                    style={{
                      background: "var(--color-surface-elevated)",
                      border: "1px solid var(--color-border)",
                    }}
                    aria-label={`${method.label}: ${method.value}${method.external ? " (opens in new tab)" : ""}`}
                  >
                    <div
                      className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200"
                      style={{
                        background: "var(--color-surface)",
                        border: "1px solid var(--color-border)",
                        color: "var(--color-subtle)",
                      }}
                      aria-hidden="true"
                    >
                      <Icon size={15} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: "var(--color-muted)" }}>
                        {method.label}
                      </p>
                      <p className="text-sm font-medium truncate" style={{ color: "var(--color-foreground)" }}>
                        {method.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Availability note */}
            <div
              className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-medium"
              style={{
                background: "rgba(74,222,128,0.08)",
                border: "1px solid rgba(74,222,128,0.2)",
                color: "#4ade80",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" aria-hidden="true" />
              Currently available — response within 24 hours
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <div
              className="glass-card p-6 sm:p-8"
              style={{ borderColor: "rgba(99,102,241,0.15)" }}
            >
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
