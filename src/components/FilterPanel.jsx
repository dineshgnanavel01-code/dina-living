import { X } from "lucide-react";
import { properties } from "../data/properties.js";

const ALL_AMENITIES = [
  "Swimming Pool",
  "Smart Home System",
  "Private Garden",
  "Rooftop Terrace",
  "Gym & Spa",
  "Concierge Service",
  "Security",
  "Solar Power",
  "Backup Generator",
  "Fireplace",
  "Sea View",
  "Gated Community",
];

const SQFT_OPTIONS = [
  { label: "Any Size", value: "All" },
  { label: "Under 2,000 sqft", value: "0-2000" },
  { label: "2,000 – 4,000 sqft", value: "2000-4000" },
  { label: "Over 4,000 sqft", value: "4000-999999" },
];

export default function FilterPanel({
  open,
  onClose,
  filters,
  setFilters,
}) {
  if (!open) return null;

  const update = (patch) => setFilters({ ...filters, ...patch });
  const reset = () =>
    setFilters({
      query: "",
      type: "All",
      purpose: "All",
      location: "All",
      priceRange: "All",
      minBeds: 0,
      minBaths: 0,
      sqftRange: "All",
      amenities: [],
    });

  const matchAmenity = (id, amenity) => {
    const prop = properties.find((p) => p.id === id);
    return prop?.amenities.includes(amenity);
  };

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-brand-50 shadow-2xl">
        <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
          <h2 className="font-display text-xl font-semibold text-ink">
            Advanced Filters
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close filters"
            className="rounded-lg p-2 text-ink-muted transition-colors hover:bg-brand-100 hover:text-ink"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 space-y-7 overflow-y-auto px-6 py-6">
          {/* Bedrooms */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-ink">
              Bedrooms
            </label>
            <div className="flex gap-2">
              {[0, 1, 2, 3, 4, 5, 6].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => update({ minBeds: n })}
                  className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                    filters.minBeds === n
                      ? "border-brand-600 bg-brand-600 text-white"
                      : "border-ink/15 bg-white text-ink-light hover:border-brand-300"
                  }`}
                >
                  {n === 0 ? "Any" : `${n}+`}
                </button>
              ))}
            </div>
          </div>

          {/* Bathrooms */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-ink">
              Bathrooms
            </label>
            <div className="flex gap-2">
              {[0, 1, 2, 3, 4, 5, 6].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => update({ minBaths: n })}
                  className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                    filters.minBaths === n
                      ? "border-brand-600 bg-brand-600 text-white"
                      : "border-ink/15 bg-white text-ink-light hover:border-brand-300"
                  }`}
                >
                  {n === 0 ? "Any" : `${n}+`}
                </button>
              ))}
            </div>
          </div>

          {/* Size */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-ink">
              Size
            </label>
            <select
              value={filters.sqftRange}
              onChange={(e) => update({ sqftRange: e.target.value })}
              className="input-field"
            >
              {SQFT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          {/* Amenities */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-ink">
              Amenities{" "}
              <span className="font-normal text-ink-muted">
                (select multiple)
              </span>
            </label>
            <div className="flex flex-wrap gap-2">
              {ALL_AMENITIES.map((a) => {
                const active = filters.amenities.includes(a);
                return (
                  <button
                    key={a}
                    type="button"
                    onClick={() =>
                      update({
                        amenities: active
                          ? filters.amenities.filter((x) => x !== a)
                          : [...filters.amenities, a],
                      })
                    }
                    className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                      active
                        ? "border-brand-600 bg-brand-600 text-white"
                        : "border-ink/15 bg-white text-ink-light hover:border-brand-300"
                    }`}
                  >
                    {a}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex gap-3 border-t border-ink/10 px-6 py-5">
          <button type="button" onClick={reset} className="btn-ghost flex-1">
            Reset
          </button>
          <button
            type="button"
            onClick={onClose}
            className="btn-primary flex-1"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
}
