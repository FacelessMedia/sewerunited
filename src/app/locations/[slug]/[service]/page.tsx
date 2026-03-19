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
  ChevronDown,
} from "lucide-react";
import { BUSINESS, SERVICES, LOCATIONS } from "@/lib/data";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/SchemaMarkup";
import { SERVICE_CONTENT } from "@/lib/service-content";
import { LOCATION_CONTENT } from "@/lib/location-content";
import { GOOGLE_REVIEWS, REVIEW_SUMMARY } from "@/lib/reviews";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  Wrench: <Wrench className="w-10 h-10" />,
  PipetteIcon: <Droplets className="w-10 h-10" />,
  Droplets: <Droplets className="w-10 h-10" />,
  ShieldCheck: <ShieldCheck className="w-10 h-10" />,
  Hammer: <Hammer className="w-10 h-10" />,
  ClipboardCheck: <ClipboardCheck className="w-10 h-10" />,
};

export async function generateStaticParams() {
  const params: { slug: string; service: string }[] = [];
  for (const loc of LOCATIONS) {
    for (const svc of SERVICES) {
      params.push({ slug: loc.slug, service: svc.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; service: string }>;
}): Promise<Metadata> {
  const { slug, service: serviceSlug } = await params;
  const location = LOCATIONS.find((l) => l.slug === slug);
  const service = SERVICES.find((s) => s.slug === serviceSlug);
  if (!location || !service) return {};
  return {
    title: `${service.name} in ${location.fullName}`,
    description: `Professional ${service.name.toLowerCase()} in ${location.fullName}. 24/7 emergency service, licensed & insured. Call ${BUSINESS.phone} for a free estimate.`,
  };
}

export default async function LocationServicePage({
  params,
}: {
  params: Promise<{ slug: string; service: string }>;
}) {
  const { slug, service: serviceSlug } = await params;
  const location = LOCATIONS.find((l) => l.slug === slug);
  const service = SERVICES.find((s) => s.slug === serviceSlug);
  if (!location || !service) notFound();

  const otherServices = SERVICES.filter((s) => s.slug !== serviceSlug);
  const serviceContent = SERVICE_CONTENT.find((c) => c.slug === serviceSlug);
  const locationContent = LOCATION_CONTENT.find((c) => c.slug === slug);
  const relatedReviews = GOOGLE_REVIEWS.filter((r) => r.service && service.name.toLowerCase().includes(r.service.toLowerCase())).slice(0, 3);
  const displayReviews = relatedReviews.length > 0 ? relatedReviews : GOOGLE_REVIEWS.slice(0, 3);

  return (
    <>
      <ServiceSchema
        serviceName={service.name}
        serviceDescription={`${service.name} in ${location.fullName}. ${service.description}`}
        areaServed={location.name}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: location.fullName, url: `/locations/${location.slug}` },
          { name: service.name, url: `/locations/${location.slug}/${service.slug}` },
        ]}
      />
      {serviceContent?.faqs && <FAQSchema faqs={serviceContent.faqs} />}

      {/* Hero */}
      <section className="gradient-primary text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-accent text-sm font-medium mb-4">
              <MapPin className="w-4 h-4" />
              <Link href={`/locations/${location.slug}`} className="hover:underline">{location.fullName}</Link>
              <span>/</span>
              <span>{service.shortName}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              {service.name} in {location.fullName}
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Looking for professional {service.name.toLowerCase()} in {location.name}? {BUSINESS.name} delivers expert solutions with 24/7 availability, licensed professionals, and over 20 years of experience serving the {location.name} community and surrounding areas.
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
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Licensed &amp; Insured
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                24/7 Available
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-accent" />
                20+ Years Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About this service in this location */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Professional {service.name} in {location.name}
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.longDescription}
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Whether you are a homeowner or business owner in {location.name}, {BUSINESS.name} has the experience and equipment to handle any {service.shortName.toLowerCase()} job, big or small. Our team knows the {location.name} area intimately, including the unique plumbing challenges that properties here face. We also serve the surrounding areas including {location.nearbyAreas.join(", ")}.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  With over 20 years of experience in the Chicagoland area, our licensed plumbers have seen every type of plumbing issue {location.name} properties can present. From {location.name}&apos;s older homes with aging pipes to newer construction needing modern installations, we bring the right tools, materials, and expertise to every job. Our upfront pricing means no surprises — you know exactly what the job will cost before we begin.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Don&apos;t wait for a small problem to become a big one. Contact us today for fast, reliable {service.shortName.toLowerCase()} service in {location.name} and the surrounding communities. We offer free estimates on all non-emergency work and 24/7 emergency response when you need us most.
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-10 mb-6">
                Our {service.shortName} Services in {location.name} Include:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 p-4 rounded-xl bg-gray-50">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-primary rounded-2xl p-8 text-white">
                <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  {SERVICE_ICONS[service.icon]}
                </div>
                <h3 className="text-xl font-bold mb-2">Need {service.shortName} in {location.name}?</h3>
                <p className="text-white/80 text-sm mb-6">
                  Call us now for fast, professional {service.shortName.toLowerCase()} service. We typically arrive within 30-60 minutes for emergencies.
                </p>
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-dark font-bold px-6 py-3.5 rounded-xl transition-colors w-full"
                >
                  <Phone className="w-4 h-4" />
                  {BUSINESS.phone}
                </a>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Other Services in {location.name}</h3>
                <div className="space-y-2">
                  {otherServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/locations/${location.slug}/${s.slug}`}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-white transition-colors group"
                    >
                      <span className="text-sm text-gray-600 group-hover:text-primary font-medium">{s.shortName}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-primary" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Nearby Service Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {location.nearbyAreas.map((area) => (
                    <span key={area} className="px-3 py-1.5 bg-white rounded-full text-xs text-gray-600 border border-gray-200">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Service Content */}
      {serviceContent?.sections.slice(0, 2).map((section, idx) => (
        <section key={idx} className={`py-16 ${idx % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
              {section.title.replace("Chicagoland", location.name)}
            </h2>
            {section.content.map((paragraph, pIdx) => (
              <p key={pIdx} className="text-gray-600 leading-relaxed mb-6 text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ))}

      {/* Location-Specific Common Issues */}
      {locationContent?.commonIssues && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
              Why {location.name} Properties Need Professional {service.shortName}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Properties in {location.name} face unique plumbing challenges that make professional {service.shortName.toLowerCase()} services essential. Here are some of the most common issues we address for {location.name} property owners:
            </p>
            <div className="space-y-4">
              {locationContent.commonIssues.slice(0, 3).map((issue, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{issue.title}</h3>
                    <p className="text-gray-500 text-sm">{issue.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Customer Reviews */}
      <section className="py-20 bg-gray-50">
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
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100">
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
      {serviceContent?.faqs && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">
              {service.name} FAQ for {location.name} Residents
            </h2>
            <div className="space-y-4">
              {serviceContent.faqs.map((faq, idx) => (
                <details key={idx} className="bg-gray-50 rounded-xl border border-gray-100 group">
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

      {/* CTA */}
      <section className="py-16 gradient-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            Get {service.name} in {location.name} Today
          </h2>
          <p className="text-white/70 mb-8">
            Available 24/7. Free estimates. Licensed &amp; insured professionals with 20+ years experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-dark font-bold px-10 py-4 rounded-xl transition-all text-lg"
            >
              <Phone className="w-5 h-5" />
              {BUSINESS.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-10 py-4 rounded-xl transition-all border border-white/20"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
