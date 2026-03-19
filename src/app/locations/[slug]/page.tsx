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
  Star,
  AlertTriangle,
  Info,
} from "lucide-react";
import { BUSINESS, SERVICES, LOCATIONS } from "@/lib/data";
import { SchemaMarkup, BreadcrumbSchema } from "@/components/SchemaMarkup";
import { LOCATION_CONTENT } from "@/lib/location-content";
import { GOOGLE_REVIEWS, REVIEW_SUMMARY } from "@/lib/reviews";

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
    title: `Plumber in ${location.fullName} | ${BUSINESS.name} | 24/7 Emergency Service`,
    description: `Professional plumbing, sewer & drain services in ${location.fullName}. Licensed & insured. 20+ years experience. 24/7 emergency service. Call ${BUSINESS.phone} for a free estimate.`,
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = LOCATIONS.find((l) => l.slug === slug);
  if (!location) notFound();

  const otherLocations = LOCATIONS.filter((l) => l.slug !== slug);
  const content = LOCATION_CONTENT.find((c) => c.slug === slug);
  const displayReviews = GOOGLE_REVIEWS.slice(0, 3);

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
              Plumber in {location.fullName} — Plumbing, Sewer & Drain Services
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              {location.description}
            </p>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-white/80 text-sm">{REVIEW_SUMMARY.google.rating}/5 from {REVIEW_SUMMARY.google.count} Google Reviews</span>
            </div>
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

      {/* Expanded Content Sections */}
      {content?.sections.map((section, idx) => (
        <section key={idx} className={`py-16 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">{section.title}</h2>
            {section.content.map((paragraph, pIdx) => (
              <p key={pIdx} className="text-gray-600 leading-relaxed mb-6 text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ))}

      {/* Common Plumbing Issues */}
      {content?.commonIssues && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4 text-center">
              Common Plumbing Issues in {location.name}
            </h2>
            <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
              As {location.name} plumbing experts, we see and solve these problems every day. Here are the issues we most commonly help property owners address.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.commonIssues.map((issue, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-4">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{issue.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{issue.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Local Facts */}
      {content?.localFacts && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">
              {location.name} Plumbing Facts You Should Know
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.localFacts.map((fact, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                  <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{fact}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services in this location */}
      <section className="py-20 bg-gray-50">
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
                className="group bg-white hover:bg-primary rounded-2xl p-7 transition-all duration-300 hover:shadow-xl border border-gray-100"
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

      {/* Customer Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">What {location.name} Customers Say</h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-700 font-semibold">{REVIEW_SUMMARY.google.rating}/5</span>
            </div>
            <p className="text-gray-500 text-sm">Based on {REVIEW_SUMMARY.google.count} Google Reviews</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayReviews.map((review, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-5">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900 text-sm">{review.author}</span>
                  <span className="text-gray-400 text-xs">{review.relativeTime}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/reviews" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
              Read All Reviews <ArrowRight className="w-4 h-4" />
            </Link>
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
                  "Deep knowledge of " + location.name + " plumbing codes and infrastructure",
                  "24/7 emergency availability — including holidays",
                  "Licensed, bonded, and fully insured professionals",
                  "Upfront pricing with free estimates — no surprises",
                  "Over 20 years experience in Chicagoland plumbing",
                  "Satisfaction guaranteed on every job",
                  "Locally owned and operated — based in Chicago",
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
              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <p className="text-xs text-gray-500">
                  <strong className="text-gray-700">Zip codes served in {location.name}:</strong>{" "}
                  {location.zipCodes.join(", ")}
                </p>
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
          <p className="text-gray-500 text-center mb-8 max-w-xl mx-auto">
            In addition to {location.name}, our service vehicles regularly cover these nearby communities with the same fast response times.
          </p>
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
          <p className="text-white/70 mb-8">Fast, reliable plumbing service for your home or business. 24/7 emergency availability. Free estimates.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-dark font-bold px-10 py-4 rounded-xl transition-all text-lg"
            >
              <Phone className="w-5 h-5" />
              {BUSINESS.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-10 py-4 rounded-xl transition-all border border-white/20"
            >
              Request Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
