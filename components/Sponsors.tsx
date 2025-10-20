"use client";

export default function Sponsors() {
  const sponsors = [
    {
      name: "The263Fx",
      logo: "/the263fx-logo.png",
      url: "https://the263fx.com",
    },
    {
      name: "Monecuer Inc.",
      logo: "/logoo.png",
      url: "https://monecuer.com",
    },
    {
      name: "Digital Marketers Africa",
      logo: "/david.png",
      url: "https://africapraise.com",
    },
    {
      name: "Africa Praise Choir",
      logo: "/africapraise-logo.png",
      url: "https://africapraise.com",
    },
  ];

  // duplicate for seamless loop
  const repeated = [...sponsors, ...sponsors];

  return (
    <section className="relative card overflow-hidden py-8">
      <h2 className="font-bold mb-6 text-center text-lg text-gray-800">
        Trusted by Partners & Sponsors
      </h2>

      {/* fade edges for cinematic effect */}
      <div className="pointer-events-none absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10" />

      {/* scrolling container */}
      <div className="overflow-hidden">
        <div className="flex animate-scrollUltraSmooth gap-16 items-center min-w-full">
          {repeated.map((s, i) => (
            <a
              key={i}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              title={s.name}
              className="flex-shrink-0 hover:scale-110 transition-transform duration-300"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/80 backdrop-blur-md shadow-md flex items-center justify-center border border-gray-200 overflow-hidden">
                <img
                  src={s.logo}
                  alt={`${s.name} logo`}
                  className={`w-10 sm:w-12 h-10 sm:h-12 object-contain rounded-full opacity-80 hover:opacity-100 ${
                    s.name === "The263Fx" ? "scale-90" : ""
                  }`}
                />
              </div>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollUltraSmooth {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scrollUltraSmooth {
          animation: scrollUltraSmooth 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
