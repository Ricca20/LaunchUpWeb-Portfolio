import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "../components/WhatsAppButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

export const metadata = {
  title: "Web Design Sri Lanka | Professional Websites in Puttalam | LaunchUpWeb",
  description: "LaunchUpWeb is a top-rated web design agency in Sri Lanka based in Puttalam. we build high-converting, SEO-friendly websites for businesses in Sri Lanka and the UK.",
  keywords: ["web design Sri Lanka", "website designers in Puttalam", "web development Puttalam", "web design UK", "business website design Sri Lanka", "professional website Sri Lanka"],
  alternates: {
    canonical: 'https://launchupweb.com',
  },
  openGraph: {
    title: 'Web Design Sri Lanka | Professional Websites in Puttalam',
    description: 'Expert web design and development services in Sri Lanka. We build fast, mobile-responsive websites that grow your business.',
    url: 'https://launchupweb.com',
    siteName: 'LaunchUpWeb',
    images: [
      {
        url: 'https://launchupweb.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://launchupweb.com/#organization",
        "name": "LaunchUpWeb",
        "image": "https://launchupweb.com/logo.png",
        "url": "https://launchupweb.com",
        "telephone": "+94778320044",
        "email": "Info@launchupweb.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Main Street",
          "addressLocality": "Puttalam",
          "addressRegion": "North Western Province",
          "postalCode": "61000",
          "addressCountry": "LK"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 8.033,
          "longitude": 79.826
        },
        "areaServed": ["Puttalam", "Colombo", "United Kingdom"],
        "priceRange": "$$",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:00",
          "closes": "23:00"
        },
        "sameAs": [
          "https://www.facebook.com/launchupweb",
          "https://www.instagram.com/launchupweb"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://launchupweb.com/#website",
        "url": "https://launchupweb.com",
        "name": "LaunchUpWeb",
        "publisher": {
          "@id": "https://launchupweb.com/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Service",
        "serviceType": "Web Design & Development",
        "provider": {
          "@id": "https://launchupweb.com/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Sri Lanka"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Web Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Business Website Design"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "E-Commerce Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SEO Optimization"
              }
            }
          ]
        }
      }
    ]
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased selection:bg-primary selection:text-gray-900`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
