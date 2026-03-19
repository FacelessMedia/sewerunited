import Link from "next/link";
import type { Metadata } from "next";
import { Phone, Star, ArrowRight, ExternalLink } from "lucide-react";
import { BUSINESS, SERVICES } from "@/lib/data";
import { BreadcrumbSchema, ReviewSchema } from "@/components/SchemaMarkup";
import { GOOGLE_REVIEWS, REVIEW_SUMMARY } from "@/lib/reviews";

export const metadata: Metadata = {
  title: `Customer Reviews | ${BUSINESS.name} | Rated ${REVIEW_SUMMARY.google.rating}/5`,
  description: `Read real customer reviews for ${BUSINESS.name}. Rated ${REVIEW_SUMMARY.google.rating}/5 on Google with ${REVIEW_SUMMARY.google.count} reviews. See why Chicagoland trusts us for plumbing, sewer & drain services.`,
};

export default function ReviewsPage() {
  const fiveStarReviews = GOOGLE_REVIEWS.filter((r) => r.rating === 5);
  const otherReviews = GOOGLE_REVIEWS.filter((r) => r.rating < 5);

  return (
    <>
      <ReviewSchema />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Reviews", url: "/reviews" },
        ]}
      />

      {/* Hero */}
      <section className="gradient-primary text-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Customer Reviews</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Don&apos;t just take our word for it — see what our customers have to say about {BUSINESS.name}. We&apos;re proud of our reputation for quality work and excellent customer service.
          </p>

          {/* Rating Summary */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-7 h-7 fill-accent text-accent" />
                ))}
              </div>
              <div className="text-4xl font-extrabold mb-1">{REVIEW_SUMMARY.google.rating}</div>
              <div className="text-white/70 text-sm">{REVIEW_SUMMARY.google.count} Google Reviews</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center">
              <div className="text-4xl font-extrabold mb-1">{REVIEW_SUMMARY.overall.count}+</div>
              <div className="text-white/70 text-sm">Total Reviews Across Platforms</div>
              <div className="text-xs text-white/50 mt-2">Google &bull; Angi &bull; Yelp</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center">
              <div className="text-4xl font-extrabold mb-1">20+</div>
              <div className="text-white/70 text-sm">Years of Trusted Service</div>
              <div className="text-xs text-white/50 mt-2">Serving Chicagoland</div>
            </div>
          </div>
        </div>
      </section>

      {/* Rating Breakdown */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-2xl font-bold text-gray-900">{REVIEW_SUMMARY.google.rating}/5</div>
              <div className="text-sm text-gray-500">Google ({REVIEW_SUMMARY.google.count} reviews)</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-2xl font-bold text-gray-900">{REVIEW_SUMMARY.angi.rating}/5</div>
              <div className="text-sm text-gray-500">Angi ({REVIEW_SUMMARY.angi.count} reviews)</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-2xl font-bold text-gray-900">{REVIEW_SUMMARY.yelp.rating}/5</div>
              <div className="text-sm text-gray-500">Yelp ({REVIEW_SUMMARY.yelp.count} reviews)</div>
            </div>
          </div>
        </div>
      </section>

      {/* All Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">
            Customer Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fiveStarReviews.map((review, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-400 uppercase tracking-wide font-medium">{review.source}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="font-semibold text-gray-900 text-sm block">{review.author}</span>
                    {review.service && (
                      <span className="text-xs text-primary">{review.service} Customer</span>
                    )}
                  </div>
                  <span className="text-gray-400 text-xs">{review.relativeTime}</span>
                </div>
              </div>
            ))}
            {otherReviews.map((review, idx) => (
              <div key={`other-${idx}`} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    {[...Array(5 - review.rating)].map((_, i) => (
                      <Star key={`empty-${i}`} className="w-4 h-4 text-gray-200" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-400 uppercase tracking-wide font-medium">{review.source}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="font-semibold text-gray-900 text-sm block">{review.author}</span>
                    {review.service && (
                      <span className="text-xs text-primary">{review.service} Customer</span>
                    )}
                  </div>
                  <span className="text-gray-400 text-xs">{review.relativeTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Leave Us a Review</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Had a great experience with {BUSINESS.name}? We&apos;d love to hear about it! Your feedback helps us improve and helps other customers find trusted plumbing service.
          </p>
          <a
            href="https://www.google.com/search?q=United+Sewer+%26+Drains+Chicago+IL+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-xl transition-all"
          >
            <ExternalLink className="w-5 h-5" />
            Write a Google Review
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">
            Services Our Customers Love
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-white rounded-xl p-4 text-center border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all group"
              >
                <h3 className="font-semibold text-gray-900 text-sm group-hover:text-primary transition-colors">{service.shortName}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-white/70 mb-8">
            Join our {REVIEW_SUMMARY.overall.count}+ satisfied customers. Call us today for professional plumbing service you can trust.
          </p>
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
