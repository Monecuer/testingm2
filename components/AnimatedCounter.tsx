"use client";
import { useEffect, useState } from "react";

export default function AnimatedCounter({ end, duration=1200, label }:{ end:number, duration?:number, label:string }){
  const [value, setValue] = useState(0);
  useEffect(()=>{
    const start = performance.now();
    const step = (now:number)=>{
      const p = Math.min(1, (now - start)/duration);
      setValue(Math.floor(end * p));
      if(p<1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  },[end,duration]);
  return (
    <div className="card text-center">
      <div className="text-4xl font-black">{value.toLocaleString()}</div>
      <div className="mt-1 text-sm opacity-70">{label}</div>
    </div>
  );
}
