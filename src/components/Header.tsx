"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { BUSINESS, SERVICES, LOCATIONS } from "@/lib/data";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-dark text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <span className="hidden sm:block">24/7 Emergency Plumbing Service — Chicagoland &amp; Suburbs</span>
          <div className="flex items-center gap-4 mx-auto sm:mx-0">
            <a href={BUSINESS.phoneHref} className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span className="font-semibold">{BUSINESS.phone}</span>
            </a>
            <span className="text-gray-500">|</span>
            <a href={BUSINESS.phoneAltHref} className="hover:text-accent transition-colors font-semibold">
              {BUSINESS.phoneAlt}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="bg-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-18 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Image src="/images/logo.png" alt={BUSINESS.name} width={160} height={90} className="h-14 w-auto" priority />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link href="/" className="px-4 py-2 text-gray-700 font-medium hover:text-primary transition-colors">
                Home
              </Link>

              {/* Services dropdown */}
              <div className="relative group">
                <button className="px-4 py-2 text-gray-700 font-medium hover:text-primary transition-colors flex items-center gap-1">
                  Services <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 min-w-[240px]">
                    <Link href="/services" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors font-medium">
                      All Services
                    </Link>
                    <div className="h-px bg-gray-100 my-1" />
                    {SERVICES.map((s) => (
                      <Link key={s.slug} href={`/services/${s.slug}`} className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors">
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Locations dropdown */}
              <div className="relative group">
                <button className="px-4 py-2 text-gray-700 font-medium hover:text-primary transition-colors flex items-center gap-1">
                  Service Areas <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 min-w-[220px]">
                    {LOCATIONS.map((l) => (
                      <Link key={l.slug} href={`/locations/${l.slug}`} className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors">
                        {l.fullName}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/reviews" className="px-4 py-2 text-gray-700 font-medium hover:text-primary transition-colors">
                Reviews
              </Link>
              <Link href="/about" className="px-4 py-2 text-gray-700 font-medium hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="px-4 py-2 text-gray-700 font-medium hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href={BUSINESS.phoneHref}
                className="hidden sm:inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-dark font-bold px-5 py-2.5 rounded-lg transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              <Link href="/" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-lg">
                Home
              </Link>

              <div>
                <button onClick={() => setServicesOpen(!servicesOpen)} className="w-full flex items-center justify-between px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-lg">
                  Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="ml-4 space-y-1">
                    <Link href="/services" onClick={() => setMobileOpen(false)} className="block px-4 py-2 text-sm text-gray-600 hover:text-primary">
                      All Services
                    </Link>
                    {SERVICES.map((s) => (
                      <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setMobileOpen(false)} className="block px-4 py-2 text-sm text-gray-600 hover:text-primary">
                        {s.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button onClick={() => setLocationsOpen(!locationsOpen)} className="w-full flex items-center justify-between px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-lg">
                  Service Areas <ChevronDown className={`w-4 h-4 transition-transform ${locationsOpen ? "rotate-180" : ""}`} />
                </button>
                {locationsOpen && (
                  <div className="ml-4 space-y-1">
                    {LOCATIONS.map((l) => (
                      <Link key={l.slug} href={`/locations/${l.slug}`} onClick={() => setMobileOpen(false)} className="block px-4 py-2 text-sm text-gray-600 hover:text-primary">
                        {l.fullName}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/reviews" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-lg">
                Reviews
              </Link>
              <Link href="/about" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-lg">
                About
              </Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-lg">
                Contact
              </Link>

              <div className="pt-3 border-t border-gray-100">
                <a href={BUSINESS.phoneHref} className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-dark font-bold px-5 py-3 rounded-lg transition-colors">
                  <Phone className="w-4 h-4" />
                  Call {BUSINESS.phone}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
