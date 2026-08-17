import { filterOptions } from "../data/properties.js";
import { SlidersHorizontal } from "lucide-react";

export default function FilterBar({ filters, setFilters, onOpenPanel }) {
  const selectClass =
    "input-field cursor-pointer appearance-none bg-[length:16px_16px] bg-[right_0.75rem_center] bg-no-repeat";

  return (
    <div className="flex flex-wrap items-center gap-3">
      <select
        aria-label="Property type"
        value={filters.type}
        onChange={(e) => setFilters({ ...filters, type: e.target.value })}
        className={`${selectClass} w-full sm:w-44`}
      >
        <option value="All">All Types</option>
        {filterOptions.types.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>

      <select
        aria-label="Purpose"
        value={filters.purpose}
        onChange={(e) => setFilters({ ...filters, purpose: e.target.value })}
        className={`${selectClass} w-full sm:w-44`}
      >
        <option value="All">Buy & Rent</option>
        {filterOptions.purposes.map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>

      <select
        aria-label="Location"
        value={filters.location}
        onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        className={`${selectClass} w-full sm:w-56`}
      >
        <option value="All">All Locations</option>
        {filterOptions.locations.map((l) => (
          <option key={l} value={l}>
            {l}
          </option>
        ))}
      </select>

      <select
        aria-label="Price range"
        value={filters.priceRange}
        onChange={(e) =>
          setFilters({ ...filters, priceRange: e.target.value })
        }
        className={`${selectClass} w-full sm:w-44`}
      >
        <option value="All">Any Price</option>
        <option value="0-100000000">Under ₦100M</option>
        <option value="100000000-300000000">₦100M – ₦300M</option>
        <option value="300000000-999999999999">Above ₦300M</option>
      </select>

      <button
        type="button"
        onClick={onOpenPanel}
        className="btn-secondary ml-auto w-full sm:w-auto"
      >
        <SlidersHorizontal className="h-4 w-4" />
        Advanced Filters
      </button>
    </div>
  );
}
