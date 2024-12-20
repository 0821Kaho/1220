export const VIDEO_CONFIG = {
  PLAYBACK_RATE: 0.8,
  RETRY_DELAY: 1000,
  FADE_DURATION: 300,
  QUALITY: {
    MIN_BITRATE: 2500000,  // 2.5 Mbps
    MAX_BITRATE: 5000000,  // 5 Mbps
    TARGET_BUFFER: 30      // 30 seconds
  }
} as const;

export const VIDEO_PATHS = {
  HERO: {
    SKYTREE: '/videos/SkyTree.mp4'
  }
} as const;