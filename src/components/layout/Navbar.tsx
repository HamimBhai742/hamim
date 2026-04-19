"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header
      role="banner"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: isScrolled
          ? "rgba(13, 15, 20, 0.92)"
          : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        borderBottom: isScrolled
          ? "1px solid var(--color-border)"
          : "1px solid transparent",
      }}
    >
      <nav
        className="container-custom flex items-center justify-between h-16 px-6 lg:px-10"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 font-bold text-base transition-opacity duration-200 hover:opacity-80"
          style={{ color: "var(--color-foreground)" }}
          aria-label="Hamim — Back to top"
        >
          <span
            className="flex items-center justify-center w-7 h-7 rounded-md"
            style={{
              background: "var(--color-accent)",
              color: "#fff",
            }}
            aria-hidden="true"
          >
            <Code2 size={14} />
          </span>
          Hamim
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200"
                style={{ color: "var(--color-subtle)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--color-foreground)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--color-subtle)";
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-105"
          style={{
            background: "var(--color-accent)",
            color: "#fff",
          }}
        >
          Get In Touch
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((v) => !v)}
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg transition-colors duration-200"
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            color: "var(--color-foreground)",
          }}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
        >
          {isMenuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-nav"
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
        style={{
          background: "rgba(13, 15, 20, 0.97)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <ul
          className="flex flex-col px-6 py-4 gap-1"
          role="list"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="block px-3 py-2.5 rounded-md text-sm font-medium transition-colors duration-200"
                style={{ color: "var(--color-subtle)" }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2 pt-3" style={{ borderTop: "1px solid var(--color-border)" }}>
            <a
              href="#contact"
              onClick={closeMenu}
              className="block text-center px-4 py-2.5 rounded-lg text-sm font-semibold"
              style={{ background: "var(--color-accent)", color: "#fff" }}
            >
              Get In Touch
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
