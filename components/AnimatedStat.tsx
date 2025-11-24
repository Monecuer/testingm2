"use client";

import { useEffect, useState } from "react";

export default function AnimatedStat({ value }: { value: number }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!value) return;
    let start = 0;
    const end = parseInt(value.toString().replace(/,/g, ""));
    if (!end || isNaN(end)) return;

    const increment = end / 60; // Smooth transition ~2 seconds

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setDisplay(Math.floor(start));
    }, 30);
  }, [value]);

  return <span>{display.toLocaleString()}</span>;
}
