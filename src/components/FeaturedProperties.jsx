import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading.jsx";
import PropertyCard from "./PropertyCard.jsx";
import { properties } from "../data/properties.js";
import { ArrowRight } from "lucide-react";

export default function FeaturedProperties() {
  const featured = properties.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Handpicked for you"
          title="Featured Properties"
          description="Our editors' selection of standout homes — verified, premium, and ready for viewing this week."
        />
        <Link
          to="/properties"
          className="btn-secondary shrink-0"
        >
          View all <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        {featured.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>
    </section>
  );
}
