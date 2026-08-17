import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Search, SlidersHorizontal } from "lucide-react";
import { filterOptions } from "../data/properties.js";

const DEFAULT = { query: "", type: "All", purpose: "All" };

/**
 * Search panel used on the hero (home) and at the top of the Properties page.
 */
export default function SearchPanel({ compact = false }) {
  const [form, setForm] = useState(DEFAULT);
  const navigate = useNavigate();

  const runSearch = () => {
    const params = new URLSearchParams();
    if (form.query && form.query.trim())
      params.set("query", form.query.trim());
    if (form.type !== "All") params.set("type", form.type);
    if (form.purpose !== "All") params.set("purpose", form.purpose);
    const qs = params.toString();
    navigate(`/properties${qs ? `?${qs}` : ""}`);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") runSearch();
  };

  return (
    <div
      className={`flex flex-col gap-3 rounded-2xl border border-white/20 bg-white p-4 shadow-2xl backdrop-blur-md sm:flex-row sm:items-center md:p-5 ${
        compact ? "" : "md:max-w-3xl"
      }`}
    >
      <label className="sr-only" htmlFor="search-input">
        Search location or property name
      </label>
      <div className="relative flex-1">
        <MapPin className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
        <input
          id="search-input"
          type="text"
          placeholder="Search location or property name…"
          value={form.query}
          onChange={(e) => setForm({ ...form, query: e.target.value })}
          onKeyDown={handleKey}
          className="input-field !pl-10"
        />
      </div>

      <div className="flex gap-3">
        <select
          aria-label="Property type"
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
          className={`${compact ? "w-32" : "w-36"} input-field cursor-pointer`}
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
          value={form.purpose}
          onChange={(e) => setForm({ ...form, purpose: e.target.value })}
          className="input-field w-28 cursor-pointer sm:w-32"
        >
          <option value="All">Buy & Rent</option>
          {filterOptions.purposes.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <button
        type="button"
        onClick={runSearch}
        className="btn-primary !gap-2.5"
      >
        {compact ? (
          <>
            <Search className="h-4 w-4" /> Search
          </>
        ) : (
          <>
            <Search className="h-4 w-4" /> Search
            <span className="hidden items-center gap-1 lg:flex">
              <SlidersHorizontal className="h-3.5 w-3.5" />
              Filters
            </span>
          </>
        )}
      </button>
    </div>
  );
}
