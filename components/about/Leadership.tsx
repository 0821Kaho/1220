"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslationContext } from "@/app/TranslationProvider";
import { TranslatedText } from "@/components/TranslatedText";
import { LeadershipModal } from "./LeadershipModal";
import { PALETTE } from "@/lib/constants/colors/palette";

const leaders = [
  {
    name: "Kaho Satoyoshi",
    role: "CEO",
    description: "里吉は、すべての人が情報、教育、機会に平等にアクセスできる世界の実現を目指しています。幼少期に、多くの学生が家庭の事情や経済的な理由で進学を断念せざるを得ない現実を目の当たりにしたことから、教育と機会の不平等に取り組む決意を固めました。マーケティングの豊富な経験と、独学で培ったプログラミングへの情熱を活かし、里吉は創造性と戦略を融合させ、社会に影響を与えるプロジェクトをリードしています。",
    image: "/images/Kaho Satoyoshi.jpg",
    linkedin: "https://linkedin.com/in/kaho-satoyoshi",
  },
  {
    name: "Eddy Castaneda",
    role: "CTO",
    description: "エディ・カスタネダは、当社の技術革新を牽引する優れたリーダーです。エンジニアリングとスケーラブルなソリューションに関する深い専門知識を持ち、使いやすく将来性のあるプラットフォームの開発を主導しています。ディズニーでの経験を通じて培ったエンターテイメントテクノロジーの幅広い知見を活かし、エディは創造的で魅力的、かつ最先端のソリューションを提供しています。彼の指揮のもと、当社は技術革新を続け、ユーザーニーズに応える革新的なプロダクトの開発に取り組んでいます。",
    image: "/images/Eddy Castaneda.jpg",
    linkedin: "https://linkedin.com/in/eddy-castaneda",
  },
];

export function Leadership() {
  const { language } = useTranslationContext();
  const [selectedLeader, setSelectedLeader] = useState<typeof leaders[0] | null>(null);

  return (
    <section className="py-32 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 
          className="text-4xl font-bold mb-24 hover:scale-105 transition-transform text-center"
          style={{ color: PALETTE.PALE_BLUE_WHITE }}
        >
          <TranslatedText text="Our Team" lang={language} />
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {leaders.map((leader, index) => (
            <div 
              key={index}
              className="text-center cursor-pointer group"
              onClick={() => setSelectedLeader(leader)}
            >
              <div className="relative w-full max-w-[300px] mx-auto">
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                    priority={true}
                    quality={100}
                    style={{ objectPosition: leader.name === "Kaho Satoyoshi" ? '50% 30%' : '50% 20%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
              <h3 
                className="text-xl font-bold mt-6 mb-2 group-hover:opacity-80 transition-colors"
                style={{ color: PALETTE.PALE_BLUE_WHITE }}
              >
                {language === 'ja' ? 
                  (leader.name === "Kaho Satoyoshi" ? "里吉 夏帆" : "エディ・カスタネダ") : 
                  leader.name
                }
              </h3>
              <p style={{ color: `${PALETTE.PALE_BLUE_WHITE}CC` }}>
                {language === 'ja' ? 
                  (leader.role === "CEO" ? "最高経営責任者（CEO）" : "最高技術責任者（CTO）") : 
                  leader.role
                }
              </p>
            </div>
          ))}
        </div>
      </div>
      {selectedLeader && (
        <LeadershipModal
          leader={selectedLeader}
          onClose={() => setSelectedLeader(null)}
        />
      )}
    </section>
  );
}