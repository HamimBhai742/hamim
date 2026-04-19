import { ArrowDown, GitFork, Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-dvh flex items-center dot-grid overflow-hidden"
    >
      {/* Ambient glow blobs */}
      <div
        className="accent-glow w-96 h-96 -top-32 -left-32 opacity-30"
        style={{ background: "var(--color-accent)" }}
        aria-hidden="true"
      />
      <div
        className="accent-glow w-80 h-80 -bottom-20 -right-20 opacity-20"
        style={{ background: "#a78bfa" }}
        aria-hidden="true"
      />

      <div className="container-custom section-padding relative z-10 w-full pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="flex flex-col gap-6">
            {/* Status badge */}
            <div className="animate-fade-in-up">
              <span
                className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full"
                style={{
                  background: "var(--color-accent-glow)",
                  border: "1px solid rgba(99, 102, 241, 0.25)",
                  color: "var(--color-accent-light)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: "#4ade80" }}
                  aria-hidden="true"
                />
                Available for new opportunities
              </span>
            </div>

            {/* Main headline */}
            <div className="animate-fade-in-up delay-100">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                I Build the Systems{" "}
                <span className="gradient-text">Behind the Product.</span>
              </h1>
            </div>

            {/* Subheading */}
            <p
              className="text-base sm:text-lg leading-relaxed max-w-lg animate-fade-in-up delay-200"
              style={{ color: "var(--color-subtle)" }}
            >
              Full-stack developer with a backend focus — I design APIs,
              architect databases, and build server-side systems that are clean,
              scalable, and built to last.
            </p>

            {/* Tech highlights */}
            <div className="flex flex-wrap gap-2 animate-fade-in-up delay-300">
              {[
                "Node.js",
                "Express.js",
                "MongoDB",
                "PostgreSQL",
                "REST API",
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-md font-mono"
                  style={{
                    background: "var(--color-surface-elevated)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-subtle)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 animate-fade-in-up delay-400">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:opacity-90 hover:scale-105"
                style={{ background: "var(--color-accent)", color: "#fff" }}
              >
                View My Work
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:border-opacity-60"
                style={{
                  background: "transparent",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-foreground)",
                }}
              >
                <Download size={14} aria-hidden="true" />
                Download Resume
              </a>
            </div>

            {/* Social proof links */}
            <div className="flex items-center gap-4 animate-fade-in-up delay-500">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm transition-colors duration-200"
                style={{ color: "var(--color-muted)" }}
                aria-label="View GitHub profile (opens in new tab)"
              >
                <GitFork size={15} aria-hidden="true" />
                GitHub
              </a>
              <span style={{ color: "var(--color-border)" }} aria-hidden="true">|</span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm transition-colors duration-200"
                style={{ color: "var(--color-muted)" }}
              >
                Let&apos;s talk ↗
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div className="flex justify-center lg:justify-end animate-fade-in delay-200">
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-full scale-105"
                style={{
                  background:
                    "conic-gradient(from 0deg, var(--color-accent), #a78bfa, var(--color-accent))",
                  filter: "blur(16px)",
                  opacity: 0.35,
                }}
                aria-hidden="true"
              />
              <div
                className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden"
                style={{
                  border: "2px solid var(--color-border)",
                  boxShadow: "0 0 0 4px var(--color-surface)",
                }}
              >
                <Image
                  src="/avatar.png"
                  alt="Hamim — backend-focused full-stack developer"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  sizes="(max-width: 640px) 240px, 288px"
                />
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-lg text-xs font-semibold"
                style={{
                  background: "var(--color-surface-elevated)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-foreground)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                }}
              >
                Backend Developer
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="flex justify-center mt-16 animate-fade-in delay-600">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-xs transition-opacity duration-200 hover:opacity-60"
            style={{ color: "var(--color-muted)" }}
            aria-label="Scroll down to About section"
          >
            <span>Scroll</span>
            <ArrowDown size={14} className="animate-bounce" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
