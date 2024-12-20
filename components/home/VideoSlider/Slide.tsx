"use client";

import { useVideoPlayback } from '@/lib/hooks/video/useVideoPlayback';
import { cn } from '@/lib/utils';

interface SlideProps {
  videoSrc: string;
  headline: {
    verb: string;
    rest: string;
  };
  verbColor: string;
  textColor: string;
  isActive: boolean;
  isMuted: boolean;
}

export function Slide({ 
  videoSrc, 
  headline, 
  verbColor, 
  textColor, 
  isActive, 
  isMuted 
}: SlideProps) {
  const videoRef = useVideoPlayback(isActive, isMuted);

  return (
    <div className={cn(
      "absolute inset-0 transition-opacity duration-1000",
      isActive ? "opacity-100 z-10" : "opacity-0 z-0"
    )}>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        loop
        playsInline
        preload="auto"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />
      
      <div className="absolute inset-0 flex items-center">
        <div className="w-full max-w-[90%] md:max-w-[80%] pl-8 md:pl-16 lg:pl-24">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span 
              className="block mb-2 transition-transform duration-700 transform"
              style={{ color: verbColor }}
            >
              {headline.verb}
            </span>
            <span 
              className="block"
              style={{ color: textColor }}
            >
              {headline.rest}
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}