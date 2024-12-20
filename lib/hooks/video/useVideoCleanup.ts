"use client";

import { useEffect, RefObject } from 'react';

export function useVideoCleanup(
  videoRef: RefObject<HTMLVideoElement>,
  mountedRef: RefObject<boolean>
) {
  useEffect(() => {
    return () => {
      mountedRef.current = false;
      const video = videoRef.current;
      
      if (video && !video.paused) {
        video.pause();
      }
    };
  }, [videoRef, mountedRef]);
}