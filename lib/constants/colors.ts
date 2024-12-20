// Base color palette
export const PALETTE = {
  // Primary colors
  LIGHT_CORAL: '#FF6347',
  SALMON: '#FF6666',
  LIGHT_SKYBLUE: '#1E90FF',
  YELLOW: '#F7DE06',
  VIOLET: '#EE82EE',
  ORANGE_RED: '#FF4500',
  
  // Neutral colors
  WHITE: '#FFFFFF',
  BLACK: '#000000'
} as const;

// Semantic color mapping
export const SEMANTIC_COLORS = {
  // Verb colors
  VERBS: {
    EMPOWERING: PALETTE.LIGHT_CORAL,
    INSPIRING: PALETTE.SALMON,
    LEARNING: PALETTE.LIGHT_SKYBLUE,
    CONNECTING: PALETTE.YELLOW,
    SHAPING: PALETTE.ORANGE_RED,
    IMPROVING: PALETTE.VIOLET
  },
  
  // Text colors
  TEXT: {
    PRIMARY: PALETTE.WHITE,
    DARK: PALETTE.BLACK
  }
} as const;

// Export specific color groups for direct use
export const VERB_COLORS = SEMANTIC_COLORS.VERBS;
export const TEXT_COLORS = SEMANTIC_COLORS.TEXT;