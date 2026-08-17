import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Bath,
  BedDouble,
  Check,
  Heart,
  Mail,
  MapPin,
  Maximize,
  Phone,
} from "lucide-react";
import Button from "../components/Button.jsx";
import { formatPrice, properties } from "../data/properties.js";
import { useFavorites } from "../contexts/FavoritesContext.jsx";

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === Number(id));
  const [activeImg, setActiveImg] = useState(0);
  const [sent, setSent] = useState(false);
  const { toggleFavorite, isFavorite } = useFavorites();

  if (!property) {
    return (
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-5 py-24 text-center">
        <h1 className="font-display text-3xl font-semibold text-ink">
          Property not found
        </h1>
        <p className="text-ink-muted">
          This listing doesn't exist or has been removed.
        </p>
        <Button to="/properties">Back to listings</Button>
      </div>
    );
  }

  const fav = isFavorite(property.id);

  return (
    <div className="mx-auto max-w-7xl px-5 py-8 md:py-12">
      <Link
        to="/properties"
        className="btn-ghost -ml-2 mb-6 inline-flex"
      >
        <ArrowLeft className="h-4 w-4" /> All properties
      </Link>

      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        {/* Gallery */}
        <div>
          <div className="card-shadow relative overflow-hidden rounded-2xl bg-white">
            <img
              src={property.images[activeImg]}
              alt={property.title}
              className="aspect-[16/10] w-full object-cover"
            />
            <span
              className={`absolute left-4 top-4 rounded-full px-3.5 py-1.5 text-xs font-semibold ${
                property.purpose === "For Sale"
                  ? "bg-brand-600 text-white"
                  : "bg-ink text-white"
              }`}
            >
              {property.purpose}
            </span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {property.images.map((img, i) => (
              <button
                key={img}
                type="button"
                onClick={() => setActiveImg(i)}
                aria-label={`View image ${i + 1}`}
                className={`overflow-hidden rounded-xl border-2 transition-all ${
                  i === activeImg
                    ? "border-brand-500 opacity-100"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  alt={`${property.title} photo ${i + 1}`}
                  className="aspect-[4/3] w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <aside>
          <div className="rounded-2xl bg-white p-7 shadow-[0_4px_24px_-8px_rgba(74,48,34,0.18)]">
            <h1 className="font-display text-3xl font-semibold text-ink">
              {property.title}
            </h1>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-ink-muted">
              <MapPin className="h-4 w-4" /> {property.location}
            </p>

            <p className="mt-5 font-display text-3xl font-semibold text-brand-600">
              {formatPrice(property.price)}
              {property.rentPeriod && (
                <span className="text-sm font-normal text-ink-muted">
                  /{property.rentPeriod}
                </span>
              )}
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3 border-y border-ink/8 py-5 text-center">
              <div>
                <p className="font-display text-2xl font-semibold text-ink">
                  {property.beds}
                </p>
                <p className="mt-0.5 flex items-center justify-center gap-1 text-xs text-ink-muted">
                  <BedDouble className="h-3.5 w-3.5" /> Bedrooms
                </p>
              </div>
              <div>
                <p className="font-display text-2xl font-semibold text-ink">
                  {property.baths}
                </p>
                <p className="mt-0.5 flex items-center justify-center gap-1 text-xs text-ink-muted">
                  <Bath className="h-3.5 w-3.5" /> Bathrooms
                </p>
              </div>
              <div>
                <p className="font-display text-2xl font-semibold text-ink">
                  {property.sqft.toLocaleString()}
                </p>
                <p className="mt-0.5 flex items-center justify-center gap-1 text-xs text-ink-muted">
                  <Maximize className="h-3.5 w-3.5" /> Sqft
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-ink-muted">
              {property.description}
            </p>

            <div className="mt-6">
              <h3 className="mb-3 text-sm font-semibold text-ink">
                Amenities
              </h3>
              <div className="flex flex-wrap gap-2">
                {property.amenities.map((a) => (
                  <span
                    key={a}
                    className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5 text-xs font-medium text-brand-800"
                  >
                    <Check className="h-3 w-3 text-brand-600" /> {a}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-7 flex gap-3">
              <Button to="/contact" className="flex-1">
                Request a Viewing
              </Button>
              <button
                type="button"
                aria-label={
                  fav ? "Remove from favorites" : "Add to favorites"
                }
                onClick={() => toggleFavorite(property.id)}
                className={`btn w-12 flex-none justify-center ${
                  fav ? "bg-brand-600 text-white hover:bg-brand-700" : ""
                }`}
              >
                <Heart className={`h-4 w-4 ${fav ? "fill-current" : ""}`} />
              </button>
            </div>
          </div>

          {/* Agent card */}
          <div className="mt-5 flex items-center gap-4 rounded-2xl bg-brand-800 p-6 text-white">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-300/25 font-display text-xl font-semibold">
              DA
            </span>
            <div className="flex-1">
              <p className="font-semibold">Dina Adeyemi</p>
              <p className="text-sm text-brand-100/80">
                Senior property consultant
              </p>
            </div>
            <div className="flex gap-2">
              <a
                href="tel:+2348000001234"
                aria-label="Call agent"
                className="rounded-lg bg-white/15 p-2.5 transition-colors hover:bg-white/25"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@dinaliving.com"
                aria-label="Email agent"
                className="rounded-lg bg-white/15 p-2.5 transition-colors hover:bg-white/25"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
