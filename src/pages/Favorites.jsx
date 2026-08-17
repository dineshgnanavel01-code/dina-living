/*
 * Dina Living — Sunlit Editorial
 * Favorites page: saved homes from PropertyCard hearts.
 */
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PropertyCard from "../components/PropertyCard";
import { useFavorites } from "../contexts/FavoritesContext";
import { properties } from "../data/properties";

export default function Favorites() {
  const { favorites } = useFavorites();
  const saved = properties.filter((p) => favorites.has(p.id));

  return (
    <main className="min-h-screen">
      <section className="container pt-12 md:pt-16">
        <p className="text-xs uppercase tracking-[0.2em] font-bold text-primary mb-2">Saved for later</p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
          Your favorites
        </h1>
        <p className="mt-3 text-muted-foreground max-w-md">
          {saved.length === 0
            ? "You haven't saved any homes yet. Tap the heart on any listing to save it here."
            : `${saved.length} saved ${saved.length === 1 ? "home" : "homes"} waiting for you.`}
        </p>
      </section>

      <section className="container pt-8 pb-4">
        {saved.length === 0 ? (
          <div className="bg-card border border-border rounded-lg p-14 text-center">
            <p className="font-display text-2xl font-semibold mb-2">No saved homes yet</p>
            <p className="text-muted-foreground mb-6">Start browsing and heart the ones you love.</p>
            <Link to="/properties">
              <button className="px-6 h-11 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors inline-flex items-center active:scale-[0.98]">
                Browse Homes <ArrowRight className="h-4 w-4 ml-1" />
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {saved.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
