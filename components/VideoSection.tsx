"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface VideoSectionProps {
  videoSrc: string;
  headline: string;
  subtext: string;
  priority?: boolean;
}

export function VideoSection({
  videoSrc,
  headline,
  subtext,
  priority = false,
}: VideoSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0", "translate-y-4");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        preload={priority ? "auto" : "metadata"}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto transition-all duration-700 opacity-0 translate-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            {headline}
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            {subtext}
          </p>
        </div>
      </div>
    </section>
  );
}