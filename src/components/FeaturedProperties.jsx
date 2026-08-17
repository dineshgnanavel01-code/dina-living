/*
 * Flex Living — Sunlit Editorial
 * Reusable FeaturedProperties: section heading + grid of PropertyCard.
 */
import { Link } from "react-router-dom";
import { properties } from "../data/properties";
import { ArrowRight } from "lucide-react";
import PropertyCard from "./PropertyCard";

export default function FeaturedProperties({ title = "This month's finest listings", limit = 6 }) {
  const featured = properties.filter((p) => p.featured).slice(0, limit);
  return (
    <section className="container pt-6 md:pt-10">
      <div className="flex items-end justify-between gap-4 mb-8">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-primary mb-2">Featured Residences</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
        </div>
        <Link
          to="/properties"
          className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
        >
          View all <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>
      <div className="sm:hidden mt-6 text-center">
        <Link to="/properties">
          <button className="px-5 py-2.5 rounded-md border border-primary/40 font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors inline-flex items-center gap-1.5">
            View All Properties <ArrowRight className="h-4 w-4" />
          </button>
        </Link>
      </div>
    </section>
  );
}


