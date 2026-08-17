import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Heart, Menu, Search, X } from "lucide-react";
import { useFavorites } from "../contexts/FavoritesContext.jsx";

const links = [
  { to: "/", label: "Home" },
  { to: "/properties", label: "Properties" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { favorites } = useFavorites();
  const navigate = useNavigate();

  const runSearch = (e) => {
    e?.preventDefault();
    if (!query.trim()) return;
    setOpen(false);
    navigate(`/properties?query=${encodeURIComponent(query.trim())}`);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") runSearch(e);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-brand-50/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-4">
        <Link to="/" className="flex shrink-0 items-center gap-2.5">
          <img
            src="/assets/favicon.svg"
            alt="Dina Living logo"
            className="h-9 w-9"
          />
          <span className="font-display text-xl font-semibold tracking-tight text-ink">
            Dina<span className="text-brand-600"> Living</span>
          </span>
        </Link>

        {/* Desktop nav links */}
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

        {/* Desktop search bar + Search button */}
        <form
          onSubmit={runSearch}
          className="hidden w-full max-w-md items-center gap-2 md:flex"
        >
          <label htmlFor="navbar-search" className="sr-only">
            Search properties
          </label>
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
            <input
              id="navbar-search"
              type="text"
              placeholder="Search properties…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKey}
              className="input-field w-full !pl-10"
            />
          </div>
          <button
            type="submit"
            className="btn-primary inline-flex shrink-0 items-center gap-2 whitespace-nowrap"
          >
            <Search className="h-4 w-4" />
            Search
          </button>
        </form>

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

      {/* Mobile menu (hamburger) with search bar inside */}
      {open && (
        <div className="border-t border-ink/5 bg-brand-50 px-5 pb-4 pt-3 md:hidden">
          <form onSubmit={runSearch} className="flex items-center gap-2">
            <label htmlFor="navbar-search-mobile" className="sr-only">
              Search properties
            </label>
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
              <input
                id="navbar-search-mobile"
                type="text"
                placeholder="Search properties…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKey}
                className="input-field w-full !pl-10"
              />
            </div>
            <button
              type="submit"
              className="btn-primary shrink-0"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
          </form>
          <div className="my-3 border-t border-ink/5" />
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
