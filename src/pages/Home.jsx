import Hero from "../components/Hero.jsx";
import FeaturedProperties from "../components/FeaturedProperties.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Button from "../components/Button.jsx";
import {
  BadgeCheck,
  Home as HomeIcon,
  KeyRound,
  Headphones,
  TrendingUp,
} from "lucide-react";

const stats = [
  { icon: HomeIcon, value: "2,400+", label: "Homes matched" },
  { icon: KeyRound, value: "18", label: "Years of experience" },
  { icon: TrendingUp, value: "97%", label: "Client satisfaction" },
  { icon: Headphones, value: "24h", label: "Guaranteed response" },
];

const steps = [
  {
    icon: BadgeCheck,
    title: "Browse verified listings",
    description:
      "Every property on Dina Living is inspected and verified by our agents before it goes live.",
  },
  {
    icon: KeyRound,
    title: "Book a viewing",
    description:
      "Pick a time that works for you. Our agents accompany every viewing and answer every question.",
  },
  {
    icon: Headphones,
    title: "Close with confidence",
    description:
      "From offers to paperwork, our team guides the transaction end to end with full transparency.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProperties />

      {/* How it works */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Simple by design"
            title="How Dina Living works"
            description="Buying or renting a home shouldn't feel like a full-time job. We keep it simple, honest, and human."
            align="center"
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="rounded-2xl border border-ink/8 bg-brand-50/60 p-8 transition-colors hover:border-brand-300"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-xl bg-brand-600 p-3 text-white">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <span className="font-display text-4xl font-semibold text-brand-200">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="relative overflow-hidden bg-brand-800 py-16 md:py-20">
        <img
          src="/assets/hero2.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
              Ready to find your next home?
            </h2>
            <p className="mt-3 max-w-xl text-brand-100/85">
              Join thousands of happy homeowners and renters who found their
              perfect match with Dina Living.
            </p>
          </div>
          <div className="flex gap-3">
            <Button to="/properties" variant="primary" size="lg">
              Browse Properties
            </Button>
            <Button to="/contact" variant="secondary" size="lg">
              Talk to an Agent
            </Button>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-4 rounded-2xl border border-ink/8 bg-white p-6"
            >
              <span className="rounded-xl bg-brand-100 p-3 text-brand-700">
                <s.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-2xl font-semibold text-ink">
                  {s.value}
                </p>
                <p className="text-xs text-ink-muted">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
