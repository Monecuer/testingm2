"use client";

import { useParams } from "next/navigation";

export default function PrivateAccess() {
  const params = useParams();
  const { token } = params;

  return (
    <main className="container mx-auto px-6 py-24 text-center">
      <h1 className="text-xl sm:text-3xl font-bold mb-3">Welcome to Your Course Access</h1>
      <p className="text-gray-600 text-sm sm:text-base">
        Your private access link is securely authorized.
      </p>

      <div className="mt-6 text-left max-w-md mx-auto">
        <p>Your Access Token:</p>
        <code className="bg-gray-200 dark:bg-gray-800 p-2 rounded block mt-2">
          {token}
        </code>
      </div>
    </main>
  );
}
