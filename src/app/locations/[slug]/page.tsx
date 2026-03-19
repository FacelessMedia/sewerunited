import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
  Wrench,
  Droplets,
  ShieldCheck,
  Hammer,
  ClipboardCheck,
  Clock,
} from "lucide-react";
import { BUSINESS, SERVICES, LOCATIONS } from "@/lib/data";
import { SchemaMarkup, BreadcrumbSchema } from "@/components/SchemaMarkup";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  Wrench: <Wrench className="w-7 h-7" />,
  PipetteIcon: <Droplets className="w-7 h-7" />,
  Droplets: <Droplets className="w-7 h-7" />,
  ShieldCheck: <ShieldCheck className="w-7 h-7" />,
  Hammer: <Hammer className="w-7 h-7" />,
  ClipboardCheck: <ClipboardCheck className="w-7 h-7" />,
};

export async function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const location = LOCATIONS.find((l) => l.slug === slug);
  if (!location) return {};
  return {
    title: `Plumber in ${location.fullName} | ${BUSINESS.name}`,
    description: location.metaDescription,
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = LOCATIONS.find((l) => l.slug === slug);
  if (!location) notFound();

  const otherLocations = LOCATIONS.filter((l) => l.slug !== slug);

  return (
    <>
      <SchemaMarkup
        additionalSchema={{
          areaServed: {
            "@type": "City",
            name: location.name,
            containedInPlace: { "@type": "State", name: "Illinois" },
          },
        }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/locations/" + slug },
          { name: location.fullName, url: `/locations/${location.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="gradient-primary text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-accent text-sm font-medium mb-4">
              <MapPin className="w-4 h-4" />
              Service Area
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Plumbing Services in {location.fullName}
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              {location.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-dark font-bold px-8 py-4 rounded-xl transition-all text-lg"
              >
                <Phone className="w-5 h-5" />
                Call {BUSINESS.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all border border-white/20"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services in this location */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4 text-center">
            Our Services in {location.name}
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
            We offer a full range of plumbing, sewer, and drain services to {location.name} residents and businesses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/locations/${location.slug}/${service.slug}`}
                className="group bg-gray-50 hover:bg-primary rounded-2xl p-7 transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-white/20 flex items-center justify-center text-primary group-hover:text-white transition-colors mb-4">
                  {SERVICE_ICONS[service.icon]}
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-500 group-hover:text-white/80 text-sm leading-relaxed transition-colors mb-3">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-primary group-hover:text-accent font-semibold text-sm transition-colors">
                  {service.shortName} in {location.name} <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Why {location.name} Trusts {BUSINESS.name}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We understand the unique plumbing challenges that come with properties in {location.name}. From aging sewer lines to basement flooding, our experienced team is ready to handle it all with fast, reliable service.
              </p>
              <div className="space-y-4">
                {[
                  "Fast response times to " + location.name,
                  "Knowledge of local plumbing codes",
                  "24/7 emergency availability",
                  "Licensed and insured professionals",
                  "Competitive pricing with free estimates",
                  "Satisfaction guaranteed on every job",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <a href={BUSINESS.phoneHref} className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-bold text-gray-900">{BUSINESS.phone}</div>
                    <div className="text-xs text-gray-500">Primary Line</div>
                  </div>
                </a>
                <a href={BUSINESS.phoneAltHref} className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-bold text-gray-900">{BUSINESS.phoneAlt}</div>
                    <div className="text-xs text-gray-500">Secondary Line</div>
                  </div>
                </a>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-accent/10">
                  <Clock className="w-5 h-5 text-accent-dark" />
                  <div>
                    <div className="font-bold text-gray-900">24/7 Service</div>
                    <div className="text-xs text-gray-500">Emergency calls welcome</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6 text-center">
            Also Serving Nearby Areas
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {location.nearbyAreas.map((area) => (
              <span key={area} className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600 font-medium">
                {area}, IL
              </span>
            ))}
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Other Service Areas</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {otherLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="px-4 py-2 bg-primary/5 hover:bg-primary/10 rounded-full text-sm text-primary font-medium transition-colors"
              >
                {loc.fullName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            Need a Plumber in {location.name}?
          </h2>
          <p className="text-white/70 mb-8">Fast, reliable plumbing service for your home or business.</p>
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
