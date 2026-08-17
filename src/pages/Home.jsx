/*
 * Flex Living — Sunlit Editorial
 * Home page: hero (via Hero component), featured listings, about teaser,
 * neighborhood banner, CTA.
 */
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import Hero from "../components/Hero";
import FeaturedProperties from "../components/FeaturedProperties";

const ABOUT_US = "/assets/about-us.png";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero — asymmetric editorial */}
      <Hero />

      {/* Featured properties */}
      <FeaturedProperties />

      {/* About teaser — editorial split */}
      <section className="container pt-20 md:pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="absolute -bottom-6 -right-6 hidden md:block w-full h-full border-2 border-accent/30 rounded-lg" aria-hidden />
            <img
              src={ABOUT_US}
              alt="A couple viewing a rental home"
              className="relative w-full aspect-[4/3] object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-primary mb-3">Why Flex Living</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-snug">
              Renting, done with a little more <em className="text-primary">care.</em>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-xl">
              Every home on Flex Living is photographed in person, priced transparently, and matched to how you actually live.
              No bait-and-switch listings. No endless scrolling through duplicates. Just homes worth visiting.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 max-w-md">
              {[
                ["4.9★", "average renter rating"],
                ["12h", "avg. response time"],
                ["100%", "transparent pricing"],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="font-display text-2xl md:text-3xl font-bold text-primary">{n}</p>
                  <p className="text-xs text-muted-foreground mt-1">{l}</p>
                </div>
              ))}
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-accent hover:gap-3 transition-all">
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Neighborhood banner */}
      <section className="container pt-20 md:pt-28">
        <div className="relative rounded-xl overflow-hidden bg-primary text-primary-foreground min-h-[280px] flex items-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_40%,rgba(72,156,105,0.5),transparent_55%),radial-gradient(circle_at_80%_85%,rgba(30,70,50,0.6),transparent_55%)]" aria-hidden />
          <div className="relative flex items-center px-10 md:px-16 py-14">
            <div className="max-w-xl">
              <Quote className="h-9 w-9 text-primary-foreground/50 mb-3" />
              <p className="font-display text-2xl md:text-3xl font-medium text-primary-foreground leading-snug">
                "The best neighborhoods aren't found. They're felt."
              </p>
              <p className="mt-3 text-sm text-primary-foreground/75">— The Flex Living curation team</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container pt-20 md:pt-28">
        <div className="bg-primary text-primary-foreground rounded-xl px-8 py-14 md:px-16 md:py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(70,145,100,0.4),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(35,80,55,0.5),transparent_50%)]" aria-hidden />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
              Your next chapter is waiting.
            </h2>
            <p className="mt-4 text-primary-foreground/85 max-w-md mx-auto">
              Join thousands of renters who found homes that feel like theirs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/signup">
                <button className="px-8 h-12 rounded-md bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors active:scale-[0.98]">
                  Create a Free Account
                </button>
              </Link>
              <Link to="/properties">
                <button className="px-8 h-12 rounded-md border border-primary-foreground/40 text-primary-foreground font-semibold hover:bg-primary-foreground hover:text-primary transition-colors active:scale-[0.98]">
                  Browse Homes
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
