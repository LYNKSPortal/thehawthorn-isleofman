export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "The Hawthorn Bar & Bistro",
    "alternateName": "The Hawthorn",
    "image": "https://thehawthorn.im/twitter-meta-facebook.jpg",
    "description": "The Hawthorn is a family-run bar and bistro located in Greeba, Isle of Man. Established in May 2000 by John Howard, we serve delicious homemade traditional and international dishes using fresh, locally-sourced ingredients. Popular for Sunday roasts, family dining, and special occasions. We offer a welcoming atmosphere with flexible closing times and accept reservations.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Road, Greeba",
      "addressLocality": "Greeba",
      "addressRegion": "Isle of Man",
      "postalCode": "IM4 3LF",
      "addressCountry": "IM"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "54.2167",
      "longitude": "-4.6167"
    },
    "url": "https://thehawthorn.im",
    "telephone": "+441624801268",
    "email": "info@thehawthorn.im",
    "servesCuisine": ["British", "International", "Traditional", "European", "Homemade"],
    "priceRange": "££",
    "currenciesAccepted": "GBP",
    "paymentAccepted": "Cash, Credit Card, Debit Card",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday"],
        "opens": "12:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday", "Saturday"],
        "opens": "12:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "12:00",
        "closes": "19:00"
      }
    ],
    "acceptsReservations": "True",
    "menu": "https://thehawthorn.im/menus",
    "hasMenu": "https://thehawthorn.im/menus",
    "founder": {
      "@type": "Person",
      "name": "John Howard"
    },
    "foundingDate": "2000-05",
    "slogan": "Simple food, done well",
    "knowsAbout": [
      "Traditional British cuisine",
      "Sunday roasts",
      "Family dining",
      "Local Isle of Man ingredients",
      "Homemade desserts",
      "Children's menu",
      "Special dietary requirements",
      "TT Race hospitality",
      "Private events"
    ],
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "54.2167",
        "longitude": "-4.6167"
      },
      "geoRadius": "50000"
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Family Friendly",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Parking Available",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Wheelchair Accessible",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "High Chairs Available",
        "value": true
      }
    ],
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://thehawthorn.im/reservations",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Reservation",
        "name": "Table Reservation"
      }
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
