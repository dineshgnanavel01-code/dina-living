import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button.jsx";
import { Eye, EyeOff, Heart, LogIn, UserPlus } from "lucide-react";

export default function Auth() {
  const location = useLocation();
  const navigate = useNavigate();

  // /auth?mode=signup or /auth/signup → signup; everything else → login
  const params = new URLSearchParams(location.search);
  const modeParam = params.get("mode");
  const initialMode =
    modeParam === "signup" || location.pathname.endsWith("/signup")
      ? "signup"
      : "login";

  const [mode, setMode] = useState(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo-only: authentication is simulated client-side.
    setDone(true);
  };

  if (done) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center gap-5 px-5 py-24 text-center">
        <span className="rounded-full bg-brand-100 p-5 text-brand-700">
          <Heart className="h-7 w-7" />
        </span>
        <h1 className="font-display text-2xl font-semibold text-ink">
          {mode === "login" ? "Welcome back!" : "Account created!"}
        </h1>
        <p className="text-sm text-ink-muted">
          You're signed in as {form.email || form.name || "you"}. Your
          favorites are saved in this browser.
        </p>
        <div className="flex gap-3">
          <Button to="/properties">Browse properties</Button>
          <Button to="/favorites" variant="secondary">
            View favorites
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex max-w-md flex-col gap-8 px-5 py-12 md:py-16">
      <div className="text-center">
        <Link
          to="/"
          className="mx-auto mb-6 flex w-fit items-center gap-2.5"
        >
          <img src="/assets/favicon.svg" alt="Dina Living logo" className="h-10 w-10" />
          <span className="font-display text-xl font-semibold text-ink">
            Dina<span className="text-brand-600"> Living</span>
          </span>
        </Link>
        <h1 className="font-display text-3xl font-semibold text-ink">
          {mode === "login" ? "Welcome back" : "Create your account"}
        </h1>
        <p className="mt-2 text-sm text-ink-muted">
          {mode === "login"
            ? "Sign in to manage your saved homes."
            : "Join Dina Living and start saving your favorite listings."}
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl bg-white p-7 shadow-[0_4px_24px_-8px_rgba(74,48,34,0.18)] md:p-8"
      >
        {mode === "signup" && (
          <div className="mb-4">
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-medium text-ink"
            >
              Full name
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="input-field"
              placeholder="Jane Doe"
            />
          </div>
        )}

        <div className={mode === "signup" ? "mb-4" : ""}>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            Email address
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="input-field"
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="password"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              required
              minLength={6}
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
              className="input-field !pr-11"
              placeholder="At least 6 characters"
            />
            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-muted hover:text-ink"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        <Button type="submit" className="w-full">
          {mode === "login" ? (
            <>
              <LogIn className="h-4 w-4" /> Sign in
            </>
          ) : (
            <>
              <UserPlus className="h-4 w-4" /> Create account
            </>
          )}
        </Button>

        {mode === "login" && (
          <p className="mt-4 text-center text-sm text-ink-muted">
            <a href="#forgot" className="text-brand-600 hover:underline">
              Forgot your password?
            </a>
          </p>
        )}
      </form>

      <p className="text-center text-sm text-ink-muted">
        {mode === "login" ? (
          <>
            New here?{" "}
            <button
              type="button"
              onClick={() => setMode("signup")}
              className="font-medium text-brand-600 hover:underline"
            >
              Create an account
            </button>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => setMode("login")}
              className="font-medium text-brand-600 hover:underline"
            >
              Sign in
            </button>
          </>
        )}
      </p>

      <p className="text-center text-xs text-ink-muted/70">
        This is a demo — sign-in is simulated and your session is stored in
        the browser only.
      </p>
    </div>
  );
}
