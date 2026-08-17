export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}) {
  const alignClass =
    align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.2em] mb-3 ${
            dark ? "text-brand-300" : "text-brand-600"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl font-semibold leading-tight ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            dark ? "text-brand-100/80" : "text-ink-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
