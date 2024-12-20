import { VERB_COLORS, TEXT_COLORS } from './colors';

export const VIDEO_SOURCES = {
  DIGITAL_BRAIN: "/videos/Digital Brain.mp4",
  ART: "/videos/Art.mp4",
  FRIENDS: "/videos/Friends.mp4",
  FUN: "/videos/Fun.mp4",
  TOKYO_TOWER: "/videos/Tokyo Tower.mp4",
  DIGITAL_EARTH: "/videos/Digital Earth.mp4"
} as const;

export const VIDEO_SLIDES = [
  {
    videoSrc: VIDEO_SOURCES.DIGITAL_BRAIN,
    headline: {
      verb: "Empowering",
      rest: "Through Innovation"
    },
    verbColor: VERB_COLORS.EMPOWERING,
    textColor: TEXT_COLORS.PRIMARY
  },
  {
    videoSrc: VIDEO_SOURCES.ART,
    headline: {
      verb: "Inspiring",
      rest: "Creativity and Growth"
    },
    verbColor: VERB_COLORS.INSPIRING,
    textColor: TEXT_COLORS.PRIMARY
  },
  {
    videoSrc: VIDEO_SOURCES.FRIENDS,
    headline: {
      verb: "Learning",
      rest: "Together, Building Future"
    },
    verbColor: VERB_COLORS.LEARNING,
    textColor: TEXT_COLORS.PRIMARY
  },
  {
    videoSrc: VIDEO_SOURCES.FUN,
    headline: {
      verb: "Connecting",
      rest: "Communities Worldwide"
    },
    verbColor: VERB_COLORS.CONNECTING,
    textColor: TEXT_COLORS.DARK
  },
  {
    videoSrc: VIDEO_SOURCES.TOKYO_TOWER,
    headline: {
      verb: "Shaping",
      rest: "Tomorrow's Leaders"
    },
    verbColor: VERB_COLORS.SHAPING,
    textColor: TEXT_COLORS.PRIMARY
  },
  {
    videoSrc: VIDEO_SOURCES.DIGITAL_EARTH,
    headline: {
      verb: "Improving",
      rest: "Access to Knowledge"
    },
    verbColor: VERB_COLORS.IMPROVING,
    textColor: TEXT_COLORS.PRIMARY
  }
] as const;