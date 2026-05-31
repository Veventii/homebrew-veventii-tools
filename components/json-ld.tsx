"use client";

import Script from "next/script";

export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Veventii PVT LTD",
    url: "https://Veventii.com",
    logo: "https://Veventii.com/veventii-logo.svg",
    description:
      "Building innovative software products that solve real problems and enhance productivity.",
    foundingDate: "2024",
    foundingLocation: {
      "@type": "Place",
      name: "Sri Lanka",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "LK",
      addressRegion: "Sri Lanka",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+94-XXX-XXX-XXX",
      contactType: "customer service",
      email: "contact@Veventii.com",
      availableLanguage: "English",
    },
    sameAs: [
      "https://linkedin.com/company/veventii",
      "https://twitter.com/veventii",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "RSVP.now",
          description:
            "AI-enhanced event hosting platform with intelligent guest management",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "Zu.lk",
          description:
            "Premium URL shortener with advanced analytics and smart optimization",
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "Web",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "CatchUp.AI",
          description:
            "AI-powered news summarization with personalized insights",
          applicationCategory: "NewsApplication",
          operatingSystem: "Web",
        },
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Veventii",
    url: "https://Veventii.com",
    description:
      "Building innovative software products that solve real problems and enhance productivity.",
    publisher: {
      "@type": "Organization",
      name: "Veventii PVT LTD",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://Veventii.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://Veventii.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://Veventii.com/products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "About",
        item: "https://Veventii.com/about",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        item: "https://Veventii.com/contact",
      },
    ],
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
