"use client";

import { InfoCard } from "./InfoCard";
import type { InfoItem } from "@/lib/companyInfo";

interface InfoCardGridProps {
  items: InfoItem[];
}

export function InfoCardGrid({ items }: InfoCardGridProps) {
  return (
    <div className="grid gap-3">
      {items.map((item, index) => (
        <InfoCard 
          key={index} 
          {...item}
        />
      ))}
    </div>
  );
}