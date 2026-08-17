/*
 * Dina Living — Sunlit Editorial
 * Filter panel: location, property type, price range, bedrooms, amenities,
 * with Apply and Reset controls.
 */
import { useMemo, useState } from "react";
import { RotateCcw } from "lucide-react";
import { cities, types } from "../data/properties";

const amenityOptions = [
  "Garden",
  "Fireplace",
  "Washer & Dryer",
  "Dishwasher",
  "Parking",
  "Balcony",
  "Gym",
  "Pet Friendly",
];

const bedroomOptions = ["Any", "1", "2", "3", "4+"];

export const defaultFilters = {
  city: "All Cities",
  type: "All Types",
  maxPrice: 4000,
  bedrooms: "Any",
  amenities: [],
};

const selectBase =
  "w-full h-10 rounded-md border border-border bg-background px-3 text-sm outline-none focus:border-primary";

export default function FilterBar({ filters, onChange }) {
  const [draft, setDraft] = useState(filters);

  const update = (patch) => setDraft((d) => ({ ...d, ...patch }));

  const apply = () => onChange(draft);

  const reset = () => {
    setDraft(defaultFilters);
    onChange(defaultFilters);
  };

  const isDefault = useMemo(
    () =>
      draft.city === defaultFilters.city &&
      draft.type === defaultFilters.type &&
      draft.maxPrice === defaultFilters.maxPrice &&
      draft.bedrooms === defaultFilters.bedrooms &&
      draft.amenities.length === 0,
    [draft]
  );

  return (
    <aside className="bg-card border border-border rounded-lg p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl font-semibold">Filters</h2>
        <button
          onClick={reset}
          disabled={isDefault}
          className="text-sm text-muted-foreground flex items-center gap-1.5 px-2 py-1 rounded-md hover:bg-secondary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Reset
        </button>
      </div>

      {/* Location */}
      <div className="space-y-2.5">
        <label className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">Location</label>
        <select
          value={draft.city}
          onChange={(e) => update({ city: e.target.value })}
          className={selectBase}
        >
          {cities.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Property type */}
      <div className="space-y-2.5">
        <label className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">Property Type</label>
        <select
          value={draft.type}
          onChange={(e) => update({ type: e.target.value })}
          className={selectBase}
        >
          {types.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {/* Price range */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">Price Range</label>
          <span className="text-sm font-semibold text-primary">Up to ${draft.maxPrice.toLocaleString()}/mo</span>
        </div>
        <input
          type="range"
          min={1000}
          max={4000}
          step={50}
          value={draft.maxPrice}
          onChange={(e) => update({ maxPrice: Number(e.target.value) })}
          className="w-full accent-[#1f4a35]"
        />
      </div>

      {/* Bedrooms */}
      <div className="space-y-2.5">
        <label className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">Bedrooms</label>
        <select
          value={draft.bedrooms}
          onChange={(e) => update({ bedrooms: e.target.value })}
          className={selectBase}
        >
          {bedroomOptions.map((b) => (
            <option key={b} value={b}>
              {b === "Any" ? "Any" : `${b} ${b === "1" ? "Bedroom" : "Bedrooms"}`}
            </option>
          ))}
        </select>
      </div>

      {/* Amenities */}
      <div className="space-y-3">
        <label className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">Amenities</label>
        <div className="grid grid-cols-2 gap-x-2 gap-y-2.5">
          {amenityOptions.map((a) => (
            <label key={a} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={draft.amenities.includes(a)}
                onChange={(e) =>
                  update({
                    amenities: e.target.checked
                      ? [...draft.amenities, a]
                      : draft.amenities.filter((x) => x !== a),
                  })
                }
                className="h-4 w-4 rounded accent-[#1f4a35]"
              />
              <span className="text-sm">{a}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Actions */}
      <button
        onClick={apply}
        className="w-full h-11 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors active:scale-[0.98]"
      >
        Apply Filters
      </button>
    </aside>
  );
}
