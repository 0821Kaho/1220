"use client";

import { useRef, useEffect } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // 動画再生を試みる
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => {
          console.log("Video playback started");
        })
        .catch((error) => {
          console.error("Video playback failed:", error);
        });
    }
  }, []);

  return (
    <div className="relative h-screen w-full">
      {/* 背景動画 */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/videos/SkyTree.mp4" type="video/mp4" />
      </video>

      {/* グラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20" />

      {/* 見出しコンテンツ */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold text-center">
          Empowering Education Through Innovation
        </h1>
      </div>
    </div>
  );
}