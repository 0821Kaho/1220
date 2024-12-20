"use client";

import { type ReactNode } from "react";

interface HeroContainerProps {
  children: ReactNode;
}

export function HeroContainer({ children }: HeroContainerProps) {
  return (
    <section className="relative bg-black text-white">
      {children}
    </section>
  );
}