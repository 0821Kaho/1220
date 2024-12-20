"use client";

import Image from "next/image";
import { Linkedin, X } from "lucide-react";
import { useTranslationContext } from "@/app/TranslationProvider";
import { TranslatedText } from "@/components/TranslatedText";

interface LeadershipModalProps {
  leader: {
    name: string;
    role: string;
    description: string;
    image: string;
    linkedin: string;
  };
  onClose: () => void;
}

export function LeadershipModal({ leader, onClose }: LeadershipModalProps) {
  const { language } = useTranslationContext();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
      <div className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-700 transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-[4/5] md:aspect-auto">
            <Image
              src={leader.image}
              alt={leader.name}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={95}
              priority
            />
          </div>
          <div className="p-8 space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                <TranslatedText text={leader.name} lang={language} />
              </h3>
              <p className="text-neutral-600">
                <TranslatedText text={leader.role} lang={language} />
              </p>
            </div>
            <p className="text-neutral-600 leading-relaxed">
              <TranslatedText text={leader.description} lang={language} />
            </p>
            <a
              href={leader.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              <TranslatedText text="Connect on LinkedIn" lang={language} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}