import Button from "../components/Button.jsx";
import { Home as HomeIcon } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-5 px-5 py-24 text-center">
      <span className="rounded-full bg-brand-100 p-5 text-brand-700">
        <HomeIcon className="h-7 w-7" />
      </span>
      <h1 className="font-display text-5xl font-semibold text-ink">404</h1>
      <p className="text-ink-muted">
        This page doesn't exist — but we'd love to help you find the home
        that does.
      </p>
      <div className="mt-2 flex gap-3">
        <Button to="/">Go home</Button>
        <Button to="/properties" variant="secondary">
          Browse properties
        </Button>
      </div>
    </div>
  );
}
