import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Wrench,
  Droplets,
  ShieldCheck,
  Hammer,
  ClipboardCheck,
  ArrowRight,
  Star,
  CheckCircle,
  MapPin,
  Clock,
} from "lucide-react";
import { BUSINESS, SERVICES, LOCATIONS } from "@/lib/data";
import { SchemaMarkup } from "@/components/SchemaMarkup";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  Wrench: <Wrench className="w-8 h-8" />,
  PipetteIcon: <Droplets className="w-8 h-8" />,
  Droplets: <Droplets className="w-8 h-8" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8" />,
  Hammer: <Hammer className="w-8 h-8" />,
  ClipboardCheck: <ClipboardCheck className="w-8 h-8" />,
};

export default function Home() {
  return (
    <>
      <SchemaMarkup />

      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.png"
            alt="Professional plumbing services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/75 to-dark/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-28 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Clock className="w-4 h-4" />
              24/7 Emergency Service Available
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Professional <span className="text-gradient">Plumbing</span>, Sewer &amp; Drain Services
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
              Trusted by homeowners and businesses across Chicagoland for over 20 years. Licensed, insured, and ready when you need us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-dark font-bold px-8 py-4 rounded-xl transition-all text-lg shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                {BUSINESS.phone}
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all border border-white/20"
              >
                Our Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex items-center gap-6 mt-10 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Licensed &amp; Insured
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Free Estimates
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-accent" />
                20+ Years
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-4">Our Services</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              From emergency repairs to full installations, we provide comprehensive plumbing solutions for residential and commercial properties.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-gray-50 hover:bg-primary rounded-2xl p-8 transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 group-hover:bg-white/20 flex items-center justify-center text-primary group-hover:text-white transition-colors mb-5">
                  {SERVICE_ICONS[service.icon]}
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-500 group-hover:text-white/80 text-sm leading-relaxed transition-colors mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-primary group-hover:text-accent font-semibold text-sm transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 lg:py-28 gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-6">Our Commitment to Excellence</h2>
              <p className="text-white/80 leading-relaxed mb-8">
                UNITED Sewer &amp; Drains has the responsibility to resolve your problems with professionalism, giving every customer complete and thorough service. We service both residential and commercial properties all over Chicago and the suburbs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Over 20 Years Experience",
                  "24/7 Emergency Response",
                  "Licensed & Insured",
                  "Free Estimates",
                  "Residential & Commercial",
                  "Customer Satisfaction",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hydrojetting.png"
                  alt="Hydro jetting services"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-dark p-6 rounded-2xl shadow-xl hidden lg:block">
                <div className="text-4xl font-extrabold">20+</div>
                <div className="text-sm font-semibold">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Where We Work</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-4">Service Areas</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Proudly serving the greater Chicagoland area and surrounding suburbs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {LOCATIONS.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all border border-gray-100 hover:border-primary/20 group"
              >
                <MapPin className="w-8 h-8 text-primary mx-auto mb-3 group-hover:text-accent transition-colors" />
                <h3 className="font-bold text-gray-900">{location.name}</h3>
                <p className="text-sm text-gray-500">{location.state}</p>
              </Link>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-8">
            Also serving: Melrose Park, Tinley Park, Hinsdale, Bedford Park, Hammond, and more
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Work</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-4">Recent Projects</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative rounded-xl overflow-hidden aspect-[4/3] group">
                <Image
                  src={`/images/gallery-${i}.jpg`}
                  alt={`Plumbing project ${i}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors flex items-center justify-center">
                  <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    View Project
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Need a Plumber? Call Us Now!</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Available 24/7 for emergency plumbing, sewer, and drain services across the entire Chicagoland area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-dark font-bold px-10 py-4 rounded-xl transition-all text-lg shadow-lg"
            >
              <Phone className="w-5 h-5" />
              {BUSINESS.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-10 py-4 rounded-xl transition-all border border-white/20"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
