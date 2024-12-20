"use client";

import { GraduationCap, BarChart2, FileCheck, Megaphone } from "lucide-react";
import { useTranslationContext } from "@/app/TranslationProvider";
import { TranslatedText } from "@/components/TranslatedText";
import { PALETTE } from "@/lib/constants/colors/palette";

const ROYAL_BLUE = "#4169E1";

const services = [
  {
    title: "Access to Education",
    description: "We provide students worldwide with access to high-demand, world-class content and specialized programs through a subscription-based model and flexible payment options.",
    icon: GraduationCap
  },
  {
    title: "Data-Driven Learning Support",
    description: "By leveraging learning data, we help students make informed decisions about courses and majors, reducing the risk of mismatched career paths and ensuring meaningful learning outcomes.",
    icon: BarChart2
  },
  {
    title: "Content Licensing",
    description: "We partner with universities and educational institutions to license underutilized flagship programs and niche content, helping them expand their reach and monetize valuable educational resources.",
    icon: FileCheck
  },
  {
    title: "Marketing and Development Contracting",
    description: "We offer marketing and development contracting services to support organizations in achieving their strategic goals, including outreach, platform development, and implementation of innovative educational solutions.",
    icon: Megaphone
  }
];

export function WhatWeDo() {
  const { language } = useTranslationContext();

  return (
    <section className="py-32 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 
          className="text-4xl font-bold mb-24 hover:scale-105 transition-transform text-center"
          style={{ color: PALETTE.PALE_BLUE_WHITE }}
        >
          <TranslatedText text="What We Do" lang={language} />
        </h2>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="flex flex-col items-center mb-6">
                <div 
                  className="p-6 rounded-2xl transition-all duration-300 group-hover:scale-110 mb-4"
                  style={{ 
                    backgroundColor: `${ROYAL_BLUE}1A`, // 10% opacity
                    border: `1px solid ${ROYAL_BLUE}33` // 20% opacity
                  }}
                >
                  <service.icon 
                    className="w-12 h-12"
                    style={{ color: ROYAL_BLUE }}
                  />
                </div>
                <h3 
                  className="text-xl font-bold transition-colors cursor-pointer relative inline-block"
                  style={{ color: PALETTE.PALE_BLUE_WHITE }}
                >
                  <TranslatedText text={service.title} lang={language} />
                  <span 
                    className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-500 group-hover:w-full"
                    style={{ backgroundColor: ROYAL_BLUE }}
                  ></span>
                </h3>
              </div>
              <p 
                className="leading-relaxed text-left"
                style={{ color: `${PALETTE.PALE_BLUE_WHITE}CC` }}
              >
                <TranslatedText text={service.description} lang={language} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}