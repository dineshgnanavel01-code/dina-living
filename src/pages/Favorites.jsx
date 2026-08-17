import { useFavorites } from "../contexts/FavoritesContext.jsx";
import PropertyCard from "../components/PropertyCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Button from "../components/Button.jsx";
import { properties } from "../data/properties.js";
import { Heart } from "lucide-react";

export default function Favorites() {
  const { favorites } = useFavorites();
  const saved = properties.filter((p) => favorites.includes(p.id));

  return (
    <div className="mx-auto max-w-7xl px-5 py-12 md:py-16">
      <SectionHeading
        eyebrow="Your collection"
        title="Saved Properties"
        description="The homes you've saved, all in one place. Remove any you're no longer interested in, or reach out to book a viewing."
      />

      {saved.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {saved.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <span className="rounded-full bg-brand-100 p-5 text-brand-400">
            <Heart className="h-8 w-8" />
          </span>
          <h3 className="font-display text-xl font-semibold text-ink">
            No saved properties yet
          </h3>
          <p className="max-w-md text-sm text-ink-muted">
            Tap the heart icon on any listing to save it here. Your favorites
            are stored in this browser and stay even if you close the page.
          </p>
          <Button to="/properties" className="mt-2">
            Browse properties
          </Button>
        </div>
      )}
    </div>
  );
}
