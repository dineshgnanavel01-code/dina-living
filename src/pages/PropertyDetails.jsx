/*
 * Flex Living — Sunlit Editorial
 * Property details page: image gallery, info, price, amenities,
 * description, availability, contact/book now.
 */
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  MapPin, BedDouble, Bath, Square, Star, Check, CalendarCheck,
  Heart, ArrowLeft, ShieldCheck, Clock, Users,
} from "lucide-react";
import PropertyCard from "../components/PropertyCard";
import { useFavorites } from "../contexts/FavoritesContext";
import { properties } from "../data/properties";

export default function PropertyDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const property = properties.find((p) => p.slug === slug);

  const { favorites, toggleFavorite } = useFavorites();
  const [activeImg, setActiveImg] = useState(0);
  const [booked, setBooked] = useState(false);

  if (!property) {
    return (
      <main className="min-h-screen container py-24 text-center">
        <p className="font-display text-3xl font-semibold mb-3">Home not found</p>
        <p className="text-muted-foreground mb-6">This listing doesn't exist or has been removed.</p>
        <Link to="/properties">
          <button className="px-6 h-11 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
            Browse All Homes
          </button>
        </Link>
      </main>
    );
  }

  const isFavorite = favorites.has(property.id);
  const related = properties.filter((p) => p.id !== property.id && p.city === property.city).slice(0, 3);

  const book = () => {
    setBooked(true);
    window.setTimeout(() => setBooked(false), 3500);
  };

  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="container pt-6">
        <button
          type="button"
          onClick={() => navigate("/properties")}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all homes
        </button>
      </div>

      {/* Gallery */}
      <section className="container pt-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-8 relative rounded-lg overflow-hidden img-zoom group">
            <img
              src={property.gallery[activeImg]}
              alt={property.title}
              className="w-full aspect-[16/10] object-cover"
            />
            <button
              type="button"
              aria-label="Toggle favorite"
              onClick={() => toggleFavorite(property.id)}
              className="absolute top-4 right-4 h-10 w-10 flex items-center justify-center rounded-full bg-background/95 backdrop-blur transition-transform duration-150 active:scale-90 hover:scale-105"
            >
              <Heart className={`h-5 w-5 ${isFavorite ? "fill-accent text-accent" : "text-foreground/60"}`} />
            </button>
            <span className="absolute bottom-4 left-4 bg-background/95 text-foreground rounded-full px-3 py-1 text-xs font-medium">
              {property.gallery.length} photos
            </span>
          </div>
          <div className="md:col-span-4 grid grid-cols-3 md:grid-cols-1 gap-3">
            {property.gallery.slice(0, 3).map((img, i) => (
              <button
                key={img}
                type="button"
                onClick={() => setActiveImg(i)}
                className={`relative rounded-md overflow-hidden img-zoom border-2 transition-colors ${
                  activeImg === i ? "border-primary" : "border-transparent"
                }`}
              >
                <img src={img} alt={`${property.title} photo ${i + 1}`} loading="lazy" className="w-full aspect-[4/3] object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="container pt-10 md:pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10">
          <div>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className="inline-block mb-3 bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-xs font-medium">
                  {property.type}
                </span>
                <h1 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">{property.title}</h1>
                <p className="mt-2 flex items-center gap-1.5 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  {property.location}
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Star className="h-5 w-5 fill-accent text-accent" />
                {property.rating} <span className="text-muted-foreground font-normal">({property.reviews} reviews)</span>
              </div>
            </div>

            {/* Key stats */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden border border-border">
              {[
                { icon: BedDouble, label: `${property.bedrooms} Bedrooms` },
                { icon: Bath, label: `${property.bathrooms} Bathrooms` },
                { icon: Square, label: `${property.area.toLocaleString()} ft²` },
                { icon: Users, label: "Family Friendly" },
              ].map((s) => (
                <div key={s.label} className="bg-card p-4 flex flex-col items-center gap-2 text-center">
                  <s.icon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="mt-8">
              <h2 className="font-display text-2xl font-semibold mb-3">About this home</h2>
              <p className="text-muted-foreground leading-relaxed">{property.description}</p>
            </div>

            {/* Amenities */}
            <div className="mt-8">
              <h2 className="font-display text-2xl font-semibold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3">
                {property.amenities.map((a) => (
                  <div key={a} className="flex items-center gap-2.5 text-sm">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    {a}
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-2 font-semibold">
                <CalendarCheck className="h-4 w-4" />
                {property.availability}
              </span>
              <span className="inline-flex items-center gap-2 text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Verified listing
              </span>
              <span className="inline-flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                Typically replies within 12h
              </span>
            </div>
          </div>

          {/* Booking sidebar */}
          <aside className="lg:sticky lg:top-24 h-fit">
            <div className="bg-card border border-border rounded-lg p-6 shadow-[0_12px_35px_-15px_rgba(0,0,0,0.15)]">
              <div className="flex items-baseline gap-1">
                <span className="font-display text-3xl font-bold text-primary">${property.price.toLocaleString()}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                plus security deposit · no hidden fees
              </div>
              <hr className="my-5 border-border" />
              <button
                onClick={book}
                className={`w-full h-12 rounded-md font-semibold text-base transition-colors active:scale-[0.98] ${
                  booked
                    ? "bg-accent text-accent-foreground"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                {booked ? "Request Sent ✓" : "Book a Viewing"}
              </button>
              <button
                onClick={book}
                className="w-full h-11 mt-3 rounded-md border border-primary/40 font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Contact Agent
              </button>
              <p className="mt-4 text-xs text-muted-foreground text-center">
                Free to schedule · View in person before signing
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="container pt-16 md:pt-20">
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-primary mb-2">More in {property.city}</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight mb-8">You might also love</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
