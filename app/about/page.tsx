"use client";

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/about/Hero";
import { Mission } from "@/components/about/Mission";
import { WhatWeDo } from "@/components/about/WhatWeDo";
import { Leadership } from "@/components/about/Leadership";
import { CompanyInfo } from "@/components/about/CompanyInfo";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Mission />
      <WhatWeDo />
      <Leadership />
      <CompanyInfo />
    </main>
  );
}