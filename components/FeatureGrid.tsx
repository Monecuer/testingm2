import { Globe, Brain, CreditCard, Cloud, Cpu, Shield } from "lucide-react";

const items = [
  { icon: Globe, title: "Web & Mobile", text: "Next.js, React, Flutter — fast, secure, responsive." },
  { icon: Brain, title: "AI & Automation", text: "Chatbots, automations, analytics & insights." },
  { icon: CreditCard, title: "POS & SaaS", text: "Modern POS, subscriptions, dashboards." },
  { icon: Cloud, title: "Cloud & DevOps", text: "AWS, Docker, CI/CD — built to scale." },
  { icon: Cpu, title: "Robotics Ready", text: "Protocols, control UIs, telemetry." },
  { icon: Shield, title: "Security First", text: "Hygiene, access control, monitoring." },
];

export default function FeatureGrid(){
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(({icon:Icon, title, text}, i)=>(
        <div key={i} className="card">
          <Icon className="text-primary" />
          <div className="h3 mt-3">{title}</div>
          <p className="p mt-2">{text}</p>
        </div>
      ))}
    </div>
  );
}
