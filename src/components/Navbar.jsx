import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Heart, Menu, X } from "lucide-react";
import { useFavorites } from "../contexts/FavoritesContext.jsx";

const links = [
  { to: "/", label: "Home" },
  { to: "/properties", label: "Properties" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { favorites } = useFavorites();

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-brand-50/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src="/assets/favicon.svg"
            alt="Dina Living logo"
            className="h-9 w-9"
          />
          <span className="font-display text-xl font-semibold tracking-tight text-ink">
            Dina<span className="text-brand-600"> Living</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-brand-100 text-brand-800"
                    : "text-ink-light hover:bg-brand-100/60 hover:text-ink"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/favorites"
            aria-label="Favorites"
            className="relative rounded-lg p-2.5 text-ink-light transition-colors hover:bg-brand-100 hover:text-ink"
          >
            <Heart className="h-5 w-5" />
            {favorites.length > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4.5 w-4.5 min-w-[18px] items-center justify-center rounded-full bg-brand-600 px-1 text-[10px] font-bold text-white">
                {favorites.length}
              </span>
            )}
          </Link>
          <Link to="/auth" className="btn-secondary hidden md:inline-flex">
            Sign In
          </Link>
          <button
            className="rounded-lg p-2.5 text-ink-light transition-colors hover:bg-brand-100 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-ink/5 bg-brand-50 px-5 pb-4 pt-2 md:hidden">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-4 py-3 text-sm font-medium ${
                  isActive
                    ? "bg-brand-100 text-brand-800"
                    : "text-ink-light hover:bg-brand-100/60"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/auth"
            onClick={() => setOpen(false)}
            className="btn-primary mt-3 w-full"
          >
            Sign In
          </Link>
        </div>
      )}
    </header>
  );
}
