"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

// ✨ Dynamically import ProductsClient with shimmer loader
const ProductsClient = dynamic(() => import("./ProductsClient"), {
  ssr: false,
  loading: () => (
    <div className="section container-xl pt-28 pb-20 animate-pulse">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="h-8 w-64 bg-gradient-to-r from-blue-200 via-cyan-100 to-blue-200 rounded mx-auto mb-4"></div>
        <div className="h-4 w-80 bg-gradient-to-r from-blue-100 via-cyan-50 to-blue-100 rounded mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full"></div>
              <div className="h-4 w-32 bg-gray-200 rounded"></div>
            </div>
            <div className="h-3 w-48 bg-gray-200 rounded mb-3"></div>
            <div className="space-y-2">
              <div className="h-3 w-full bg-gray-200 rounded"></div>
              <div className="h-3 w-4/5 bg-gray-200 rounded"></div>
              <div className="h-3 w-3/5 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
});

export default function Page() {
  return (
    <>
      <Navbar />
      <ProductsClient />
      <Footer />
    </>
  );
}
