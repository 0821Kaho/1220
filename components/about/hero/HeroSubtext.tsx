"use client";

import { cn } from "@/lib/utils";
import { Divider } from "./Divider";
import { SubtextContent } from "./SubtextContent";

export function HeroSubtext() {
  return (
    <div className="space-y-4 sm:space-y-6 md:space-y-8">
      <Divider />
      <SubtextContent />
    </div>
  );
}