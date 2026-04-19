interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  id?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  id,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 mb-14 ${alignClass}`}>
      {eyebrow && (
        <span
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase"
          style={{ color: "var(--color-accent)" }}
        >
          <span
            className="inline-block w-6 h-px"
            style={{ background: "var(--color-accent)" }}
            aria-hidden="true"
          />
          {eyebrow}
          <span
            className="inline-block w-6 h-px"
            style={{ background: "var(--color-accent)" }}
            aria-hidden="true"
          />
        </span>
      )}
      <h2
        id={id}
        className="text-3xl sm:text-4xl font-bold tracking-tight"
        style={{ color: "var(--color-foreground)" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="max-w-xl text-base leading-relaxed"
          style={{ color: "var(--color-subtle)" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
