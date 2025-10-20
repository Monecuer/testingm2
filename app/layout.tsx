import "./globals.css";
import { ReactNode } from "react";
import Chatbot from "@/components/Chatbot";

export const metadata = {
  title: "Monecuer Inc. — Engineering Digital Transformation",
  description: "Websites • Apps • AI • POS • Cloud",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
        <Chatbot /> {/* ✅ Floating chat icon visible on every page */}
      </body>
    </html>
  );
}
