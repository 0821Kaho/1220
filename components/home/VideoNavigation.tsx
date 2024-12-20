"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface VideoNavigationProps {
  onPrev: () => void;
  onNext: () => void;
}

export function VideoNavigation({ onPrev, onNext }: VideoNavigationProps) {
  return (
    <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
      <button
        onClick={onPrev}
        className="group"
        aria-label="Previous slide"
      >
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm border border-white/20 
                        transition-all duration-300 group-hover:scale-110 group-hover:bg-black/40" />
          <ChevronLeft className="w-6 h-6 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </button>
      <button
        onClick={onNext}
        className="group"
        aria-label="Next slide"
      >
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm border border-white/20 
                        transition-all duration-300 group-hover:scale-110 group-hover:bg-black/40" />
          <ChevronRight className="w-6 h-6 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </button>
    </div>
  );
}