"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { VideoSlide } from "./VideoSlide";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    videoSrc: "/videos/digital brain.mp4",
    headline: "Empowering Through Innovation",
  },  
  {
    videoSrc: "/videos/Art.mp4",
    headline: "Inspiring Creativity and Growth",
  },
  {
    videoSrc: "/videos/Friends.mp4",
    headline: "Learning Together, Building Future",
  },
{
    videoSrc: "/videos/Tokyo Tower.mp4",
    headline: "Shaping Tomorrow's Leaders",
  },
  {
    videoSrc: "/videos/Fun.mp4",
    headline: "Growing Beyond Boundaries",
  },
  {
    videoSrc: "/videos/Digital Earth.mp4",
    headline: "Improving Access to Knowledge",
  },
];

export function VideoSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop
      className="h-screen"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <VideoSlide {...slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}