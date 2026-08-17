/*
 * Flex Living — Sunlit Editorial
 * SectionHeading: editorial eyebrow + serif display title + quiet description.
 */
import PropTypes from "prop-types";

export default function SectionHeading({ eyebrow, title, description, align = "left", light = false }) {
  return (
    <div className={`space-y-3 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className={`text-xs uppercase tracking-[0.18em] font-semibold ${light ? "text-white/70" : "text-primary"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-display text-3xl md:text-4xl font-semibold tracking-tight ${light ? "text-white" : ""}`}>
        {title}
      </h2>
      {description && (
        <p className={`leading-relaxed ${light ? "text-white/70" : "text-muted-foreground"}`}>{description}</p>
      )}
    </div>
  );
}

SectionHeading.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  align: PropTypes.oneOf(["left", "center"]),
  light: PropTypes.bool,
};
