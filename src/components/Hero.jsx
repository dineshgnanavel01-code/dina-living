import SearchPanel from "./SearchPanel.jsx";
import { ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background imagery */}
      <div className="absolute inset-0">
        <img
          src="/assets/hero1.jpg"
          alt="Luxury villa at dusk"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-20 md:pt-28">
        <div className="max-w-2xl text-white">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide backdrop-blur-sm">
            <MapPin className="h-3.5 w-3.5" />
            Trusted listings across Nigeria
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] md:text-6xl">
            Live the life you've
            <span className="block text-brand-300">been dreaming of.</span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/80">
            From beachfront villas to city penthouses, Dina Living curates
            premium properties that match the way you want to live — verified,
            transparent, and thoughtfully presented.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/75">
            <div className="flex items-center gap-2">
              <strong className="font-display text-2xl text-white">9</strong>
              <span>curated homes</span>
            </div>
            <div className="h-8 w-px bg-white/25" />
            <div className="flex items-center gap-2">
              <strong className="font-display text-2xl text-white">100%</strong>
              <span>verified listings</span>
            </div>
            <div className="h-8 w-px bg-white/25" />
            <div className="flex items-center gap-2">
              <strong className="font-display text-2xl text-white">24h</strong>
              <span>response time</span>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <SearchPanel />
        </div>

        <p className="mt-6 flex items-center gap-2 text-sm text-white/60">
          Browse all listings
          <ArrowRight className="h-4 w-4" />
        </p>
      </div>
    </section>
  );
}
