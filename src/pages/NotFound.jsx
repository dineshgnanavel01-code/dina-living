/*
 * Dina Living — Sunlit Editorial
 * 404 page: not found with link back to home.
 */
import { useNavigate } from "react-router-dom";
import { Home as HomeIcon } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4 py-14">
      <div className="w-full max-w-lg text-center">
        <h1 className="font-display text-6xl font-bold text-primary mb-3">404</h1>
        <h2 className="font-display text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Sorry, the page you are looking for doesn't exist.
          <br />
          It may have been moved or deleted.
        </p>
        <button
          onClick={() => navigate("/")}
          className="h-11 px-6 rounded-md bg-primary text-primary-foreground font-semibold inline-flex items-center gap-2 hover:bg-primary/90 transition-colors active:scale-[0.98]"
        >
          <HomeIcon className="h-4 w-4" />
          Go Home
        </button>
      </div>
    </main>
  );
}
