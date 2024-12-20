import { useEffect, useRef, useCallback } from 'react';

export function useVideoPlayback() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const playVideo = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (video.paused) {
        await video.play();
      }
    } catch (error) {
      console.error("Video playback failed:", error);
      // Only retry if the video element still exists and the error wasn't due to removal
      if (videoRef.current && error.name !== "AbortError") {
        setTimeout(() => playVideo(), 1000);
      }
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVisibilityChange = () => {
      if (!document.hidden && video) {
        playVideo();
      }
    };

    const handleLoadedData = () => {
      playVideo();
    };

    video.addEventListener('loadeddata', handleLoadedData);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [playVideo]);

  return videoRef;
}