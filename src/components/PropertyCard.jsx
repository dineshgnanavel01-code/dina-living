/*
 * Dina Living — Sunlit Editorial
 * Reusable property card: image, title, location, type, price, rating,
 * favorite heart, view details button, hover lift + image zoom.
 */
import { Link } from "react-router-dom";
import { Heart, MapPin, BedDouble, Bath, Square, Star } from "lucide-react";
import { useFavorites } from "../contexts/FavoritesContext";

export default function PropertyCard({ property }) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.has(property.id);

  return (
    <article className="group bg-card border border-border rounded-lg overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      {/* Image */}
      <Link to={`/property/${property.slug}`} className="relative block overflow-hidden img-zoom">
        <img
          src={property.image}
          alt={property.title}
          loading="lazy"
          className="w-full aspect-[4/3] object-cover"
        />
        <span className="absolute top-3 left-3 bg-background/95 text-foreground rounded-full px-2.5 py-1 text-xs font-medium">
          {property.type}
        </span>
        {property.featured && (
          <span className="absolute top-3 right-14 bg-accent text-accent-foreground rounded-full px-2.5 py-1 text-xs font-medium">
            Featured
          </span>
        )}
        <button
          type="button"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite(property.id);
          }}
          className="absolute top-3 right-3 h-9 w-9 flex items-center justify-center rounded-full bg-background/95 backdrop-blur transition-transform duration-150 active:scale-90 hover:scale-105"
        >
          <Heart
            className={`h-4 w-4 transition-colors duration-200 ${
              isFavorite ? "fill-accent text-accent" : "text-foreground/60"
            }`}
          />
        </button>
      </Link>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="font-display text-xl font-semibold leading-snug">{property.title}</h3>
          <span className="flex items-center gap-1 shrink-0 text-sm font-semibold text-foreground">
            <Star className="h-4 w-4 fill-accent text-accent" />
            {property.rating}
          </span>
        </div>
        <p className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
          <MapPin className="h-3.5 w-3.5 text-primary" />
          {property.location}
        </p>

        {/* Details */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          <span className="flex items-center gap-1.5"><BedDouble className="h-4 w-4" />{property.bedrooms} Beds</span>
          <span className="flex items-center gap-1.5"><Bath className="h-4 w-4" />{property.bathrooms} Baths</span>
          <span className="flex items-center gap-1.5"><Square className="h-4 w-4" />{property.area} ft²</span>
        </div>

        {/* Price + CTA */}
        <div className="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-border">
          <p>
            <span className="font-display text-xl font-bold text-primary">${property.price.toLocaleString()}</span>
            <span className="text-sm text-muted-foreground"> /mo</span>
          </p>
          <Link to={`/property/${property.slug}`}>
            <button className="px-3.5 py-2 rounded-md border border-primary/40 text-primary text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
}
