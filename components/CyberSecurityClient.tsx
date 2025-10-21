// components/CyberSecurityClient.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Bug,
  Cloud,
  AlertTriangle,
  FileSearch,
  Network,
  KeyRound,
  Server,
  Globe,
  ShieldAlert,
  Fingerprint,
  Laptop,
  Smartphone,
  BadgeCheck,
  Route,
  Radar,
  Skull, // used purely as a visual cue; copy clarifies ETHICAL/LEGAL only
  Mail,
  Phone,
} from "lucide-react";

const services = [
  {
    title: "Authorized Web & Mobile App Security",
    icon: <Bug className="w-9 h-9 text-rose-600" />,
    bullets: [
      "White-box/grey-box testing with written authorization",
      "OWASP Top 10 & business-logic abuse coverage",
      "Reports with PoC, severity, and fix guidance",
    ],
  },
  {
    title: "External & Internal Vulnerability Assessment",
    icon: <ShieldAlert className="w-9 h-9 text-amber-600" />,
    bullets: [
      "External perimeter scans & internal LAN reviews",
      "Prioritized remediation plan (90-day trackable)",
      "Executive summary + technical appendix",
    ],
  },
  {
    title: "Cloud Hardening (AWS/Firebase/VMs)",
    icon: <Cloud className="w-9 h-9 text-cyan-600" />,
    bullets: [
      "IAM least-privilege, key rotation & secret hygiene",
      "Storage, network & WAF rules; CIS benchmarks",
      "CI/CD pipeline & artifact integrity checks",
    ],
  },
  {
    title: "SOC-Lite Monitoring & Alert Tuning",
    icon: <Radar className="w-9 h-9 text-indigo-600" />,
    bullets: [
      "Log collection & anomaly detection (SIEM-lite)",
      "Runbooks & alert noise reduction",
      "Weekly health report & incident drill-downs",
    ],
  },
  {
    title: "Incident Response (Legal & Controlled)",
    icon: <AlertTriangle className="w-9 h-9 text-orange-600" />,
    bullets: [
      "Containment, forensics triage, and root-cause",
      "Post-incident lessons & hardening sprint",
      "Stakeholder comms & regulator-friendly notes",
    ],
  },
  {
    title: "Security Awareness & Policy",
    icon: <FileSearch className="w-9 h-9 text-blue-600" />,
    bullets: [
      "Human-centric phishing/resilience training",
      "Password, secrets & device policy kits",
      "DevSecOps playbooks & threat-model sessions",
    ],
  },
];

const compliance = [
  { label: "OWASP Top 10 / ASVS", icon: <BadgeCheck className="w-5 h-5" /> },
  { label: "CIS Benchmarks", icon: <ShieldCheck className="w-5 h-5" /> },
  { label: "ISO 27001 (advisory)", icon: <Globe className="w-5 h-5" /> },
  { label: "PCI-DSS (advisory)", icon: <KeyRound className="w-5 h-5" /> },
  { label: "Local data regulations (advisory)", icon: <FileSearch className="w-5 h-5" /> },
];

const steps = [
  {
    icon: <Lock className="w-7 h-7 text-blue-600" />,
    title: "1) Authorization & Scope",
    desc: "We only test with explicit written authorization. We lock scope, rules-of-engagement, and timeline.",
    pause: 0.2,
  },
  {
    icon: <Network className="w-7 h-7 text-emerald-600" />,
    title: "2) Recon & Threat Model",
    desc: "Map attack surface, data flows, assets, and likely abuse paths. Prioritize by business impact.",
    pause: 0.2,
  },
  {
    icon: <Laptop className="w-7 h-7 text-violet-600" />,
    title: "3) App & API Testing",
    desc: "Manual + assisted testing across web/mobile/API, aligned to OWASP, with logic-abuse scenarios.",
    pause: 0.2,
  },
  {
    icon: <Server className="w-7 h-7 text-indigo-600" />,
    title: "4) Infra & Cloud Review",
    desc: "Harden IAM, network, storage, secrets & CI/CD; validate backups and disaster recovery paths.",
    pause: 0.2,
  },
  {
    icon: <Fingerprint className="w-7 h-7 text-pink-600" />,
    title: "5) Evidence & Repro",
    desc: "Each finding has reproducible steps, impact analysis, and clean proof-of-concept notes.",
    pause: 0.2,
  },
  {
    icon: <Route className="w-7 h-7 text-amber-600" />,
    title: "6) Fix Plan & Retest",
    desc: "Joint remediation plan with devs/ops; retest confirms closure and reduces residual risk.",
    pause: 0.2,
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-emerald-600" />,
    title: "7) Monitor & Drill",
    desc: "Optional SOC-lite monitoring, alert tuning, and quarterly tabletop incident drills.",
    pause: 0.2,
  },
];

const tiers = [
  {
    name: "Starter Audit",
    price: "US$499+",
    points: [
      "Single web/app target",
      "OWASP Top 10 quick-scan",
      "PDF report + fixes checklist",
      "2-hour remediation clinic",
    ],
    accent: "from-blue-600 to-cyan-500",
  },
  {
    name: "Business Hardening",
    price: "US$1,999+",
    points: [
      "Web + API + basic infra",
      "Cloud & IAM checks (CIS)",
      "Prioritized roadmap (90-day)",
      "Retest included (1x)",
    ],
    accent: "from-emerald-600 to-lime-500",
  },
  {
    name: "Enterprise SOC-Lite",
    price: "Custom",
    points: [
      "Multi-app & microservices",
      "SIEM-lite + alert tuning",
      "IR playbooks + exercises",
      "Monthly exec & tech reports",
    ],
    accent: "from-indigo-600 to-fuchsia-500",
  },
];

const faqs = [
  {
    q: "Do you perform only legal testing?",
    a: "Yes. We strictly operate with written authorization, clear scope, and rules-of-engagement. No illegal or gray-area activity — ever.",
  },
  {
    q: "Will testing impact my production systems?",
    a: "We plan safe windows, rate-limit where needed, and coordinate with your team. Staging is preferred, but production-aware testing can be done carefully.",
  },
  {
    q: "What does the report include?",
    a: "Executive summary, methodology, detailed findings (impact, repro, evidence), and a prioritized remediation plan. A retest can be included.",
  },
  {
    q: "Can you help us fix issues?",
    a: "We collaborate with your dev/ops team, provide code/security snippets, recommended configs, and verify fixes during retest.",
  },
];

export default function CyberSecurityClient() {
  const [ctaOpen, setCtaOpen] = useState(false);

  return (
    <main className="section container-xl pt-28 pb-20">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0f1230] p-8 md:p-12">
        <div className="absolute -right-24 -top-24 w-[380px] h-[380px] rounded-full bg-gradient-to-br from-blue-500/15 to-cyan-500/10 blur-3xl" />
        <div className="absolute -left-24 -bottom-24 w-[380px] h-[380px] rounded-full bg-gradient-to-tr from-emerald-500/10 to-blue-500/10 blur-3xl" />
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-8 h-8 text-blue-600" aria-hidden />
            <h1 className="h1">Cyber Security (Legal-Only)</h1>
          </div>
          <p className="p mt-3">
            We harden your business against real-world threats through authorized testing, cloud security,
            SOC-lite monitoring, and incident response — engineered for **impact, speed, and clarity**.
          </p>

          {/* ethical visual cue */}
          <div className="mt-4 inline-flex items-center gap-3 rounded-xl px-4 py-2 border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-black/30 backdrop-blur">
            <Skull className="w-5 h-5 opacity-70" aria-hidden />
            <span className="text-sm">
              Visual icon is illustrative only — our work is{" "}
              <span className="font-semibold">ethical, authorized, and compliant.</span>
            </span>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#services" className="btn btn-primary">View Services</a>
            <a href="#contact" className="btn btn-outline">Talk to Security</a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mt-12">
        <h2 className="h2">What We Secure</h2>
        <p className="p mt-2 max-w-2xl">
          Practical coverage across apps, APIs, infra, and people — with reports that drive fixes, not confusion.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="card"
            >
              <div className="flex items-center gap-3">
                {s.icon}
                <div className="h3">{s.title}</div>
              </div>
              <ul className="p mt-3 list-disc ml-5 space-y-1">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="mt-12">
        <h2 className="h2">Frameworks & Benchmarks</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {compliance.map((c) => (
            <span
              key={c.label}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0f1230] px-4 py-2 text-sm"
            >
              {c.icon}
              {c.label}
            </span>
          ))}
        </div>
      </section>

      {/* PROCESS (pauses between steps visually) */}
      <section className="mt-12">
        <h2 className="h2">How We Work (7 Steps)</h2>
        <div className="relative max-w-4xl mt-8 mx-auto">
          <div className="absolute left-4 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full" />
          <div className="space-y-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: i * (0.2 + s.pause) }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-white dark:bg-[#0f1230] border border-slate-200 dark:border-slate-700 grid place-items-center">
                  {s.icon}
                </div>
                <div className="h3">{s.title}</div>
                <p className="p mt-1">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIERS */}
      <section className="mt-12">
        <h2 className="h2">Security Packages</h2>
        <p className="p mt-2">Transparent starting points — tailored scope after discovery.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {tiers.map((t) => (
            <motion.div
              key={t.name}
              initial={{ scale: 0.97, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden card"
            >
              <div className={`absolute inset-x-0 -top-24 h-40 bg-gradient-to-r ${t.accent} opacity-20 blur-2xl`} />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="h3">{t.name}</div>
                  <Lock className="w-6 h-6 opacity-70" />
                </div>
                <div className="text-3xl font-black mt-2">{t.price}</div>
                <ul className="mt-4 list-disc ml-5 p space-y-1">
                  {t.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <a href="#contact" className="btn btn-primary mt-5 inline-flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  Request Security Assessment
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="h2">FAQ</h2>
        <div className="mt-6 space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="card group">
              <summary className="flex items-center justify-between cursor-pointer">
                <span className="font-semibold">{f.q}</span>
                <span className="opacity-60 group-open:rotate-180 transition">⌄</span>
              </summary>
              <p className="p mt-2">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CONTACT / CTA with expanding thank-you */}
      <section id="contact" className="mt-12">
        <h2 className="h2">Ready to protect your product?</h2>
        <p className="p mt-2">
          Tell us your stack, target(s), and timeline. We’ll confirm authorization and start safely.
        </p>

        <div className="card mt-6">
          {!ctaOpen ? (
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:monecuerinc@gmail.com?subject=Security%20Assessment%20Request&body=Hi%20Monecuer%2C%20please%20assess%20our%20systems.%20Targets%3A%20...%0AAuthorization%3A%20Yes%2FNo%0ATimeline%3A%20...%0AStack%3A%20..."
                className="btn btn-primary inline-flex items-center gap-2"
                onClick={() => setCtaOpen(true)}
              >
                <Mail className="w-4 h-4" />
                Email Security Team
              </a>
              <a
                href="https://wa.me/263782286544?text=Hi%20Monecuer%2C%20I%27d%20like%20a%20security%20assessment"
                target="_blank"
                className="btn btn-outline inline-flex items-center gap-2"
                onClick={() => setCtaOpen(true)}
              >
                <Phone className="w-4 h-4" />
                WhatsApp Security
              </a>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl border border-emerald-300/40 bg-emerald-50 dark:bg-emerald-900/20 p-4"
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <div className="font-semibold">Thank you!</div>
              </div>
              <p className="p mt-1">
                Your request helps us **protect your business and ideas**. We’ll respond with next steps,
                including authorization notes and a safe test plan.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* FOOTER NOTE */}
      <p className="p mt-10 text-sm opacity-70">
        Note: We do not engage in illegal testing. All activity is authorized, documented, and compliant.
      </p>
    </main>
  );
}
