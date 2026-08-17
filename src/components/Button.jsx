/*
 * Flex Living — Sunlit Editorial
 * Button: reusable variants (primary, outline, ghost) with press scale feedback.
 */
import PropTypes from "prop-types";

export default function Button({ children, variant = "primary", size = "md", className = "", type = "button", ...rest }) {
  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-sm",
    lg: "h-12 px-8 text-base",
  };
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
    ghost: "text-foreground hover:bg-secondary",
    white: "bg-white text-foreground hover:bg-white/90",
  };
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-md font-semibold transition-all duration-150 active:scale-[0.97] disabled:opacity-40 disabled:cursor-not-allowed ${sizes[size]} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "outline", "ghost", "white"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  className: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};
