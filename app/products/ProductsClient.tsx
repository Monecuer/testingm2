import Lottie from "lottie-react";
import comingSoonAnimation from "@/public/lottie/coming-soon.json";

{
  name: "Upcoming Projects",
  icon: (
    <Lottie
      animationData={comingSoonAnimation}
      loop={true}
      className="w-14 h-14"
    />
  ),
  tagline: "Exciting Projects Are On The Way!",
  desc: "We are building next-generation digital solutions for global business challenges.",
  bullets: ["AI Apps", "Cloud Platforms", "Ecommerce SaaS", "Releasing Soon"],
}
