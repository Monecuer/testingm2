// app/cybersecurity/page.tsx
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Cyber Security — Monecuer Inc.",
  description:
    "Legal-only cyber security services by Monecuer: web & mobile app security, vulnerability assessments, cloud hardening, SOC-lite monitoring, incident response, and security awareness.",
  openGraph: {
    title: "Cyber Security — Monecuer Inc.",
    description:
      "Legal penetration testing (with authorization), robust cloud hardening, blue team monitoring, and pragmatic incident response.",
    url: "https://www.monecuer.com/cybersecurity",
    siteName: "Monecuer Inc.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Monecuer Cyber Security" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyber Security — Monecuer Inc.",
    description:
      "Engineering cyber resilience for Africa: authorized testing, hardening, detection & response.",
    images: ["/og-image.jpg"],
  },
};

const CyberSecurityClient = dynamic(() => import("@/components/CyberSecurityClient"), {
  ssr: false,
  loading: () => (
    <main className="section container-xl pt-28 pb-20">
      <div className="max-w-3xl mx-auto">
        <div className="h-10 w-2/3 shimmer rounded-lg mb-4" />
        <div className="h-5 w-1/2 shimmer rounded mb-8" />
        <div className="grid md:grid-cols-2 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="card">
              <div className="h-6 w-1/3 shimmer rounded mb-3" />
              <div className="h-4 w-full shimmer rounded mb-2" />
              <div className="h-4 w-5/6 shimmer rounded" />
            </div>
          ))}
        </div>
      </div>
    </main>
  ),
});

export default function Page() {
  return (
    <>
      <Navbar />
      <CyberSecurityClient />
      <Footer />
    </>
  );
}
