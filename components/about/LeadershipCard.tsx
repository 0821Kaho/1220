"use client";

import Image from "next/image";
import { Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

interface LeadershipCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
  linkedin: string;
  align: "left" | "right";
}

export function LeadershipCard({
  name,
  role,
  description,
  image,
  linkedin,
  align,
}: LeadershipCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row items-center gap-8 md:gap-16",
        align === "left" && "md:flex-row-reverse"
      )}
    >
      <div className="w-full md:w-1/2">
        <div className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 space-y-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">{name}</h3>
          <p className="text-lg text-neutral-600">{role}</p>
        </div>
        <p className="text-neutral-600 leading-relaxed">{description}</p>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
        >
          <Linkedin className="w-5 h-5 mr-2" />
          Connect on LinkedIn
        </a>
      </div>
    </div>
  );
}