import "./globals.css";
import { ReactNode } from "react";
import Chatbot from "@/components/Chatbot";

export const metadata = {
  title:
    "Monecuer Inc. — Software Engineering, AI Academy & Cybersecurity Company in Zimbabwe",
  description:
    "Monecuer Inc. is a Zimbabwean Software Engineering, AI & Cybersecurity company offering intelligent digital solutions, online learning, programming courses, POS systems, and legal cybersecurity services for Africa.",
  keywords:
    "Monecuer, Software Engineering Zimbabwe, Learn Python Africa, Cybersecurity Academy Zimbabwe, AI Courses Africa, POS Software, Cloud Systems, Programming Tutorials, African Tech Company, Software Engineering Lessons",
  authors: [{ name: "Monecuer Inc.", url: "https://www.monecuer.com" }],
  creator: "Monecuer Inc.",
  publisher: "Monecuer Inc.",
  metadataBase: new URL("https://www.monecuer.com"),
  openGraph: {
    title:
      "Monecuer Inc. — Africa's Software Engineering, AI Learning & Cybersecurity Company",
    description:
      "AI Courses • Full Stack Training • Cybersecurity Lessons • POS Solutions • Cloud Infrastructure • Web & App Development — engineered for Africa’s digital growth.",
    url: "https://www.monecuer.com",
    siteName: "Monecuer Inc.",
    images: [
      {
        url: "https://www.monecuer.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Monecuer Inc. — Engineering Africa’s Tech Future",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monecuer Inc. — AI, Software & Cybersecurity",
    description:
      "Learn Programming • Build AI Projects • Secure Cloud • POS & SaaS Solutions • African Tech Education.",
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
        <meta name="application-name" content="Monecuer Inc." />
        <meta
          name="google-site-verification"
          content="zHo4MZ5aCkW5qe2Es7zs11_lg4wzfW_VoZXY8CAEpkg"
        />
        <link rel="canonical" href="https://www.monecuer.com" />

        {/* 🌐 Structured Data for Search + AI Learning Services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationOrganization",
              name: "Monecuer Inc.",
              alternateName: "Monecuer AI Academy",
              url: "https://www.monecuer.com",
              logo: "https://www.monecuer.com/logo.png",
              founder: {
                "@type": "Person",
                name: "Elshaddai Anesu Mugugu",
                jobTitle: "Software Engineer & Founder",
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
                  contactType: "customer service",
                  availableLanguage: ["English"],
                },
              ],
              description:
                "Monecuer Inc. provides AI education, Software Engineering learning programs, legal cybersecurity, POS SaaS, and enterprise-grade digital solutions.",
              serviceType: [
                "AI & Automation",
                "Cyber Security (Legal Only)",
                "Cloud & Infrastructure",
                "Programming Courses",
                "Tutor Booking System",
                "POS & SaaS Development",
                "Mobile App Development",
              ],
              offersLearning: [
                "Learn Python",
                "JavaScript Programming",
                "AI & Machine Learning Courses",
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
