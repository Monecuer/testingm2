// app/academy/certificate/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";

export default function CertificateVerifyPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <main className="container mx-auto px-6 py-20 max-w-xl text-center">
      <h1 className="text-2xl sm:text-3xl font-bold mb-3">
        Monecuer Academy Certificate Verification
      </h1>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6">
        Certificate ID:
      </p>
      <code className="px-3 py-2 rounded bg-gray-200 dark:bg-gray-800 break-all">
        {id}
      </code>
      <p className="mt-6 text-sm text-gray-500">
        For full verification details, this certificate should be checked against
        Monecuer Academy records.
      </p>
    </main>
  );
}
