import { PALETTE } from './palette';

// Semantic color mapping
export const SEMANTIC_COLORS = {
  // Verb colors
  VERBS: {
    EMPOWERING: PALETTE.RED,
    INSPIRING: PALETTE.RED,
    LEARNING: PALETTE.VIVID_BLUE, // Updated to use vivid blue
    CONNECTING: PALETTE.WHITE,
    SHAPING: PALETTE.RED_ORANGE,
    GROWING: PALETTE.YELLOW,
    IMPROVING: PALETTE.PURPLE_PINK
  },
  
  // Text colors
  TEXT: {
    PRIMARY: PALETTE.WHITE,
    DARK: PALETTE.NAVY_BLACK
  }
} as const;