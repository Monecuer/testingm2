// components/CertificateSection.tsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CertificateSection({ course }: any) {
  const [data, setData] = useState<any>(null);

  async function generateCertificate() {
    const res = await fetch("/api/certificate", {
      method: "POST",
      body: JSON.stringify({
        name: data?.name,
        email: data?.email,
        course,
      }),
    });
    const result = await res.json();
    setData(result);
  }

  return (
    <div className="mt-12 p-6 border rounded-lg shadow-sm">
      <h3 className="text-lg font-bold mb-3">Get Your Certificate</h3>
      {!data?.qrCode && (
        <div className="space-y-3">
          <input placeholder="Your Full Name" className="input" onChange={(e) => setData({ ...data, name: e.target.value })} />
          <input placeholder="Your Email" className="input" onChange={(e) => setData({ ...data, email: e.target.value })} />
          <button onClick={generateCertificate} className="btn-primary">Generate Certificate</button>
        </div>
      )}

      {data?.qrCode && (
        <>
          <p>Certificate ID: {data.certId}</p>
          <Image src={data.qrCode} alt="QR Code" width={120} height={120} />
          <a href={data.downloadUrl} className="btn-primary mt-4">Download PDF</a>
        </>
      )}
    </div>
  );
}
