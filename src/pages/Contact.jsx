import { useState } from "react";
import SectionHeading from "../components/SectionHeading.jsx";
import Button from "../components/Button.jsx";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-12 md:py-16">
      <SectionHeading
        eyebrow="Contact"
        title="Let's find your home"
        description="Have a question about a listing, or want to talk through what you're looking for? Our team responds within 24 hours."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-6">
          <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-[0_4px_24px_-8px_rgba(74,48,34,0.12)]">
            <span className="rounded-xl bg-brand-100 p-3 text-brand-700">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-semibold text-ink">Visit us</h3>
              <p className="mt-1 text-sm text-ink-muted">
                12 Adeola Odeku Street, Victoria Island, Lagos, Nigeria
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-[0_4px_24px_-8px_rgba(74,48,34,0.12)]">
            <span className="rounded-xl bg-brand-100 p-3 text-brand-700">
              <Phone className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-semibold text-ink">Call us</h3>
              <p className="mt-1 text-sm text-ink-muted">
                +234 800 000 1234 — Mon to Sat, 9:00 to 18:00
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-[0_4px_24px_-8px_rgba(74,48,34,0.12)]">
            <span className="rounded-xl bg-brand-100 p-3 text-brand-700">
              <Mail className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-semibold text-ink">Email us</h3>
              <p className="mt-1 text-sm text-ink-muted">
                hello@dinaliving.com — we reply within 24 hours
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl bg-white p-7 shadow-[0_4px_24px_-8px_rgba(74,48,34,0.12)] md:p-9"
        >
          {sent ? (
            <div className="flex min-h-[320px] flex-col items-center justify-center gap-4 text-center">
              <span className="rounded-full bg-brand-100 p-4 text-brand-700">
                <Send className="h-6 w-6" />
              </span>
              <h3 className="font-display text-xl font-semibold text-ink">
                Message received!
              </h3>
              <p className="max-w-sm text-sm text-ink-muted">
                Thanks, {form.name || "friend"}. A member of our team will
                reach out within 24 hours.
              </p>
              <Button
                variant="secondary"
                onClick={() => {
                  setSent(false);
                  setForm({ name: "", email: "", phone: "", message: "" });
                }}
              >
                Send another message
              </Button>
            </div>
          ) : (
            <>
              <h3 className="font-display text-xl font-semibold text-ink">
                Send us a message
              </h3>
              <div className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-ink"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="input-field"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-ink"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="input-field"
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-medium text-ink"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="input-field"
                      placeholder="+234 …"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-ink"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="input-field resize-none"
                    placeholder="Tell us what you're looking for…"
                  />
                </div>
              </div>
              <Button type="submit" className="mt-6 w-full">
                <Send className="h-4 w-4" /> Send message
              </Button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
