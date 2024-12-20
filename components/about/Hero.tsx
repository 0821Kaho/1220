"use client";

import { HeroContainer } from "./hero/HeroContainer";
import { HeroContent } from "./hero/HeroContent";
import { HeroVideo } from "./hero/HeroVideo";

export function Hero() {
  return (
    <HeroContainer>
      <HeroVideo />
      <HeroContent />
    </HeroContainer>
  );
}