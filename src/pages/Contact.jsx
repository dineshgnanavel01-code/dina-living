/*
 * Dina Living — Sunlit Editorial
 * Contact page: form (name, email, subject, message) + office info.
 */
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      return;
    }
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    window.setTimeout(() => setSent(false), 3500);
  };

  const input =
    "w-full h-11 rounded-md border border-border bg-card px-3 text-sm outline-none focus:border-primary placeholder:text-muted-foreground/70";

  return (
    <main className="min-h-screen">
      <section className="container pt-12 md:pt-16">
        <p className="text-xs uppercase tracking-[0.2em] font-bold text-primary mb-2">Talk to us</p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
          We'd love to <em className="text-primary">hear from you.</em>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl">
          Questions about a listing, a viewing, or how Dina Living works? Send us a note and a human will answer.
        </p>
      </section>

      <section className="container pt-10 pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form */}
          <form onSubmit={submit} className="lg:col-span-7 bg-card border border-border rounded-lg p-6 md:p-8 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold">Name</label>
                <input id="name" value={form.name} onChange={set("name")} placeholder="Your name" className={input} />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold">Email</label>
                <input id="email" type="email" value={form.email} onChange={set("email")} placeholder="you@email.com" className={input} />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold">Subject</label>
              <input id="subject" value={form.subject} onChange={set("subject")} placeholder="What's this about?" className={input} />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold">Message</label>
              <textarea
                id="message"
                value={form.message}
                onChange={set("message")}
                placeholder="Tell us a little about the home you're looking for…"
                rows={6}
                className={`${input} h-auto py-3`}
              />
            </div>
            <button
              type="submit"
              className={`h-12 px-8 rounded-md font-semibold inline-flex items-center gap-1.5 transition-colors active:scale-[0.98] ${
                sent
                  ? "bg-accent text-accent-foreground"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
            >
              {sent ? "Message Sent ✓" : "Send Message"} <Send className="h-4 w-4" />
            </button>
          </form>

          {/* Info */}
          <div className="lg:col-span-5 space-y-4">
            {[
              { icon: Mail, label: "Email", value: "hello@flexliving.co" },
              { icon: Phone, label: "Phone", value: "+1 (555) 012-3456" },
              { icon: MapPin, label: "Office", value: "184 Willow Lane, Portland, OR 97201" },
              { icon: Clock, label: "Hours", value: "Mon–Fri 9am–6pm · Sat 10am–4pm" },
            ].map((item) => (
              <div key={item.label} className="bg-card border border-border rounded-lg p-5 flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="h-11 w-11 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold">{item.label}</p>
                  <p className="mt-1 font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
