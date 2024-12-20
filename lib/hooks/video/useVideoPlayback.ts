"use client";

import { useEffect, useRef, useCallback } from 'react';

interface VideoPlaybackState {
  isPlaying: boolean;
  hasStarted: boolean;
  hasEnded: boolean;
  isInitializing: boolean;
}

export function useVideoPlayback(isActive: boolean, isMuted: boolean) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const stateRef = useRef<VideoPlaybackState>({
    isPlaying: false,
    hasStarted: false,
    hasEnded: false,
    isInitializing: false
  });

  const initializeVideo = useCallback(async () => {
    const video = videoRef.current;
    if (!video || stateRef.current.isInitializing) return;

    try {
      stateRef.current.isInitializing = true;
      video.muted = isMuted;
      
      if (isActive && video.paused) {
        video.currentTime = 0;
        stateRef.current.hasStarted = true;
        
        // Only attempt to play if we're still active and mounted
        if (isActive) {
          const playPromise = video.play();
          if (playPromise !== undefined) {
            await playPromise;
            stateRef.current.isPlaying = true;
          }
        }
      } else if (!isActive && !video.paused) {
        video.pause();
        video.currentTime = 0;
        stateRef.current.isPlaying = false;
      }
    } catch (error) {
      if (error instanceof Error && error.name !== 'AbortError') {
        console.error('Video playback error:', error);
      }
    } finally {
      stateRef.current.isInitializing = false;
    }
  }, [isActive, isMuted]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      stateRef.current.hasEnded = true;
      if (isActive && !stateRef.current.isInitializing) {
        video.currentTime = 0;
        video.play().catch(() => {
          // Ignore play errors on ended event
        });
      }
    };

    const handlePlay = () => {
      stateRef.current.isPlaying = true;
    };

    const handlePause = () => {
      stateRef.current.isPlaying = false;
    };

    video.addEventListener('ended', handleEnded);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    // Initialize video after setting up event listeners
    initializeVideo();

    return () => {
      // Clean up event listeners
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      
      // Ensure video is properly stopped
      if (!video.paused) {
        try {
          video.pause();
          video.currentTime = 0;
        } catch (error) {
          // Ignore cleanup errors
        }
      }
    };
  }, [initializeVideo, isActive]);

  return videoRef;
}