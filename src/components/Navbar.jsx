import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Heart, Menu, Search, X } from "lucide-react";
import { useFavorites } from "../contexts/FavoritesContext.jsx";
import { filterOptions } from "../data/properties.js";

const links = [
  { to: "/", label: "Home" },
  { to: "/properties", label: "Properties" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const DEFAULT_FORM = { query: "", type: "All", purpose: "All" };

/**
 * Navbar with an integrated search bar.
 *
 * - Desktop (md+): a search input is always visible in the navbar. Typing a
 *   query (and optionally choosing filters) and pressing Enter or clicking the
 *   magnifier navigates to /properties with the matching query string.
 * - Mobile (< md): a Search icon opens a full-width search panel (a slim
 *   version of the hero/properties SearchPanel) that drops down below the nav.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [form, setForm] = useState(DEFAULT_FORM);
  const { favorites } = useFavorites();
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const desktopInputRef = useRef(null);

  // Close the mobile search panel when a navigation happens.
  useEffect(() => {
    setSearchOpen(false);
  }, [open]);

  const runSearch = (value, type, purpose) => {
    const params = new URLSearchParams();
    if (value && value.trim()) params.set("query", value.trim());
    if (type !== "All") params.set("type", type);
    if (purpose !== "All") params.set("purpose", purpose);
    const qs = params.toString();
    setSearchOpen(false);
    setOpen(false);
    navigate(`/properties${qs ? `?${qs}` : ""}`);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") runSearch(form.query, form.type, form.purpose);
  };

  const handleDesktopKey = (e) => {
    if (e.key === "Enter") runSearch(form.query, form.type, form.purpose);
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

        {/* ---------- Desktop search bar ---------- */}
        <div
          ref={searchRef}
          className="hidden flex-1 items-center gap-2 md:flex lg:max-w-md"
        >
          <label className="sr-only" htmlFor="navbar-search-input">
            Search location or property name
          </label>
          <div className="relative w-full">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
            <input
              id="navbar-search-input"
              ref={desktopInputRef}
              type="text"
              placeholder="Search properties…"
              value={form.query}
              onChange={(e) => setForm({ ...form, query: e.target.value })}
              onKeyDown={handleDesktopKey}
              className="input-field !pl-10"
            />
          </div>
          <button
            type="button"
            aria-label="Search"
            onClick={() => runSearch(form.query, form.type, form.purpose)}
            className="btn-primary shrink-0"
          >
            <Search className="h-4 w-4" />
            <span className="hidden xl:inline">Search</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          {/* Mobile search toggle */}
          <button
            type="button"
            aria-label="Toggle search"
            aria-expanded={searchOpen}
            className={`rounded-lg p-2.5 text-ink-light transition-colors hover:bg-brand-100 hover:text-ink md:hidden ${
              searchOpen ? "bg-brand-100 text-ink" : ""
            }`}
            onClick={() => {
              setSearchOpen(!searchOpen);
              setOpen(false);
            }}
          >
            {searchOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Search className="h-5 w-5" />
            )}
          </button>

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
            onClick={() => {
              setOpen(!open);
              setSearchOpen(false);
            }}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* ---------- Mobile search panel ---------- */}
      {searchOpen && (
        <div className="border-t border-ink/5 bg-brand-50 px-5 pb-4 pt-3 md:hidden">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
            <input
              type="text"
              placeholder="Search location or property name…"
              value={form.query}
              onChange={(e) => setForm({ ...form, query: e.target.value })}
              onKeyDown={handleKey}
              className="input-field !pl-10"
            />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <select
              aria-label="Property type"
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="input-field cursor-pointer"
            >
              <option value="All">All Types</option>
              {filterOptions.types.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <select
              aria-label="Purpose"
              value={form.purpose}
              onChange={(e) => setForm({ ...form, purpose: e.target.value })}
              className="input-field cursor-pointer"
            >
              <option value="All">Buy & Rent</option>
              {filterOptions.purposes.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
          <button
            type="button"
            onClick={() => runSearch(form.query, form.type, form.purpose)}
            className="btn-primary mt-3 w-full"
          >
            <Search className="h-4 w-4" /> Search
          </button>
        </div>
      )}

      {/* ---------- Mobile menu ---------- */}
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
