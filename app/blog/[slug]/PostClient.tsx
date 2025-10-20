"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PostClient({ post }: { post?: { title: string; date: string; content: string } }) {
  if (!post)
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex flex-col items-center justify-center text-center p-10">
          <h1 className="h2 mb-2">Post Not Found</h1>
          <p className="p mb-4">
            The article you’re looking for might have been moved or renamed.
          </p>
          <Link href="/blog" className="btn btn-primary">
            Back to Insights
          </Link>
        </main>
        <Footer />
      </>
    );

  return (
    <>
      <Navbar />
      <main className="section container-xl pt-28 max-w-3xl mx-auto">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-cyan-400 mb-8 hover:underline"
        >
          <ArrowLeft size={18} /> Back to Insights
        </Link>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="h1 mb-3"
        >
          {post.title}
        </motion.h1>

        <div className="text-sm opacity-70 mb-8">{post.date}</div>

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose dark:prose-invert max-w-none leading-relaxed text-lg"
        >
          <div
            dangerouslySetInnerHTML={{
              __html: post.content
                .replace(/\n/g, "<br/>")
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
            }}
          />
        </motion.article>
      </main>
      <Footer />
    </>
  );
}
