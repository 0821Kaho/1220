"use client";

import { BackgroundVideo } from '@/components/video/BackgroundVideo';
import { VIDEO_PATHS } from '@/lib/config/video';

export function HeroVideo() {
  return (
    <div className="relative h-screen w-full">
      {/* 背景動画 */}
      <video
        autoPlay // 自動再生
        muted // ミュート（必須）
        loop // ループ再生
        playsInline // インライン再生
        preload="auto" // 動画を事前ロード
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      >
        <source src={VIDEO_PATHS.HERO.SKYTREE} type="video/mp4" />
      </video>
    </div>
  );
}