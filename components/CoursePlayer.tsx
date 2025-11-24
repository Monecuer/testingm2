// components/CoursePlayer.tsx
"use client";

import { useState } from "react";
import { PlayCircle } from "lucide-react";

type Video = {
  id: string;
  title: string;
  level: string;
};

export default function CoursePlayer({ videos }: { videos: Video[] }) {
  const [current, setCurrent] = useState<Video | null>(videos[0] || null);

  if (!current) return null;

  return (
    <section className="mt-8 grid gap-4 md:grid-cols-[2fr,1fr]">
      {/* Main Player */}
      <div className="rounded-lg overflow-hidden border bg-black">
        <div className="relative w-full aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${current.id}`}
            title={current.title}
            className="w-full h-full"
            allowFullScreen
          />
        </div>
        <div className="p-3 sm:p-4">
          <h2 className="font-semibold text-sm sm:text-base">
            {current.title}
          </h2>
          <p className="text-xs text-gray-500 mt-1">{current.level}</p>
        </div>
      </div>

      {/* Playlist */}
      <div className="border rounded-lg p-3 sm:p-4 bg-white dark:bg-gray-900">
        <h3 className="font-semibold text-sm sm:text-base mb-3">
          Lesson Playlist
        </h3>
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {videos.map((v) => (
            <button
              key={v.id}
              onClick={() => setCurrent(v)}
              className={`w-full flex items-center gap-2 p-2 rounded text-xs sm:text-sm text-left border 
                ${
                  current.id === v.id
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30"
                    : "border-transparent hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
            >
              <PlayCircle className="w-4 h-4 shrink-0" />
              <div className="flex flex-col">
                <span className="font-medium">{v.title}</span>
                <span className="text-[10px] text-gray-500">{v.level}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
