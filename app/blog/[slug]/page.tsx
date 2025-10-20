import PostClient from "./PostClient";

const posts = {
  "why-speed-wins": {
    title: "Why Speed Wins: Shipping in Weeks, Not Months",
    date: "2025-09-01",
    content: `
At **Monecuer Inc.**, speed isn’t chaos — it’s strategy. 
We build products in weeks, not months, through laser-focused collaboration, modular design, and relentless iteration.  

**Speed wins** because momentum compounds — every shipped feature teaches us something faster than planning ever could.`,
  },
  "designing-trust": {
    title: "Designing Trust: Security as a Feature",
    date: "2025-08-18",
    content: `
Security isn’t a checkbox. It’s a design principle.  
At **Monecuer**, every product begins with trust — not as a layer, but as the foundation.  
We believe security is not only protection, but *empowerment* — enabling people to grow confidently in a digital world.`,
  },
  "mvp-to-scale": {
    title: "From MVP to Scale: A Practical Playbook",
    date: "2025-07-22",
    content: `
Building a minimum viable product (MVP) is step one — but scaling it to serve millions takes discipline.  
At **Monecuer**, we’ve built our internal playbook around:  
- Modular architecture  
- Real-time observability  
- AI-driven optimization`,
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
const post = (posts as Record<string, { title: string; date: string; content: string }>)[params.slug];
  return {
    title: post ? `${post.title} — Monecuer Insights` : "Monecuer Blog",
    description: post
      ? post.content.replace(/\n/g, " ").slice(0, 160)
      : "Read insights and innovation stories from Monecuer Inc.",
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = (posts as Record<string, { title: string; date: string; content: string }>)[params.slug];
  return <PostClient post={post} />;
}
