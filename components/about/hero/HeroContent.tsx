"use client";

import { HeroHeadline } from "./HeroHeadline";
import { HeroSubtext } from "./HeroSubtext";

export function HeroContent() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 flex flex-col justify-center min-h-[80vh]">
        <div className="space-y-[8vh] sm:space-y-[10vh] md:space-y-[12vh] pl-0 md:pl-24">
          <HeroHeadline />
          <HeroSubtext />
        </div>
      </div>
    </div>
  );
}