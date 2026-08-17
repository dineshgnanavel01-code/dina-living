/*
 * Flex Living — Sunlit Editorial
 * Sign up page: name/email/password form with validation.
 */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setError("");
    if (!form.name || !form.email || form.password.length < 6) {
      setError("Please enter your name, email, and a password of at least 6 characters.");
      return;
    }
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      navigate("/properties");
    }, 700);
  };

  const input =
    "w-full h-11 rounded-md border border-border bg-background px-3 text-sm outline-none focus:border-primary placeholder:text-muted-foreground/70";

  return (
    <main className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4 py-14">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="font-display text-4xl font-semibold tracking-tight">Join Flex Living</h1>
          <p className="mt-2 text-muted-foreground">Save favorites, get alerts, and book viewings in one place.</p>
        </div>

        <form onSubmit={submit} className="bg-card border border-border rounded-lg p-6 md:p-8 space-y-5">
          <div className="space-y-2">
            <label htmlFor="name" className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold">Full Name</label>
            <input
              id="name"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              placeholder="Jordan Rivera"
              className={input}
            />
          </div>
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
              placeholder="At least 6 characters"
              className={input}
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 rounded-md bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-colors disabled:opacity-60 active:scale-[0.98]"
          >
            {loading ? "Creating account…" : "Create Account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-primary hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </main>
  );
}
