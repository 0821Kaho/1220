"use client";

interface VideoSlideProps {
  videoSrc: string;
  headline: string;
}

export function VideoSlide({ videoSrc, headline}: VideoSlideProps) {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            {headline}
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
          </p>
        </div>
      </div>
    </div>
  );
}