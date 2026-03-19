import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook } from "lucide-react";
import { BUSINESS, SERVICES, LOCATIONS } from "@/lib/data";

export function Footer() {
  return (
    <footer className="gradient-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{BUSINESS.name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Professional plumbing, sewer, and drain services across Chicagoland. Over 20 years of trusted experience.
            </p>
            <div className="space-y-3">
              <a href={BUSINESS.phoneHref} className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                <span className="text-sm">{BUSINESS.phone}</span>
              </a>
              <a href={BUSINESS.phoneAltHref} className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                <span className="text-sm">{BUSINESS.phoneAlt}</span>
              </a>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                <span className="text-sm">{BUSINESS.email}</span>
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-4 h-4 shrink-0" />
                <span className="text-sm">{BUSINESS.address.full}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Clock className="w-4 h-4 shrink-0" />
                <span className="text-sm">{BUSINESS.hours}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-gray-400 hover:text-accent transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-bold mb-4">Service Areas</h3>
            <ul className="space-y-2.5">
              {LOCATIONS.map((l) => (
                <li key={l.slug}>
                  <Link href={`/locations/${l.slug}`} className="text-sm text-gray-400 hover:text-accent transition-colors">
                    {l.fullName}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-xs text-gray-500">Also serving: Melrose Park, Tinley Park, Hinsdale, Bedford Park, Hammond &amp; more</p>
            </div>
          </div>

          {/* Quick links + Social */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2.5 mb-6">
              <li><Link href="/" className="text-sm text-gray-400 hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-sm text-gray-400 hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/about" className="text-sm text-gray-400 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-400 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
            <h3 className="text-lg font-bold mb-3">Follow Us</h3>
            <div className="flex gap-3">
              <a href={BUSINESS.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-dark transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} {BUSINESS.legalName}. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Licensed &amp; Insured | Serving Chicagoland &amp; Suburbs
          </p>
        </div>
      </div>
    </footer>
  );
}
