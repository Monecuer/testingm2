import "./globals.css";
import { ReactNode } from "react";
import Chatbot from "@/components/Chatbot";

export const metadata = {
  title: "Monecuer Inc | Secure Digital Solutions, AI & SaaS Systems",
  description:
    "Monecuer Inc is a technology-driven company delivering secure digital solutions, automation systems, AI tools, and creative digital platforms for businesses and institutions. Core services include Web & System Development, Cybersecurity Audits, SaaS & POS Systems, AI Automation, and Media Platforms. Our brand values are Security, Innovation, Discipline, Integrity, and Scalability.",

  keywords:
    "Monecuer, Software Engineering Zimbabwe, Cybersecurity Zimbabwe, AI Courses Africa, POS Software, SaaS Systems, Cloud Computing Africa, Programming Tutorials, African Tech Company, Web Development Zimbabwe",

  authors: [{ name: "Monecuer Inc.", url: "https://www.monecuer.com" }],
  creator: "Monecuer Inc.",
  publisher: "Monecuer Inc.",
  metadataBase: new URL("https://www.monecuer.com"),

  openGraph: {
    title: "Monecuer Inc | Secure Digital Solutions, AI & SaaS Systems",
    description:
      "Technology-driven company delivering secure digital solutions, automation systems, AI tools, and creative digital platforms for businesses and institutions.",
    url: "https://www.monecuer.com",
    siteName: "Monecuer Inc",
    images: [
      {
        url: "https://www.monecuer.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Monecuer Inc — Secure Digital Solutions & AI Systems",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Monecuer Inc | Secure Digital Solutions, AI & SaaS Systems",
    description:
      "Technology-driven company delivering secure digital solutions, AI automation, SaaS platforms, and cybersecurity services.",
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
        <meta name="theme-color" content="#0A0A1F" />
        <meta name="application-name" content="Monecuer Inc" />

        <meta
          name="google-site-verification"
          content="zHo4MZ5aCkW5qe2Es7zs11_lg4wzfW_VoZXY8CAEpkg"
        />

        <link rel="canonical" href="https://www.monecuer.com" />

        {/* ✅ Structured Data (SEO + AI Indexing) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Monecuer Inc",
              alternateName: "Monecuer AI Academy",
              url: "https://www.monecuer.com",
              logo: "https://www.monecuer.com/logo.png",

              founder: {
                "@type": "Person",
                name: "Elshaddai Anesu Mugugu",
                jobTitle: "Founder & Software Engineer",
              },

              sameAs: [
                "https://www.facebook.com/monecuer",
                "https://www.instagram.com/monecuer",
                "https://www.linkedin.com/company/monecuer",
                "https://twitter.com/monecuer31415",
                "https://github.com/Monecuer",
              ],

              address: {
                "@type": "PostalAddress",
                streetAddress: "Harare",
                addressLocality: "Harare",
                addressRegion: "Harare Province",
                addressCountry: "ZW",
              },

              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+263782286544",
                  contactType: "Customer Support",
                  availableLanguage: ["English"],
                },
              ],

              description:
                "Monecuer Inc provides secure digital solutions, AI automation, cybersecurity services (legal only), POS SaaS systems, cloud infrastructure, and enterprise software development.",

              serviceType: [
                "AI & Automation",
                "Cybersecurity (Legal Only)",
                "Cloud & Infrastructure",
                "Programming Education",
                "POS & SaaS Development",
                "Mobile App Development",
                "Web Systems Engineering",
              ],

              offers: [
                "Learn Python",
                "JavaScript Programming",
                "AI & Machine Learning",
                "Cybersecurity Fundamentals",
                "Next.js Full Stack Development",
              ],
            }),
          }}
        />
      </head>

      <body className="antialiased bg-white dark:bg-[#0A0A1F] text-gray-900 dark:text-gray-100">
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
