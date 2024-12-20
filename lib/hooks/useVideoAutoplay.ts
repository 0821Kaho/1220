import { useEffect, useRef } from 'react';

export function useVideoAutoplay() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const playVideo = async () => {
        try {
          await videoRef.current?.play();
        } catch (error) {
          console.log("Video autoplay failed:", error);
        }
      };

      playVideo();
    }
  }, []);

  return videoRef;
}