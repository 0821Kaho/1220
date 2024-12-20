"use client";

import { useEffect, RefObject } from 'react';

interface VideoEventListenersProps {
  videoRef: RefObject<HTMLVideoElement>;
  mountedRef: RefObject<boolean>;
  onInitialize: () => Promise<void>;
}

export function useVideoEventListeners({
  videoRef,
  mountedRef,
  onInitialize
}: VideoEventListenersProps) {
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVisibilityChange = () => {
      if (!document.hidden && mountedRef.current) {
        onInitialize();
      }
    };

    const handleLoadedData = () => {
      if (mountedRef.current) {
        onInitialize();
      }
    };

    video.addEventListener('loadeddata', handleLoadedData);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [videoRef, mountedRef, onInitialize]);
}