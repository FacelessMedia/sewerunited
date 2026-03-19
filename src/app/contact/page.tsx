import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Facebook } from "lucide-react";
import { BUSINESS } from "@/lib/data";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${BUSINESS.name} for plumbing, sewer & drain services. Call ${BUSINESS.phone} for 24/7 emergency service across Chicagoland.`,
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />

      {/* Hero */}
      <section className="gradient-primary text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6">Contact Us 24/7</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Have a plumbing emergency or need a free estimate? We&apos;re here around the clock to help you.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Details */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-extrabold text-gray-900">Get in Touch</h2>
              <p className="text-gray-600">
                Reach out to us anytime. We provide 24/7 emergency plumbing services across the entire Chicagoland area and suburbs.
              </p>

              <div className="space-y-4">
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center gap-4 p-5 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Primary Phone</div>
                    <div className="font-bold text-gray-900 text-lg">{BUSINESS.phone}</div>
                  </div>
                </a>

                <a
                  href={BUSINESS.phoneAltHref}
                  className="flex items-center gap-4 p-5 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Secondary Phone</div>
                    <div className="font-bold text-gray-900 text-lg">{BUSINESS.phoneAlt}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-4 p-5 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="font-bold text-gray-900">{BUSINESS.email}</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-5 rounded-xl bg-primary/5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Service Area</div>
                    <div className="font-bold text-gray-900">Chicagoland &amp; Suburbs</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 rounded-xl bg-accent/10">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-accent-dark" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Hours</div>
                    <div className="font-bold text-gray-900">{BUSINESS.hours}</div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="font-bold text-gray-900 mb-3">Follow Us</h3>
                <a
                  href={BUSINESS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 border border-gray-100">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Get a Free Quote</h2>
                <p className="text-gray-500 mb-8">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
                <form
                  action={`https://formsubmit.co/${BUSINESS.email}`}
                  method="POST"
                  className="space-y-5"
                >
                  <input type="hidden" name="_subject" value="New Quote Request from Website" />
                  <input type="hidden" name="_captcha" value="false" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white text-gray-900"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white text-gray-900"
                        placeholder="(773) 555-0123"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white text-gray-900"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white text-gray-900"
                    >
                      <option value="">Select a service...</option>
                      <option value="Plumbing Services">Plumbing Services</option>
                      <option value="Sewer & Drain">Sewer &amp; Drain</option>
                      <option value="Hydro Jetting">Hydro Jetting &amp; Cleaning</option>
                      <option value="Flood Control">Flood Control Systems</option>
                      <option value="Installations">Plumbing Installations</option>
                      <option value="Maintenance">Maintenance &amp; Inspections</option>
                      <option value="Emergency">Emergency Service</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white text-gray-900 resize-none"
                      placeholder="Describe your plumbing issue or what service you need..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent-dark text-dark font-bold py-4 px-8 rounded-xl transition-all text-lg shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    For emergencies, please call us directly at{" "}
                    <a href={BUSINESS.phoneHref} className="text-primary font-medium">
                      {BUSINESS.phone}
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-16 gradient-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Serving All of Chicagoland</h2>
          <p className="text-white/70 mb-8">
            Chicago &bull; Oak Park &bull; Evanston &bull; Oak Lawn &bull; Cicero &bull; and surrounding suburbs
          </p>
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
