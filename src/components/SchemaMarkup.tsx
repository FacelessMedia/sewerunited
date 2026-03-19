import { BUSINESS } from "@/lib/data";

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
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      addressCountry: "US",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "$$",
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
