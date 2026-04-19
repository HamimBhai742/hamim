import { GitFork, Link2, Mail, Code2 } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="mt-auto"
      style={{ borderTop: "1px solid var(--color-border)" }}
    >
      <div className="container-custom px-6 lg:px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2 font-bold text-sm" style={{ color: "var(--color-foreground)" }}>
          <span
            className="flex items-center justify-center w-6 h-6 rounded-md"
            style={{ background: "var(--color-accent)", color: "#fff" }}
            aria-hidden="true"
          >
            <Code2 size={12} />
          </span>
          Hamim
        </div>

        {/* Copyright */}
        <p className="text-xs text-center" style={{ color: "var(--color-muted)" }}>
          Designed &amp; built by Hamim &middot; &copy; {year} &middot; All rights reserved
        </p>

        {/* Social links */}
        <nav aria-label="Social links" className="flex items-center gap-2">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 hover:scale-110"
            style={{
              background: "var(--color-surface-elevated)",
              border: "1px solid var(--color-border)",
              color: "var(--color-subtle)",
            }}
            aria-label="GitHub profile (opens in new tab)"
          >
            <GitFork size={15} aria-hidden="true" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 hover:scale-110"
            style={{
              background: "var(--color-surface-elevated)",
              border: "1px solid var(--color-border)",
              color: "var(--color-subtle)",
            }}
            aria-label="LinkedIn profile (opens in new tab)"
          >
            <Link2 size={15} aria-hidden="true" />
          </a>
          <a
            href="mailto:your@email.com"
            className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 hover:scale-110"
            style={{
              background: "var(--color-surface-elevated)",
              border: "1px solid var(--color-border)",
              color: "var(--color-subtle)",
            }}
            aria-label="Send me an email"
          >
            <Mail size={15} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </footer>
  );
}
