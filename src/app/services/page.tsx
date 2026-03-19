import Link from "next/link";
import type { Metadata } from "next";
import {
  Phone,
  Wrench,
  Droplets,
  ShieldCheck,
  Hammer,
  ClipboardCheck,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { BUSINESS, SERVICES } from "@/lib/data";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  Wrench: <Wrench className="w-10 h-10" />,
  PipetteIcon: <Droplets className="w-10 h-10" />,
  Droplets: <Droplets className="w-10 h-10" />,
  ShieldCheck: <ShieldCheck className="w-10 h-10" />,
  Hammer: <Hammer className="w-10 h-10" />,
  ClipboardCheck: <ClipboardCheck className="w-10 h-10" />,
};

export const metadata: Metadata = {
  title: "Our Services | Professional Plumbing, Sewer & Drain",
  description:
    "Comprehensive plumbing services including sewer repair, drain cleaning, hydro jetting, flood control, installations, and maintenance across Chicagoland.",
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
      />

      {/* Hero */}
      <section className="gradient-primary text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">What We Do</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6">Our Services</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            From emergency plumbing repairs to complete sewer installations, United Sewer &amp; Drains offers a full range of professional services for residential and commercial properties.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-8">
            {SERVICES.map((service, index) => (
              <div
                key={service.slug}
                className={`flex flex-col lg:flex-row gap-8 items-center p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="lg:w-1/3 flex justify-center">
                  <div className="w-32 h-32 rounded-2xl gradient-primary flex items-center justify-center text-white shadow-lg">
                    {SERVICE_ICONS[service.icon]}
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">{service.longDescription}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
                    {service.features.slice(0, 4).map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href={BUSINESS.phoneHref}
                      className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-dark font-semibold px-6 py-3 rounded-lg transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Get Started?</h2>
          <p className="text-white/70 mb-8">Contact us today for a free estimate on any of our services.</p>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-dark font-bold px-10 py-4 rounded-xl transition-all text-lg"
          >
            <Phone className="w-5 h-5" />
            {BUSINESS.phone}
          </a>
        </div>
      </section>
    </>
  );
}
