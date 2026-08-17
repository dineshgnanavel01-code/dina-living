/*
 * Flex Living — Sunlit Editorial
 * Reusable Hero: asymmetric editorial hero with location search, category
 * strip, and overlapping framed photography.
 */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, MapPin, Search, Home as HomeIcon, Building2, Hotel, Leaf } from "lucide-react";
import { properties, cities, types } from "../data/properties";

const HERO_IMAGE = "/assets/hero-home.png";

const categories = [
  { label: "Houses", icon: HomeIcon, type: "House" },
  { label: "Apartments", icon: Building2, type: "Apartment" },
  { label: "Townhomes", icon: Hotel, type: "Townhouse" },
];

export default function Hero() {
  const [city, setCity] = useState("Portland");
  const [type, setType] = useState("All Types");
  const navigate = useNavigate();

  const search = () => {
    const params = new URLSearchParams();
    if (city) params.set("city", city);
    if (type !== "All Types") params.set("type", type);
    navigate(`/properties?${params.toString()}`);
  };

  const selectBase =
    "h-11 w-full rounded-md bg-background border border-border pl-9 pr-3 text-sm font-medium outline-none focus:ring-2 focus:ring-primary appearance-none";

  return (
    <section className="relative overflow-hidden">
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center py-14 md:py-24">
        {/* Text */}
        <div className="lg:col-span-6 fade-up">
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-primary mb-5">
            A curated rental home marketplace
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-[3.6rem] font-semibold leading-[1.08] tracking-tight">
            Homes that feel like they were <em className="text-primary not-italic font-normal">made for you.</em>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-md leading-relaxed">
            Flex Living pairs thoughtful design with honest listings — find your next chapter, not just an address.
          </p>

          {/* Search bar */}
          <div className="mt-8 bg-card border border-border rounded-lg p-3 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)]">
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
              <button
                onClick={search}
                className="h-11 rounded-md bg-primary text-primary-foreground font-semibold px-7 flex items-center justify-center gap-1 hover:bg-primary/90 transition-colors active:scale-[0.98]"
              >
                Search Homes
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Category quick links */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="text-xs text-muted-foreground">Popular:</span>
            {categories.map((c) => (
              <Link
                key={c.type}
                to={`/properties?type=${c.type}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium hover:border-primary/50 hover:text-primary transition-colors"
              >
                <c.icon className="h-3.5 w-3.5 text-primary" />
                {c.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Image — overlapping frame */}
        <div className="lg:col-span-6 relative fade-up">
          <div className="absolute -top-6 -left-6 hidden md:block w-full h-full border-2 border-primary/30 rounded-lg" aria-hidden />
          <img
            src={HERO_IMAGE}
            alt="A sunlit craftsman rental home"
            className="relative w-full aspect-[4/3] lg:aspect-[5/4] object-cover rounded-lg shadow-[0_20px_60px_-20px_rgba(0,0,0,0.3)]"
          />
          <div className="absolute bottom-5 right-5 bg-background/95 backdrop-blur rounded-lg px-4 py-3 shadow-md flex items-center gap-3">
            <Leaf className="h-5 w-5 text-primary" />
            <div className="leading-tight">
              <p className="text-sm font-semibold">{properties.length}+ homes</p>
              <p className="text-xs text-muted-foreground">hand-picked & verified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
