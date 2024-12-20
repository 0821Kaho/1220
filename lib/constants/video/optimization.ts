export const VIDEO_OPTIMIZATION = {
  PLAYBACK_RATE: 0.8,
  PRELOAD_STRATEGY: 'auto',
  RETRY_DELAY: 1000,
  QUALITY_SETTINGS: {
    MIN_BITRATE: 2500000,  // 2.5 Mbps
    MAX_BITRATE: 5000000,  // 5 Mbps
    TARGET_BUFFER: 30      // 30 seconds
  }
} as const;