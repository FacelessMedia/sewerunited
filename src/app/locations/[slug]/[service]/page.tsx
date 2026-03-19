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
} from "lucide-react";
import { BUSINESS, SERVICES, LOCATIONS } from "@/lib/data";
import { ServiceSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";

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
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Looking for professional {service.name.toLowerCase()} in {location.name}? {BUSINESS.name} delivers expert solutions with 24/7 availability, licensed professionals, and over 20 years of experience serving the {location.name} community.
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
                  Whether you are a homeowner or business owner in {location.name}, {BUSINESS.name} has the experience and equipment to handle any {service.shortName.toLowerCase()} job, big or small. We also serve the surrounding areas including {location.nearbyAreas.join(", ")}.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Don&apos;t wait for a small problem to become a big one. Contact us today for fast, reliable {service.shortName.toLowerCase()} service in {location.name} and the surrounding communities.
                </p>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mt-10 mb-6">
                Our {service.shortName} Services Include:
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
                <h3 className="text-xl font-bold mb-2">Need {service.shortName}?</h3>
                <p className="text-white/80 text-sm mb-6">
                  Call us now for fast, professional {service.shortName.toLowerCase()} in {location.name}.
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

      {/* CTA */}
      <section className="py-16 gradient-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            Get {service.name} in {location.name} Today
          </h2>
          <p className="text-white/70 mb-8">
            Available 24/7. Free estimates. Licensed &amp; insured professionals.
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
