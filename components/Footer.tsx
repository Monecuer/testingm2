import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const socials = [
    { name: "Facebook", icon: <Facebook size={20} />, url: "https://www.facebook.com/people/Monecuer/61579698334797/?rdid=8havLZOG8hjOYoNQ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17GvmyAkGg%2F" },
    { name: "Instagram", icon: <Instagram size={20} />, url: "https://www.monecuer.com/igsh=MXQ2ZTJiZGRsN3U1" },
    { name: "Twitter", icon: <Twitter size={20} />, url: "https://x.com/monecuer31415" },
    { name: "YouTube", icon: <Youtube size={20} />, url: "https://www.youtube.com/@Monecuer" },
  ];

  return (
    <footer className="bg-[#0a0a0a] text-gray-300 border-t border-gray-800 mt-20">
      <div className="container mx-auto px-6 py-10">
        {/* Top section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Left section */}
          <div className="text-center md:text-left max-w-md">
            <img
              src="/logoo.png"
              alt="Monecuer logo"
              className="h-10 mx-auto md:mx-0 mb-4"
            />
            <p className="text-sm leading-relaxed text-gray-400">
              Monecuer engineers advanced software ecosystems where AI, data,
              and design converge to power Africa’s next digital revolution.
            </p>

            {/* Social icons */}
            <div className="flex justify-center md:justify-start gap-4 mt-5">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right section */}
          <div className="text-center md:text-right">
            <ul className="space-y-1 text-sm text-gray-400">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/careers" className="hover:text-white">Careers</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} <strong>Monecuer Inc.</strong> — All rights reserved.
        </div>
      </div>
    </footer>
  );
}
