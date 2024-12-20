"use client";

import { useVideoInit } from '@/lib/hooks/useVideoInit';
import { cn } from '@/lib/utils';

interface BackgroundVideoProps {
  src: string;
  className?: string;
  overlayClassName?: string;
  priority?: boolean;
}

export function BackgroundVideo({ 
  src, 
  className,
  overlayClassName,
  priority = false
}: BackgroundVideoProps) {
  const videoRef = useVideoInit();

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className={cn(
          "absolute inset-0 h-full w-full object-cover",
          "transform-gpu", // Hardware acceleration
          "will-change-transform", // Optimize performance
          className
        )}
        preload={priority ? "auto" : "metadata"}
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className={cn(
        "absolute inset-0",
        "transition-opacity duration-300",
        overlayClassName
      )} />
    </>
  );
}