/*
 * Dina Living — Sunlit Editorial
 * SearchPanel: reusable hero search UI (location + property type + search button).
 */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, MapPin, Search } from "lucide-react";
import { cities, types } from "../data/properties";
import Button from "./Button";

export default function SearchPanel({ defaultCity = "Portland", className = "" }) {
  const [city, setCity] = useState(defaultCity);
  const [type, setType] = useState("All Types");
  const navigate = useNavigate();

  const selectBase =
    "h-11 w-full rounded-md bg-background border border-border pl-9 pr-3 text-sm font-medium outline-none focus:ring-2 focus:ring-primary appearance-none";

  const runSearch = () => {
    const params = new URLSearchParams();
    if (city) params.set("city", city);
    if (type !== "All Types") params.set("type", type);
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <div className={`bg-card border border-border rounded-lg p-3 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_auto] gap-2.5">
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
          <select value={city} onChange={(e) => setCity(e.target.value)} className={selectBase}>
            {cities.filter((c) => c !== "All Cities").map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
          <select value={type} onChange={(e) => setType(e.target.value)} className={selectBase}>
            {types.map((t) => (
              <option key={t} value={t}>{t === "All Types" ? "Any Type" : t}</option>
            ))}
          </select>
        </div>
        <Button variant="primary" onClick={runSearch}>
          Search Homes
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
