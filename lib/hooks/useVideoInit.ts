"use client";

import { useEffect, useRef, useCallback } from 'react';
import { VIDEO_CONFIG } from '@/lib/config/video';

export function useVideoInit() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mountedRef = useRef(true);

  const initializeVideo = useCallback(async () => {
    const video = videoRef.current;
    if (!video || !mountedRef.current) return;

    try {
      video.playbackRate = VIDEO_CONFIG.PLAYBACK_RATE;
      if (video.paused) {
        await video.play();
      }
    } catch (error) {
      if (error instanceof Error && error.name !== 'AbortError' && mountedRef.current) {
        console.error('Video initialization error:', error.message);
        // Retry initialization after delay if not aborted and still mounted
        setTimeout(() => initializeVideo(), VIDEO_CONFIG.RETRY_DELAY);
      }
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVisibilityChange = () => {
      if (!document.hidden && mountedRef.current) {
        initializeVideo();
      }
    };

    const handleLoadedData = () => {
      if (mountedRef.current) {
        initializeVideo();
      }
    };

    video.addEventListener('loadeddata', handleLoadedData);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      mountedRef.current = false;
      video.removeEventListener('loadeddata', handleLoadedData);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      
      // Ensure video is paused on cleanup
      if (!video.paused) {
        video.pause();
      }
    };
  }, [initializeVideo]);

  return videoRef;
}