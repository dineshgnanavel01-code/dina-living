import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink text-brand-100">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5">
              <img
                src="/assets/favicon.svg"
                alt="Dina Living logo"
                className="h-9 w-9"
              />
              <span className="font-display text-xl font-semibold text-white">
                Dina<span className="text-brand-300"> Living</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-brand-100/70">
              Curated premium properties across Nigeria. Every listing is
              verified by our team so you can focus on living, not
              worrying.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/properties" className="hover:text-white">
                  All Properties
                </Link>
              </li>
              <li>
                <Link to="/properties?purpose=For+Sale" className="hover:text-white">
                  For Sale
                </Link>
              </li>
              <li>
                <Link to="/properties?purpose=For+Rent" className="hover:text-white">
                  For Rent
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="hover:text-white">
                  My Favorites
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/auth" className="hover:text-white">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Get in touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                12 Adeola Odeku Street, Victoria Island, Lagos
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-brand-300" />
                +234 800 000 1234
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-brand-300" />
                hello@dinaliving.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-brand-100/50">
          © {new Date().getFullYear()} Dina Living. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
