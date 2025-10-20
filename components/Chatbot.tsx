"use client";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, Mic } from "lucide-react";

// 🧠 Long-form Monecuer AI narrative logic
const responses: { q: RegExp; a: string }[] = [
  { q: /hello|hi/i, a: "Hello! I’m the Monecuer Assistant — here to guide you through our world of innovation." },
  { q: /who|about/i, a: "Monecuer engineers advanced software ecosystems where AI, data, and design converge — born in Zimbabwe, scaling globally." },
  { q: /mission/i, a: "Our mission is to build Africa’s next-generation digital ecosystem — connected, intelligent, and human-centered." },
  { q: /services|solutions/i, a: "We build Websites, Apps, AI systems, POS software, SaaS platforms, and Cloud setups — all made for speed, security, and scale." },
  { q: /vision/i, a: "To make Africa a global powerhouse in software and artificial intelligence — from local innovation to world-class impact." },
  { q: /founder/i, a: "Founded by a visionary young African engineer, Monecuer is a movement of innovation, courage, and excellence." },
  { q: /contact|reach/i, a: "You can reach us at monecuerinc@gmail.com or WhatsApp +263782286544 — we respond fast." },
  { q: /thanks|bye/i, a: "Thank you for connecting with Monecuer. Keep building the future with us." },
];

function replyTo(input: string): string {
  for (const f of responses) if (f.q.test(input)) return f.a;
  return "I’m here to answer questions about Monecuer — our products, mission, or opportunities. Ask me anything.";
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [log, setLog] = useState<{ role: "user" | "bot"; text: string }[]>([
    { role: "bot", text: "Welcome to Monecuer Everywhere — how can I help?" },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [log]);

  function speak(text: string) {
    try {
      const msg = new SpeechSynthesisUtterance(text);
      msg.rate = 1;
      msg.pitch = 1;
      window.speechSynthesis.speak(msg);
    } catch {
      console.log("Speech not supported.");
    }
  }

  function startListening() {
    const SR = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    if (!SR) return alert("Speech recognition not supported in this browser.");
    const rec = new SR();
    rec.lang = "en-US";
    rec.onresult = (e: any) => setInput(e.results[0][0].transcript);
    rec.start();
  }

  async function onSend() {
    if (!input.trim()) return;
    const userText = input.trim();
    setLog((l) => [...l, { role: "user", text: userText }]);
    setInput("");
    const answer = replyTo(userText);
    setTimeout(() => {
      setLog((l) => [...l, { role: "bot", text: answer }]);
      speak(answer);
    }, 500);
  }

  return (
    <>
      {/* 💬 Floating Chat Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-xl transition-all duration-300"
        aria-label="Open Chatbot"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* 💬 Chat Modal */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 flex items-end md:items-center justify-center p-4 z-50"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-md bg-white dark:bg-[#0f1230] rounded-2xl p-5 flex flex-col shadow-2xl border border-slate-200 dark:border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="font-bold text-lg border-b border-slate-200 dark:border-slate-700 pb-2">
              Monecuer Assistant
            </div>

            <div className="mt-3 space-y-2 max-h-80 overflow-auto pr-2">
              {log.map((m, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-xl text-sm ${
                    m.role === "user"
                      ? "bg-blue-600 text-white self-end ml-16"
                      : "bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-gray-100 mr-16"
                  }`}
                >
                  {m.text}
                </div>
              ))}
              <div ref={endRef} />
            </div>

            <div className="mt-4 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 bg-transparent text-sm"
              />
              <button
                onClick={onSend}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl"
              >
                <Send size={16} />
              </button>
              <button
                onClick={startListening}
                className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <Mic size={16} />
              </button>
            </div>

            <div className="text-xs mt-3 text-center text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} Monecuer Inc. | Engineering Digital Transformation
            </div>
          </div>
        </div>
      )}
    </>
  );
}
