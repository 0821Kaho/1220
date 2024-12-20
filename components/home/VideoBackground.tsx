"use client";

import { useVideoBackground } from "@/lib/hooks/useVideoBackground";

interface VideoBackgroundProps {
  src: string;
}

export function VideoBackground({ src }: VideoBackgroundProps) {
  const videoRef = useVideoBackground();

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="video-background"
      >
        <source 
          src={src} 
          type="video/mp4"
        />
      </video>
      <div className="video-overlay" />
    </>
  );
}