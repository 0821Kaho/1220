import { useEffect, useRef, useCallback } from 'react';

export function useVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const initializeVideo = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      video.playbackRate = 0.8; // Slightly slower playback for better visual effect
      if (video.paused) {
        await video.play();
      }
    } catch (error) {
      console.error("Video initialization failed:", error);
      // Retry after a delay
      setTimeout(() => initializeVideo(), 1000);
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else {
        initializeVideo();
      }
    };

    const handleLoadedData = () => {
      initializeVideo();
    };

    video.addEventListener('loadeddata', handleLoadedData);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [initializeVideo]);

  return videoRef;
}