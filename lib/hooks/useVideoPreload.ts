import { useEffect } from 'react';
import { VIDEO_SLIDES } from '@/lib/constants/video';
import { VIDEO_OPTIMIZATION } from '@/lib/constants/video/optimization';

export function useVideoPreload() {
  useEffect(() => {
    const preloadVideos = async () => {
      const videoPromises = VIDEO_SLIDES.map(slide => {
        return new Promise((resolve, reject) => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'video';
          link.href = slide.videoSrc;
          link.type = 'video/mp4';
          
          // Add media fragment to optimize initial load
          link.href += '#t=0.1';
          
          link.onload = resolve;
          link.onerror = reject;
          document.head.appendChild(link);
        });
      });

      try {
        await Promise.all(videoPromises);
      } catch (error) {
        console.error('Error preloading videos:', error);
      }
    };

    // Use requestIdleCallback for better performance
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => preloadVideos());
    } else {
      setTimeout(preloadVideos, 1);
    }

    return () => {
      // Cleanup preload links on unmount
      document.querySelectorAll('link[rel="preload"][as="video"]')
        .forEach(link => link.remove());
    };
  }, []);
}