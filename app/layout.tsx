import "./globals.css";
import { ReactNode } from "react";
import Chatbot from "@/components/Chatbot";

export const metadata = {
  title: "Monecuer Inc. — Software & Cybersecurity Company in Zimbabwe",
  description:
    "Monecuer Inc. builds intelligent software and cybersecurity solutions for Africa — specializing in AI, POS, Cloud, and automation systems that empower digital transformation.",
  keywords:
    "Monecuer, Monecuer Inc, Cyber Security Zimbabwe, AI, Cloud, POS, SaaS, IT Consulting, Software Development, Web Design, Automation, African Tech Company",
  authors: [{ name: "Monecuer Inc.", url: "https://www.monecuer.com" }],
  creator: "Monecuer Inc.",
  publisher: "Monecuer Inc.",
  metadataBase: new URL("https://www.monecuer.com"),
  openGraph: {
    title: "Monecuer Inc. — Engineering Digital Transformation",
    description:
      "AI Systems • POS Solutions • Cloud Infrastructure • Cybersecurity • Web & App Development — engineered for Africa’s digital growth.",
    url: "https://www.monecuer.com",
    siteName: "Monecuer Inc.",
    images: [
      {
        url: "https://www.monecuer.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Monecuer Inc. — Advanced Software & Cybersecurity Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monecuer Inc. — Software & Cybersecurity Solutions",
    description:
      "Engineering Africa’s digital transformation through AI, POS, Cloud, and secure software platforms.",
    creator: "@monecuer31415",
    images: ["https://www.monecuer.com/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://www.monecuer.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxImagePreview: "large",
      maxSnippet: -1,
      maxVideoPreview: -1,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ SEO & Google Verification */}
        <meta name="theme-color" content="#0A0A1F" />
        <meta name="application-name" content="Monecuer Inc." />
        <meta
          name="google-site-verification"
          content="zHo4MZ5aCkW5qe2Es7zs11_lg4wzfW_VoZXY8CAEpkg"
        />
        <link rel="canonical" href="https://www.monecuer.com" />

        {/* ✅ JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Monecuer Inc.",
              alternateName: "Monecuer Technologies",
              url: "https://www.monecuer.com",
              logo: "https://www.monecuer.com/logo.png",
              foundingDate: "2024",
              founder: {
                "@type": "Person",
                name: "Elshaddai Anesu Mugugu",
              },
              sameAs: [
                "https://www.facebook.com/monecuer",
                "https://www.instagram.com/monecuer",
                "https://www.linkedin.com/company/monecuer",
                "https://twitter.com/monecuer31415",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+263782286544",
                  contactType: "customer service",
                  areaServed: "Zimbabwe, Africa",
                  availableLanguage: ["English"],
                },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Harare",
                addressLocality: "Harare",
                addressRegion: "Harare Province",
                postalCode: "00000",
                addressCountry: "ZW",
              },
              description:
                "Monecuer Inc. is a Zimbabwean technology company offering AI, Cloud, POS, and Cyber Security solutions for businesses across Africa.",
              keywords:
                "Software Company Zimbabwe, Cyber Security, AI, Cloud, POS, SaaS, IT Consulting, Web Development, Automation",
              knowsAbout: [
                "Artificial Intelligence",
                "Cyber Security",
                "Cloud Computing",
                "POS Systems",
                "Web Development",
                "SaaS",
              ],
              serviceType: [
                "Software Development",
                "Cyber Security Consulting",
                "Cloud Infrastructure",
                "AI Automation",
                "Point of Sale Systems",
              ],
              areaServed: {
                "@type": "Place",
                name: "Africa",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Monecuer Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "AI & Automation",
                      description:
                        "Custom-built artificial intelligence systems that optimize business workflows.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Cyber Security (Legal Only)",
                      description:
                        "Authorized penetration testing, cloud hardening, and incident response.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Cloud & Infrastructure Setup",
                      description:
                        "Secure, scalable, and monitored cloud solutions for enterprises.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "POS & SaaS Development",
                      description:
                        "Smart, modern point-of-sale systems with AI-driven inventory analytics.",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>

      <body className="antialiased bg-white dark:bg-[#0A0A1F] text-gray-900 dark:text-gray-100">
        {children}
        <Chatbot /> {/* ✅ Global chatbot floating button */}
      </body>
    </html>
  );
}
