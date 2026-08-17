/*
 * Dina Living — Sunlit Editorial
 * Sticky navbar: logo, nav links, search field, auth buttons, mobile hamburger.
 */
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Search, Heart } from "lucide-react";

const LOGO = "/assets/dinabrand-logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const runSearch = (value) => {
    if (value.trim()) {
      navigate(`/properties?q=${encodeURIComponent(value.trim())}`);
    } else {
      navigate("/properties");
    }
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/92 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20 gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <img src={LOGO} alt="Dina Living logo" className="h-9 w-9 md:h-11 md:w-11" />
          <span className="font-display text-xl md:text-2xl font-semibold tracking-tight text-foreground">
            Dina <span className="italic text-primary">Living</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors duration-150 hover:text-primary ${
                  active ? "text-primary" : "text-foreground/70"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Search + auth (desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") runSearch(query);
              }}
              placeholder="Search city, area…"
              className="h-9 w-48 rounded-md border border-border bg-card pl-9 pr-3 text-sm outline-none focus:border-primary"
            />
          </div>
          <Link to="/login">
            <button className="text-sm font-semibold px-4 py-2 rounded-md hover:bg-secondary transition-colors">
              Log In
            </button>
          </Link>
          <Link to="/signup">
            <button className="text-sm font-semibold px-4 py-2 rounded-md bg-accent text-accent-foreground hover:bg-accent/90 transition-colors">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-2">
          <Link to="/favorites" aria-label="Favorites">
            <button className="p-2 rounded-md hover:bg-secondary transition-colors">
              <Heart className="h-5 w-5" />
            </button>
          </Link>
          <button
            className="p-2 rounded-md hover:bg-secondary transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background px-4 pb-6 pt-4 fade-up">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className={`py-2.5 px-2 text-base font-medium rounded-md transition-colors ${
                  location.pathname === link.href ? "text-primary bg-secondary" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="relative mt-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") runSearch(query);
              }}
              placeholder="Search city, area…"
              className="w-full rounded-md border border-border bg-card pl-9 pr-3 py-2 text-sm outline-none focus:border-primary"
            />
          </div>
          <div className="mt-4 flex gap-3">
            <Link to="/login" onClick={() => setOpen(false)} className="flex-1">
              <button className="w-full border border-border rounded-md py-2.5 font-semibold hover:bg-secondary transition-colors">
                Log In
              </button>
            </Link>
            <Link to="/signup" onClick={() => setOpen(false)} className="flex-1">
              <button className="w-full rounded-md py-2.5 font-semibold bg-accent text-accent-foreground hover:bg-accent/90 transition-colors">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
