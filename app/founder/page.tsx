import FounderContent from "./FounderContent";

export const metadata = {
  title: "Founder — Elshaddai Anesu Mugugu | Monecuer Inc.",
  description:
    "Meet Elshaddai Anesu Mugugu, Software Engineer and Founder of Monecuer Inc., building innovative AI, Cybersecurity, Cloud, SaaS, and Web solutions from Zimbabwe.",
  openGraph: {
    title: "Founder — Elshaddai Anesu Mugugu",
    description:
      "Founder of Monecuer Inc. — Full Stack Developer, Cloud Engineer, Cybersecurity Specialist from Zimbabwe.",
    url: "https://www.monecuer.com/founder",
    images: [{ url: "/founder.jpg", width: 1200, height: 630 }],
    type: "profile",
  },
};

export default function Page() {
  return <FounderContent />;
}
