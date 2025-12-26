import "./globals.css";
import { ReactNode } from "react";
import Chatbot from "@/components/Chatbot";

export const metadata = {
  title:
    "Monecuer Inc | AI, Cybersecurity, Software, Cloud & Digital Media Solutions",

  description:
    "Monecuer Inc is a multidisciplinary technology and media company providing AI-driven software solutions, cybersecurity services, cloud infrastructure, full-stack development, and professional media services including photography, videography, content creation, graphic design, and digital branding for businesses and individuals.",

  keywords:
    "Monecuer Inc, AI solutions, artificial intelligence company, cybersecurity services, penetration testing, cloud infrastructure, SaaS development, full stack development, software company Zimbabwe, digital media company, photography services, videography services, content creation, graphic design, branding agency, business automation, enterprise software, startup technology partner",

  authors: [{ name: "Monecuer Inc", url: "https://www.monecuer.com" }],
  creator: "Monecuer Inc",
  publisher: "Monecuer Inc",
  metadataBase: new URL("https://www.monecuer.com"),

  openGraph: {
    title:
      "Monecuer Inc | AI, Cybersecurity, Software & Digital Media Company",
    description:
      "A multidisciplinary technology and media company delivering AI-driven software, cybersecurity, cloud systems, and professional digital media services for modern businesses.",
    url: "https://www.monecuer.com",
    siteName: "Monecuer Inc",
    images: [
      {
        url: "https://www.monecuer.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt:
          "Monecuer Inc — AI, Cybersecurity, Cloud & Digital Media Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Monecuer Inc | AI, Cybersecurity, Software & Digital Media",
    description:
      "Secure AI systems, cloud platforms, full-stack software, cybersecurity, and creative digital media services.",
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

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
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

        {/* ✅ Structured Data — Tech + Media Company */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Monecuer Inc",
              url: "https://www.monecuer.com",
              logo: "https://www.monecuer.com/logo.png",

              description:
                "Monecuer Inc is a multidisciplinary technology and media company providing AI-driven software solutions, cybersecurity services, cloud infrastructure, full-stack development, and professional media services including photography, videography, content creation, graphic design, and digital branding.",

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
                addressLocality: "Harare",
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

              serviceType: [
                "AI & Automation",
                "Cybersecurity Services",
                "Cloud Infrastructure",
                "Full Stack Software Development",
                "SaaS & Enterprise Systems",
                "Photography Services",
                "Videography Services",
                "Content Creation",
                "Graphic Design",
                "Digital Branding",
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
