import { BUSINESS } from "@/lib/data";
import { REVIEW_SUMMARY, GOOGLE_REVIEWS } from "@/lib/reviews";

interface SchemaMarkupProps {
  type?: "LocalBusiness" | "Service" | "WebPage";
  additionalSchema?: Record<string, unknown>;
}

export function SchemaMarkup({ type = "LocalBusiness", additionalSchema }: SchemaMarkupProps) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type === "LocalBusiness" ? "Plumber" : type,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: BUSINESS.url,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    image: `${BUSINESS.url}/images/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.7789,
      longitude: -87.7186,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: REVIEW_SUMMARY.google.rating,
      reviewCount: REVIEW_SUMMARY.google.count,
      bestRating: 5,
      worstRating: 1,
    },
    areaServed: [
      { "@type": "City", name: "Chicago", containedInPlace: { "@type": "State", name: "Illinois" } },
      { "@type": "City", name: "Oak Park", containedInPlace: { "@type": "State", name: "Illinois" } },
      { "@type": "City", name: "Evanston", containedInPlace: { "@type": "State", name: "Illinois" } },
      { "@type": "City", name: "Oak Lawn", containedInPlace: { "@type": "State", name: "Illinois" } },
      { "@type": "City", name: "Cicero", containedInPlace: { "@type": "State", name: "Illinois" } },
    ],
    sameAs: [BUSINESS.facebook],
    ...additionalSchema,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchema) }}
    />
  );
}

export function ServiceSchema({ serviceName, serviceDescription, areaServed }: { serviceName: string; serviceDescription: string; areaServed?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceName,
    description: serviceDescription,
    provider: {
      "@type": "Plumber",
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      url: BUSINESS.url,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.address.street,
        addressLocality: BUSINESS.address.city,
        addressRegion: BUSINESS.address.state,
        postalCode: BUSINESS.address.zip,
        addressCountry: "US",
      },
    },
    areaServed: areaServed
      ? { "@type": "City", name: areaServed, containedInPlace: { "@type": "State", name: "Illinois" } }
      : { "@type": "State", name: "Illinois" },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BUSINESS.url}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ReviewSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: BUSINESS.name,
    url: BUSINESS.url,
    telephone: BUSINESS.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: "US",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: REVIEW_SUMMARY.google.rating,
      reviewCount: REVIEW_SUMMARY.google.count,
      bestRating: 5,
      worstRating: 1,
    },
    review: GOOGLE_REVIEWS.slice(0, 10).map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author,
      },
      datePublished: review.date,
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: review.text,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
