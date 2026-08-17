/*
 * Flex Living — Sunlit Editorial
 * Properties page: filter panel (location, type, price, bedrooms, amenities)
 * + responsive grid of PropertyCards. Supports URL query params.
 */
import { useEffect, useMemo, useState } from "react";
import PropertyCard from "../components/PropertyCard";
import FilterBar, { defaultFilters } from "../components/FilterBar";
import { properties } from "../data/properties";

function readQueryParams() {
  if (typeof window === "undefined") return defaultFilters;
  const p = new URLSearchParams(window.location.search);
  return {
    city: p.get("city") || defaultFilters.city,
    type: p.get("type") || defaultFilters.type,
    maxPrice: Number(p.get("maxPrice")) || defaultFilters.maxPrice,
    bedrooms: p.get("bedrooms") || defaultFilters.bedrooms,
    amenities: (p.get("amenities") || "").split(",").filter(Boolean),
  };
}

export default function Properties() {
  const [filters, setFilters] = useState(readQueryParams);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Sync filters to URL on apply
  useEffect(() => {
    const p = new URLSearchParams();
    if (filters.city !== defaultFilters.city) p.set("city", filters.city);
    if (filters.type !== defaultFilters.type) p.set("type", filters.type);
    if (filters.maxPrice !== defaultFilters.maxPrice) p.set("maxPrice", String(filters.maxPrice));
    if (filters.bedrooms !== defaultFilters.bedrooms) p.set("bedrooms", filters.bedrooms);
    if (filters.amenities.length) p.set("amenities", filters.amenities.join(","));
    window.history.replaceState(null, "", `?${p.toString()}`);
  }, [filters]);

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (filters.city !== "All Cities" && p.city !== filters.city) return false;
      if (filters.type !== "All Types" && p.type !== filters.type) return false;
      if (p.price > filters.maxPrice) return false;
      if (filters.bedrooms !== "Any") {
        const n = Number(filters.bedrooms);
        if (n === 4 && p.bedrooms < 4) return false;
        if (n !== 4 && p.bedrooms !== n) return false;
      }
      if (filters.amenities.length && !filters.amenities.every((a) => p.amenities.includes(a))) return false;
      return true;
    });
  }, [filters]);

  return (
    <main className="min-h-screen">
      {/* Page header */}
      <section className="container pt-10 md:pt-14 pb-6">
        <p className="text-xs uppercase tracking-[0.2em] font-bold text-primary mb-2">Browse the Collection</p>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h1 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
            {filtered.length} {filtered.length === 1 ? "home" : "homes"} match your search
          </h1>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden rounded-md border border-border bg-card px-4 py-2 text-sm font-semibold hover:bg-secondary transition-colors"
          >
            {mobileOpen ? "Hide Filters" : "Show Filters"}
          </button>
        </div>
      </section>

      <section className="container pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          {/* Filters — desktop always visible, mobile collapsible */}
          <div className={`${mobileOpen ? "block" : "hidden"} lg:block`}>
            <FilterBar filters={filters} onChange={setFilters} />
          </div>

          {/* Results */}
          <div>
            {filtered.length === 0 ? (
              <div className="bg-card border border-border rounded-lg p-14 text-center">
                <p className="font-display text-2xl font-semibold mb-2">No homes found</p>
                <p className="text-muted-foreground">Try widening your price range or resetting the filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((p) => (
                  <PropertyCard key={p.id} property={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
