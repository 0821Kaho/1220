"use client";

import { useRef, useCallback, useEffect } from 'react';
import { VIDEO_CONFIG } from '@/lib/config/video';

export function useVideoInit() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mountedRef = useRef(true);
  const initializingRef = useRef(false);

  const initializeVideo = useCallback(async () => {
    const video = videoRef.current;
    if (!video || !mountedRef.current || initializingRef.current) return;

    try {
      initializingRef.current = true;
      video.playbackRate = VIDEO_CONFIG.PLAYBACK_RATE;
      
      // Only attempt to play if the video is paused and not at the end
      if (video.paused && video.currentTime < video.duration) {
        await video.play();
      }
    } catch (error) {
      // Only log errors that aren't related to normal interruptions
      if (error instanceof Error && 
          error.name !== 'AbortError' && 
          mountedRef.current) {
        console.error('Video initialization error:', error.message);
        setTimeout(() => {
          if (mountedRef.current) {
            initializeVideo();
          }
        }, VIDEO_CONFIG.RETRY_DELAY);
      }
    } finally {
      initializingRef.current = false;
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
      
      // Clean up event listeners
      video.removeEventListener('loadeddata', handleLoadedData);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      
      // Ensure video is properly stopped
      if (video && !video.paused) {
        // Use try-catch to handle any potential errors during cleanup
        try {
          video.pause();
          video.currentTime = 0;
        } catch (error) {
          // Ignore cleanup errors
        }
      }
    };
  }, [initializeVideo]);

  return videoRef;
}