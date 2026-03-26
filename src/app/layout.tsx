import type { Metadata } from "next";
import Script from "next/script";
import { Oswald, Mulish } from "next/font/google";
import { Layout } from "@/components/layout/Layout";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const muli = Mulish({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
  display: "swap",
});

const BASE_URL = "https://www.vperformance.lk";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "V Performance | Functional Fitness & Performance Training",
    template: "%s | V Performance",
  },
  description:
    "V Performance is a results-driven training system focused on functional movement, corrective exercise, and performance coaching. Build strength, move better, and achieve long-term health through personalized training in Colombo, Sri Lanka.",
  keywords: [
    "V Performance",
    "personal training Sri Lanka",
    "functional fitness",
    "performance training",
    "corrective exercise",
    "strength coaching",
    "mobility training",
    "fitness coaching Sri Lanka",
    "gym Colombo",
    "personal trainer Colombo",
  ],
  authors: [{ name: "Deeesign", url: "https://www.deeesignlab.com" }],
  robots: "index, follow",
  icons: {
    icon: "/images/favicon.png",
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: BASE_URL,
    siteName: "V Performance",
    title: "V Performance | Functional Fitness & Performance Training",
    description:
      "Results-driven training system focused on functional movement, corrective exercise, and performance coaching in Colombo, Sri Lanka.",
    images: [
      {
        url: `${BASE_URL}/images/hero/hero-1.jpg`,
        width: 1200,
        height: 630,
        alt: "V Performance Gym",
      },
    ],
  },
  other: {
    "theme-color": "#2596be",
    "msapplication-TileColor": "#2596be",
    "geo.region": "LK-1",
    "geo.placename": "Colombo, Sri Lanka",
    ICBM: "6.8863452152126765, 79.87899885178108",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: "V Performance",
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.png`,
  image: `${BASE_URL}/images/hero/hero-1.jpg`,
  description:
    "V Performance is a results-driven training system focused on functional movement, corrective exercise, and performance coaching in Colombo, Sri Lanka.",
  telephone: "+94 77 754 8505",
  email: "info@vperformance.lk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2 Andarewatta Rd",
    addressLocality: "Colombo",
    postalCode: "00130",
    addressCountry: "LK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 6.8863452152126765,
    longitude: 79.87899885178108,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "05:30",
      closes: "12:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "15:30",
      closes: "19:30",
    },
  ],
  openingHours: ["Mo-Su 05:30-12:30", "Mo-Su 15:30-19:30"],
  sameAs: ["https://www.instagram.com/vperformance3/"],
  priceRange: "$$",
  creator: {
    "@type": "Organization",
    name: "Deeesign",
    url: "https://www.deeesignlab.com",
    description: "Web design and development studio",
  },
  offerCatalog: {
    "@type": "OfferCatalog",
    name: "Training Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Personal Training",
          description: "One Coach. One Plan. Zero Guesswork.",
        },
        price: "38000",
        priceCurrency: "LKR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Youth Fitness (Ages 13–18)",
          description: "Build the Foundation. Perform at Your Best.",
        },
        price: "18000",
        priceCurrency: "LKR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Adult & General Fitness",
          description: "Train With Purpose. Move for Life.",
        },
        price: "25000",
        priceCurrency: "LKR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Senior Fitness",
          description: "Move Well. Stay Strong. Live Independently.",
        },
        price: "44000",
        priceCurrency: "LKR",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Injury Rehabilitation",
          description: "Fix the Root Cause. Not Just the Pain.",
        },
        price: "44000",
        priceCurrency: "LKR",
      },
    ],
  },
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "V Performance",
  url: BASE_URL,
  creator: {
    "@type": "Organization",
    name: "Deeesign",
    url: "https://www.deeesignlab.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${muli.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="author" href="https://www.deeesignlab.com" />
        <link rel="author" type="text/plain" href="/humans.txt" />
      </head>
      <body className={muli.className}>
        {/* <!-- Designed and developed by Deeesign — https://www.deeesignlab.com --> */}
        <Layout>{children}</Layout>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="json-ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
      </body>
    </html>
  );
}
