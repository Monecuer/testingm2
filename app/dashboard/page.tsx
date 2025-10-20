import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata = { title: "Dashboard — Monecuer Inc." };
export default function Page() {
  return (<>
    <Navbar />
    <main className="section container-xl pt-28">
      <h1 className='h1'>Client Dashboard</h1><p className='p mt-4'>Placeholder dashboard — add modules later.</p>
    </main>
    <Footer />
  </>);
}
