interface VideoSlideProps {
  videoSrc: string;
  headline: {
    verb: string;
    rest: string;
  };
  verbColor: string;
  textColor: string;
  isActive: boolean;
  isMuted: boolean;
}

export function VideoSlide({
  videoSrc,
  headline,
  verbColor,
  textColor,
  isActive,
  isMuted,
}: VideoSlideProps) {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-1000 ${
        isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
      }`}
    >
      <video
        autoPlay // 常に動画を自動再生
        muted={isMuted} // 常にミュート
        loop // ループ再生を有効
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />

      <div className="absolute inset-0 flex items-center">
        <div className="w-full max-w-[90%] md:max-w-[80%] pl-8 md:pl-16 lg:pl-24">
          <div className="flex flex-col justify-center h-[120px] md:h-[160px] lg:h-[200px]">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span
                className="block transition-transform duration-700 transform"
                style={{ color: verbColor }}
              >
                {headline.verb}
              </span>
              <span
                className="block mt-2 md:mt-3 lg:mt-4"
                style={{ color: textColor }}
              >
                {headline.rest}
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}