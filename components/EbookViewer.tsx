// components/EbookViewer.tsx
"use client";

import { FileText, Download } from "lucide-react";
import Image from "next/image";

export default function EbookViewer({ ebooks }: { ebooks: any[] }) {
  return (
    <section className="mt-10 grid sm:grid-cols-2 gap-6">
      {ebooks.map((book, i) => (
        <div
          key={i}
          className="border rounded-lg p-4 bg-white dark:bg-gray-900 shadow-sm"
        >
          <FileText className="text-blue-600 mb-2" size={22} />
          <h3 className="font-semibold text-sm sm:text-base">{book.title}</h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
            {book.description}
          </p>
          <a
            href={book.href}
            target="_blank"
            className="mt-3 inline-flex items-center gap-2 text-blue-600 text-xs sm:text-sm font-medium"
          >
            <Download size={16} /> Download PDF
          </a>
        </div>
      ))}
    </section>
  );
}
