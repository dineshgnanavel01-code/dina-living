import { Link } from "react-router-dom";
import { ArrowRight, Bath, BedDouble, Heart, Maximize, MapPin } from "lucide-react";
import { useFavorites } from "../contexts/FavoritesContext.jsx";
import { formatPrice } from "../data/properties.js";

export default function PropertyCard({ property }) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const fav = isFavorite(property.id);

  return (
    <article className="card-shadow group overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_rgba(74,48,34,0.3)]">
      <Link to={`/property/${property.id}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={property.images[0]}
            alt={property.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span
            className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${
              property.purpose === "For Sale"
                ? "bg-brand-600 text-white"
                : "bg-ink text-white"
            }`}
          >
            {property.purpose}
          </span>
          <button
            type="button"
            aria-label={fav ? "Remove from favorites" : "Add to favorites"}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleFavorite(property.id);
            }}
            className={`absolute right-3 top-3 rounded-full p-2 backdrop-blur-md transition-colors ${
              fav
                ? "bg-brand-600 text-white"
                : "bg-white/85 text-ink-muted hover:text-brand-600"
            }`}
          >
            <Heart className={`h-4 w-4 ${fav ? "fill-current" : ""}`} />
          </button>
        </div>
      </Link>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <Link to={`/property/${property.id}`}>
            <h3 className="font-display text-lg font-semibold text-ink transition-colors group-hover:text-brand-700">
              {property.title}
            </h3>
          </Link>
          <p className="shrink-0 font-display text-lg font-semibold text-brand-600">
            {formatPrice(property.price)}
            {property.rentPeriod && (
              <span className="text-xs font-normal text-ink-muted">
                /{property.rentPeriod}
              </span>
            )}
          </p>
        </div>

        <p className="mt-1.5 flex items-center gap-1.5 text-sm text-ink-muted">
          <MapPin className="h-3.5 w-3.5" />
          {property.location}
        </p>

        <div className="mt-4 flex items-center gap-5 border-t border-ink/5 pt-4 text-sm text-ink-light">
          <span className="flex items-center gap-1.5">
            <BedDouble className="h-4 w-4 text-brand-500" />
            {property.beds} Beds
          </span>
          <span className="flex items-center gap-1.5">
            <Bath className="h-4 w-4 text-brand-500" />
            {property.baths} Baths
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize className="h-4 w-4 text-brand-500" />
            {property.sqft.toLocaleString()} sqft
          </span>
        </div>

        <Link
          to={`/property/${property.id}`}
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-700"
        >
          View Details
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
