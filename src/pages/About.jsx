import SectionHeading from "../components/SectionHeading.jsx";
import Button from "../components/Button.jsx";
import { BadgeCheck, Handshake, Landmark, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Verification first",
    description:
      "Every listing passes a seven-point verification check — legal title, physical inspection, pricing sanity, and agent accreditation — before it reaches our site.",
  },
  {
    icon: Handshake,
    title: "Honest negotiation",
    description:
      "We disclose everything: agency fees, maintenance levies, and known issues. No hidden costs, no last-minute surprises at the signing table.",
  },
  {
    icon: Landmark,
    title: "Local expertise",
    description:
      "Our consultants live and work in the neighborhoods they sell. We know which streets flood in August and which compounds have genuine title documents.",
  },
  {
    icon: BadgeCheck,
    title: "End-to-end support",
    description:
      "From the first viewing to the final handover of keys, Dina Living coordinates inspections, paperwork, and move-in logistics for you.",
  },
];

export default function About() {
  return (
    <div>
      {/* Intro */}
      <section className="relative overflow-hidden bg-brand-800 py-20 md:py-28">
        <img
          src="/assets/prop_exterior2.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="relative mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="About us"
            title="A better way to find home"
            description="Dina Living was founded on a simple belief: finding a home in Nigeria should feel exciting, not exhausting. We started as a small team of agents tired of watching clients get burned by unverified listings — and built the platform we wished existed."
            dark
          />
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <img
            src="/assets/prop_interior1.jpg"
            alt="A bright modern living room"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[0_16px_40px_-12px_rgba(74,48,34,0.3)]"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
              Our story
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink md:text-4xl">
              Built by people who've been on both sides of the table
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              Our founders spent years as buyers and sellers themselves. They
              saw duplicated listings, inflated prices, and properties that
              looked nothing like their photos. So they built Dina Living to
              solve those problems directly — with verified listings,
              transparent pricing, and agents who actually answer their phones.
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              Today, Dina Living serves clients across Lagos, Abuja, and
              beyond, matching thousands of families with homes they love — and
              keeping the paperwork headache off their plates.
            </p>
            <div className="mt-7">
              <Button to="/properties">Explore listings</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="What we stand for"
            title="Our values"
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-ink/8 bg-brand-50/60 p-7"
              >
                <span className="inline-flex rounded-xl bg-brand-600 p-3 text-white">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
