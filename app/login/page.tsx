import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata = { title: "Login — Monecuer Inc." };
export default function Page() {
  return (<>
    <Navbar />
    <main className="section container-xl pt-28">
      <h1 className='h1'>Login</h1><p className='p mt-4'>Optional gated area for future use.</p>
    </main>
    <Footer />
  </>);
}
