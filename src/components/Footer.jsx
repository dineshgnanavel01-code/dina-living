/*
 * Flex Living — Sunlit Editorial
 * Footer: hairline-divider editorial footer with brand, links, contact.
 */
import { Link } from "react-router-dom";
// NOTE: Only these three icons are imported. Do NOT import Facebook/Twitter/Linkedin
// directly from lucide-react without checking your installed version — some newer
// versions removed them and cause "does not provide an export named 'Facebook'" errors.
import { Mail, Phone, MapPin } from "lucide-react";

const LOGO = "/assets/flexliving-logo.png";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-card">
      <div className="container py-14 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-10 gap-y-8">
        {/* Brand */}
        <div className="md:col-span-5">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <img src={LOGO} alt="Flex Living logo" className="h-10 w-10" />
            <span className="font-display text-2xl font-semibold tracking-tight">
              Flex <span className="italic text-primary">Living</span>
            </span>
          </Link>
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            A curated rental home marketplace for people who want more than a lease — find your next chapter, not just an address.
          </p>
        </div>

        {/* Explore */}
        <div className="md:col-span-2 md:col-start-7 md:pr-6">
          <h3 className="font-display text-lg font-semibold mb-4">Explore</h3>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/properties" className="hover:text-primary transition-colors">Properties</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="md:col-span-3">
          <h3 className="font-display text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><span className="hover:text-primary transition-colors cursor-pointer">Renter's Guide</span></li>
            <li><span className="hover:text-primary transition-colors cursor-pointer">Lease FAQs</span></li>
            <li><span className="hover:text-primary transition-colors cursor-pointer">Move-In Checklist</span></li>
            <li><span className="hover:text-primary transition-colors cursor-pointer">Blog</span></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-2">
          <h3 className="font-display text-lg font-semibold mb-4">Get in Touch</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2.5">
              <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              hello@flexliving.co
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              +1 (555) 012-3456
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              184 Willow Lane, Portland, OR
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Flex Living. All rights reserved.</p>
          <p className="italic font-display">Homes that feel like they were made for you.</p>
        </div>
      </div>
    </footer>
  );
}
