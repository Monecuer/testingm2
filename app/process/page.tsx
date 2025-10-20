// ✅ Keep metadata at top (server-side)
export const metadata = { title: "Process — Monecuer Inc." };

// ✅ Then move the client logic into a nested component
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientProcess from "./ProcessClient";

export default function Page() {
  return (
    <>
      <Navbar />
      <ClientProcess />
      <Footer />
    </>
  );
}
