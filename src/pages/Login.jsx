/*
 * Flex Living — Sunlit Editorial
 * Login page: email/password form with validation and demo navigation.
 */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      return;
    }
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 700);
  };

  const input =
    "w-full h-11 rounded-md border border-border bg-background px-3 text-sm outline-none focus:border-primary placeholder:text-muted-foreground/70";

  return (
    <main className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 py-14">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="font-display text-4xl font-semibold tracking-tight">Welcome back</h1>
          <p className="mt-2 text-muted-foreground">Sign in to save favorites and book viewings.</p>
        </div>

        <form onSubmit={submit} className="bg-card border border-border rounded-lg p-6 md:p-8 space-y-5">
          <div className="space-y-2">
            <label htmlFor="email" className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold">Email</label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              placeholder="you@email.com"
              className={input}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold">Password</label>
            <input
              id="password"
              type="password"
              value={form.password}
              onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
              placeholder="••••••••"
              className={input}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 rounded-md bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-colors disabled:opacity-60 active:scale-[0.98]"
          >
            {loading ? "Signing in…" : "Log In"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          New to Flex Living?{" "}
          <Link to="/signup" className="font-semibold text-primary hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </main>
  );
}
