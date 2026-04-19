interface SkillBadgeProps {
  name: string;
  level?: "strong" | "comfortable" | "familiar";
}

const levelDotColor: Record<string, string> = {
  strong: "var(--color-accent)",
  comfortable: "#22d3ee",
  familiar: "var(--color-muted)",
};

export default function SkillBadge({ name, level }: SkillBadgeProps) {
  return (
    <li
      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
      style={{
        background: "var(--color-surface-elevated)",
        border: "1px solid var(--color-border)",
        color: "var(--color-foreground)",
      }}
    >
      {level && (
        <span
          className="shrink-0 w-1.5 h-1.5 rounded-full"
          style={{ background: levelDotColor[level] ?? "var(--color-muted)" }}
          aria-label={`Proficiency: ${level}`}
          title={level.charAt(0).toUpperCase() + level.slice(1)}
        />
      )}
      {name}
    </li>
  );
}
