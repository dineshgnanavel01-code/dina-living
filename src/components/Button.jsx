import { Link } from "react-router-dom";

/**
 * Versatile button that renders as an <a>, <Link>, or <button>.
 */
export default function Button({
  children,
  href,
  to,
  onClick,
  variant = "primary",
  size = "md",
  type = "button",
  className = "",
  ...rest
}) {
  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "btn-ghost",
  }[variant];

  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "",
    lg: "px-7 py-3.5 text-base",
  }[size];

  const base = `${variantClasses} ${sizeClasses} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={base} {...rest}>
        {children}
      </a>
    );
  }
  if (to) {
    return (
      <Link to={to} className={base} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={base} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
