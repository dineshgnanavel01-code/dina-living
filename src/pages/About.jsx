/*
 * Flex Living — Sunlit Editorial
 * About page: brand story, values, stats, team ethos.
 */
import { Link } from "react-router-dom";
import { ArrowRight, Camera, HeartHandshake, FileCheck, Sprout } from "lucide-react";

const ABOUT_US = "/assets/about-us.png";

const values = [
  {
    icon: Camera,
    title: "Photographed in person",
    text: "Every listing is shot by our own team, in real light — never recycled stock photos.",
  },
  {
    icon: FileCheck,
    title: "Honest pricing",
    text: "The price you see is the price you pay. Deposits, fees, and utilities explained upfront.",
  },
  {
    icon: HeartHandshake,
    title: "Humans first",
    text: "Real agents answer within hours, not days. You can meet them before you sign anything.",
  },
  {
    icon: Sprout,
    title: "Made to last",
    text: "We favor homes with character — gardens, wood floors, good light — over flipping cycles.",
  },
];

export default function About() {
  return (
    <main className="min-h-screen">
      <section className="container pt-12 md:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-primary mb-3">Our Story</p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
              We believe renting should feel like <em className="text-primary">home.</em>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Flex Living began with a simple frustration: too many listings looked nothing like their photos.
              So we built a marketplace where every home is verified, photographed in person, and matched to the way you actually live.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Today we curate homes across seven cities — and every one of them had to earn its place on the site.
            </p>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="absolute -top-6 -right-6 hidden md:block w-full h-full border-2 border-primary/30 rounded-lg" aria-hidden />
            <img src={ABOUT_US} alt="Renters viewing a home" className="relative w-full aspect-[4/3] object-cover rounded-lg" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container pt-20 md:pt-24">
        <p className="text-xs uppercase tracking-[0.2em] font-bold text-primary mb-3">What we stand for</p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-10">Four promises, kept.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-card border border-border rounded-lg p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <v.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats banner */}
      <section className="container pt-20 md:pt-24">
        <div className="relative rounded-xl overflow-hidden bg-primary text-primary-foreground">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(70,145,100,0.45),transparent_55%),radial-gradient(circle_at_85%_70%,rgba(30,70,50,0.55),transparent_55%)]" aria-hidden />
          <div className="relative grid grid-cols-2 md:grid-cols-4 place-items-center py-14 px-6">
            <div className="absolute top-5 left-8 text-primary-foreground/30 font-display italic text-lg hidden md:block" aria-hidden>Flex Living</div>
            {[
              ["7", "cities"],
              ["1,200+", "verified homes"],
              ["4.9★", "renter rating"],
              ["12h", "avg. response"],
            ].map(([n, l]) => (
              <div key={l} className="text-center text-primary-foreground">
                <p className="font-display text-3xl md:text-4xl font-bold">{n}</p>
                <p className="text-sm text-primary-foreground/80 mt-1">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container pt-20 md:pt-24 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
          Ready to find yours?
        </h2>
        <p className="mt-4 text-muted-foreground max-w-md mx-auto">
          Browse the collection and book a viewing — no deposit required to look.
        </p>
        <div className="mt-8 flex justify-center">
          <Link to="/properties">
            <button className="px-8 h-12 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors inline-flex items-center active:scale-[0.98]">
              Explore Homes <ArrowRight className="h-4 w-4 ml-1" />
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
