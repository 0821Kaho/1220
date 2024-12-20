"use client";

import { Volume2, VolumeX } from 'lucide-react';

interface SoundControlProps {
  isMuted: boolean;
  onToggle: () => void;
}

export function SoundControl({ isMuted, onToggle }: SoundControlProps) {
  return (
    <button
      onClick={onToggle}
      className="absolute bottom-8 right-8 z-20 p-3 rounded-full bg-black/20 backdrop-blur-sm text-white hover:bg-black/40 transition-all duration-300 hover:scale-105"
      aria-label={isMuted ? "Unmute video" : "Mute video"}
    >
      {isMuted ? (
        <VolumeX className="w-5 h-5" />
      ) : (
        <Volume2 className="w-5 h-5" />
      )}
    </button>
  );
}