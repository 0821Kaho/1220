"use client";

import { useState } from 'react';
import { VIDEO_SLIDES } from '@/lib/constants/video/slides';
import { Slide } from './Slide';
import { Navigation } from './Navigation';
import { SoundControl } from './SoundControl';

export function VideoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  const goToNext = () => setCurrentIndex((current) => 
    (current + 1) % VIDEO_SLIDES.length
  );

  const goToPrev = () => setCurrentIndex((current) => 
    current === 0 ? VIDEO_SLIDES.length - 1 : current - 1
  );

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {VIDEO_SLIDES.map((slide, index) => (
        <Slide
          key={slide.id}
          {...slide}
          isActive={index === currentIndex}
          isMuted={isMuted}
        />
      ))}

      <Navigation
        total={VIDEO_SLIDES.length}
        current={currentIndex}
        onPrev={goToPrev}
        onNext={goToNext}
        onDotClick={setCurrentIndex}
      />

      <SoundControl
        isMuted={isMuted}
        onToggle={() => setIsMuted(!isMuted)}
      />
    </div>
  );
}