import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SectionHeading from "../components/SectionHeading.jsx";
import SearchPanel from "../components/SearchPanel.jsx";
import FilterBar from "../components/FilterBar.jsx";
import FilterPanel from "../components/FilterPanel.jsx";
import PropertyCard from "../components/PropertyCard.jsx";
import { properties } from "../data/properties.js";
import { SearchX } from "lucide-react";

const DEFAULT_FILTERS = {
  query: "",
  type: "All",
  purpose: "All",
  location: "All",
  priceRange: "All",
  minBeds: 0,
  minBaths: 0,
  sqftRange: "All",
  amenities: [],
};

const PAGE_SIZE = 6;

export default function Properties() {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState(() => ({
    ...DEFAULT_FILTERS,
    query: searchParams.get("query") || "",
    type: searchParams.get("type") || "All",
    purpose: searchParams.get("purpose") || "All",
  }));
  const [panelOpen, setPanelOpen] = useState(false);
  const [page, setPage] = useState(1);

  // Keep URL params in sync when they change.
  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      query: searchParams.get("query") || prev.query,
      type: searchParams.get("type") || prev.type,
      purpose: searchParams.get("purpose") || prev.purpose,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (
        filters.query &&
        !`${p.title} ${p.location} ${p.type}`
          .toLowerCase()
          .includes(filters.query.toLowerCase())
      ) {
        return false;
      }
      if (filters.type !== "All" && p.type !== filters.type) return false;
      if (filters.purpose !== "All" && p.purpose !== filters.purpose)
        return false;
      if (filters.location !== "All" && p.location !== filters.location)
        return false;

      if (filters.priceRange !== "All") {
        const [min, max] = filters.priceRange.split("-").map(Number);
        if (p.price < min || p.price > max) return false;
      }
      if (p.beds < filters.minBeds) return false;
      if (p.baths < filters.minBaths) return false;

      if (filters.sqftRange !== "All") {
        const [min, max] = filters.sqftRange.split("-").map(Number);
        if (p.sqft < min || p.sqft > max) return false;
      }
      if (
        filters.amenities.length > 0 &&
        !filters.amenities.every((a) => p.amenities.includes(a))
      ) {
        return false;
      }
      return true;
    });
  }, [filters]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const pageItems = filtered.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE,
  );

  // Reset to page 1 when filters change.
  useEffect(() => {
    setPage(1);
  }, [filters]);

  return (
    <div className="mx-auto max-w-7xl px-5 py-10 md:py-14">
      <SectionHeading
        eyebrow="Explore"
        title="All Properties"
        description="Browse every verified listing in our curated collection. Use the search and filters to narrow down to the home that fits."
      />

      <div className="mt-8">
        <SearchPanel compact />
      </div>

      <div className="mt-8">
        <FilterBar
          filters={filters}
          setFilters={setFilters}
          onOpenPanel={() => setPanelOpen(true)}
        />
      </div>

      <p className="mt-6 text-sm text-ink-muted">
        Showing {pageItems.length} of {filtered.length} properties
      </p>

      {pageItems.length > 0 ? (
        <>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pageItems.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-2">
              <button
                type="button"
                disabled={safePage === 1}
                onClick={() => setPage(safePage - 1)}
                className="btn-secondary"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setPage(n)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    n === safePage
                      ? "bg-brand-600 text-white"
                      : "border border-ink/15 bg-white text-ink-light hover:bg-brand-50"
                  }`}
                >
                  {n}
                </button>
              ))}
              <button
                type="button"
                disabled={safePage === totalPages}
                onClick={() => setPage(safePage + 1)}
                className="btn-secondary"
              >
                Next
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <span className="rounded-2xl bg-brand-100 p-5 text-brand-700">
            <SearchX className="h-8 w-8" />
          </span>
          <h3 className="font-display text-xl font-semibold text-ink">
            No properties match your filters
          </h3>
          <p className="max-w-md text-sm text-ink-muted">
            Try widening your search — for example, clearing the location or
            price filters usually brings results back.
          </p>
          <button
            type="button"
            onClick={() => setFilters(DEFAULT_FILTERS)}
            className="btn-secondary"
          >
            Reset all filters
          </button>
        </div>
      )}

      <FilterPanel
        open={panelOpen}
        onClose={() => setPanelOpen(false)}
        filters={filters}
        setFilters={setFilters}
      />
    </div>
  );
}
