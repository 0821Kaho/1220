import { PALETTE } from '../colors/palette';

export const VIDEO_SLIDES = [
  {
    id: 'digital-brain',
    videoSrc: '/videos/Digital Brain.mp4',
    headline: {
      verb: 'Empowering',
      rest: 'Education Through Innovation',
    },
    verbColor: PALETTE.RED,
    textColor: PALETTE.WHITE,
  },
  {
    id: 'art',
    videoSrc: '/videos/Art.mp4',
    headline: {
      verb: 'Inspiring',
      rest: 'Creativity and Growth',
    },
    verbColor: PALETTE.PINK,
    textColor: PALETTE.WHITE,
  },
  {
    id: 'friends',
    videoSrc: '/videos/Friends.mp4',
    headline: {
      verb: 'Learning',
      rest: 'Together, Building Future',
    },
    verbColor: PALETTE.BLUE,
    textColor: PALETTE.WHITE,
  },
  {
    id: 'tokyotower',
    videoSrc: '/videos/TokyoTower.mp4',
    headline: {
      verb: 'Shaping',
      rest: "Tomorrow's Leaders", // シングルクォートをエスケープまたはダブルクォートを使用
    },
    verbColor: PALETTE.BLUE,
    textColor: PALETTE.WHITE,
  },
  {
    id: 'fun',
    videoSrc: '/videos/Fun.mp4',
    headline: {
      verb: 'Growing',
      rest: 'Beyond Boundaries',
    },
    verbColor: PALETTE.BLUE,
    textColor: PALETTE.WHITE,
  },
  {
    id: 'digital-access',
    videoSrc: '/videos/Digital Brain.mp4',
    headline: {
      verb: 'Improving',
      rest: 'Access to Knowledge',
    },
    verbColor: PALETTE.BLUE,
    textColor: PALETTE.WHITE,
  },
] as const;