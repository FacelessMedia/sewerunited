import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Phone,
  Wrench,
  Droplets,
  ShieldCheck,
  Hammer,
  ClipboardCheck,
  CheckCircle,
  ArrowRight,
  MapPin,
  Star,
  ChevronDown,
} from "lucide-react";
import { BUSINESS, SERVICES, LOCATIONS } from "@/lib/data";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/SchemaMarkup";
import { SERVICE_CONTENT } from "@/lib/service-content";
import { GOOGLE_REVIEWS, REVIEW_SUMMARY } from "@/lib/reviews";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  Wrench: <Wrench className="w-12 h-12" />,
  PipetteIcon: <Droplets className="w-12 h-12" />,
  Droplets: <Droplets className="w-12 h-12" />,
  ShieldCheck: <ShieldCheck className="w-12 h-12" />,
  Hammer: <Hammer className="w-12 h-12" />,
  ClipboardCheck: <ClipboardCheck className="w-12 h-12" />,
};

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name} in Chicago, IL | ${BUSINESS.name} | 24/7 Service`,
    description: `Professional ${service.name.toLowerCase()} in Chicago & suburbs. Licensed, insured plumbers with 20+ years experience. 24/7 emergency service. Call ${BUSINESS.phone} for a free estimate.`,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = SERVICES.filter((s) => s.slug !== slug);
  const content = SERVICE_CONTENT.find((c) => c.slug === slug);
  const relatedReviews = GOOGLE_REVIEWS.filter((r) => r.service && service.name.toLowerCase().includes(r.service.toLowerCase())).slice(0, 3);
  const displayReviews = relatedReviews.length > 0 ? relatedReviews : GOOGLE_REVIEWS.slice(0, 3);

  return (
    <>
      <ServiceSchema serviceName={service.name} serviceDescription={service.description} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: service.name, url: `/services/${service.slug}` },
        ]}
      />
      {content?.faqs && <FAQSchema faqs={content.faqs} />}

      {/* Hero */}
      <section className="gradient-primary text-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-2/3">
              <div className="flex items-center gap-2 text-accent text-sm font-medium mb-4">
                <Link href="/services" className="hover:underline">Services</Link>
                <span>/</span>
                <span>{service.name}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6">{service.name}</h1>
              <p className="text-white/80 text-lg leading-relaxed mb-6 max-w-2xl">
                {service.longDescription}
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
            <div className="lg:w-1/3 flex justify-center">
              <div className="w-40 h-40 rounded-3xl bg-white/10 flex items-center justify-center text-white">
                {SERVICE_ICONS[service.icon]}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 p-5 rounded-xl bg-gray-50 border border-gray-100">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Content Sections */}
      {content?.sections.map((section, idx) => (
        <section key={idx} className={`py-16 ${idx % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
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

      {/* Customer Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">What Our Customers Say</h2>
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

      {/* FAQ Section */}
      {content?.faqs && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">
              Frequently Asked Questions About {service.name}
            </h2>
            <div className="space-y-4">
              {content.faqs.map((faq, idx) => (
                <details key={idx} className="bg-white rounded-xl border border-gray-100 group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="font-bold text-gray-900 pr-4">{faq.question}</h3>
                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service Areas for this service */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4 text-center">
            {service.name} Service Areas
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            We provide {service.shortName.toLowerCase()} services across these communities and beyond.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}/${service.slug}`}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all border border-gray-100 hover:border-primary/20 group"
              >
                <MapPin className="w-6 h-6 text-primary mx-auto mb-2 group-hover:text-accent transition-colors" />
                <h3 className="font-bold text-gray-900 text-sm">{service.shortName}</h3>
                <p className="text-xs text-gray-500">in {loc.fullName}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">Other Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="flex items-center gap-4 p-5 rounded-xl bg-white hover:bg-primary/5 border border-gray-100 hover:border-primary/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  {SERVICE_ICONS[s.icon] ? (
                    <span className="[&>svg]:w-6 [&>svg]:h-6">{SERVICE_ICONS[s.icon]}</span>
                  ) : null}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">{s.name}</h3>
                  <p className="text-xs text-gray-500 line-clamp-1">{s.description}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary ml-auto shrink-0 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Need {service.name}?</h2>
          <p className="text-white/70 mb-8">Call us now for fast, professional service across Chicagoland. Over 20 years of experience. Licensed & insured.</p>
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
