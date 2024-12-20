"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

export function AnimatedLogo() {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      setIsVisible(position < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const opacity = Math.max(0, Math.min(1, (100 - scrollPosition) / 100));
  const transform = `translateY(${Math.min(scrollPosition / 2, 50)}px)`;

  return (
    <Link href="/">
      <span 
        className="text-white text-2xl font-bold transition-all duration-500 block"
        style={{ 
          opacity,
          transform,
          willChange: 'transform, opacity',
          textShadow: isHovered ? '0 0 10px rgba(255,255,255,0.5)' : 'none',
          letterSpacing: isHovered ? '2px' : '0',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        NextGens Inc.
      </span>
    </Link>
  );
}