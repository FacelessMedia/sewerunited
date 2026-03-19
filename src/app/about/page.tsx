import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Phone, CheckCircle, Award, Users, Clock, Shield } from "lucide-react";
import { BUSINESS } from "@/lib/data";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${BUSINESS.name} — over 20 years of professional plumbing, sewer, and drain services across Chicagoland. Licensed, insured, and committed to excellence.`,
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about" },
        ]}
      />

      {/* Hero */}
      <section className="gradient-primary text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6">
            {BUSINESS.name}
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Over 20 years of trusted plumbing, sewer, and drain services for residential and commercial properties across the entire Chicagoland area.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  {BUSINESS.name} was founded with a simple mission: to provide honest, reliable, and professional plumbing services to the people of Chicago and surrounding suburbs. What started as a small operation has grown into one of the most trusted names in Chicagoland plumbing.
                </p>
                <p>
                  With over two decades of experience, our team of licensed professionals has seen and solved it all — from simple drain clogs to complex sewer line replacements. We take pride in the great relationships we maintain with our customers and the quality workmanship we deliver on every job.
                </p>
                <p>
                  UNITED services both residential and commercial properties all over Chicago and even further when needed. Whether it&apos;s a midnight emergency or a scheduled maintenance visit, you can count on us to be there.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hydrojetting.png"
                alt="United Sewer & Drains team"
                width={600}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "20+", label: "Years Experience", icon: Award },
              { number: "24/7", label: "Emergency Service", icon: Clock },
              { number: "1000+", label: "Happy Customers", icon: Users },
              { number: "100%", label: "Licensed & Insured", icon: Shield },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-extrabold text-gray-900">{stat.number}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-12 text-center">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Professionalism",
                description:
                  "Our licensed and insured technicians arrive on time, in uniform, and ready to work. We treat your property with respect and leave it cleaner than we found it.",
              },
              {
                title: "Transparency",
                description:
                  "No hidden fees, no surprise charges. We provide upfront pricing and clear explanations so you always know what you're paying for.",
              },
              {
                title: "Quality Workmanship",
                description:
                  "We use the latest equipment and techniques to ensure every job is done right the first time. Our work is backed by our satisfaction guarantee.",
              },
              {
                title: "Fast Response",
                description:
                  "Plumbing emergencies don't wait, and neither do we. Our 24/7 emergency service means help is always just a phone call away.",
              },
              {
                title: "Experience",
                description:
                  "With over 20 years in the industry, we've seen it all. Our deep knowledge allows us to quickly diagnose issues and provide lasting solutions.",
              },
              {
                title: "Community Focus",
                description:
                  "As a Chicago-based company, we're invested in the communities we serve. We build long-term relationships with our customers based on trust.",
              },
            ].map((value) => (
              <div key={value.title} className="p-6 rounded-xl bg-gray-50 border border-gray-100">
                <CheckCircle className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Work With Us?</h2>
          <p className="text-white/70 mb-8">Contact us today and experience the United Sewer &amp; Drains difference.</p>
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
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
