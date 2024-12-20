"use client";

import { useState, useCallback, useEffect } from "react";
import { VideoSlide } from "./VideoSlide";
import { VideoNavigation } from "./VideoNavigation";
import { VIDEO_SLIDES } from "@/lib/constants/videos";

export function VideoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 前のスライドに移動
  const goToPrev = useCallback(() => {
    setCurrentIndex((current) =>
      current === 0 ? VIDEO_SLIDES.length - 1 : current - 1
    );
  }, []);

  // 次のスライドに移動
  const goToNext = useCallback(() => {
    setCurrentIndex((current) =>
      (current + 1) % VIDEO_SLIDES.length
    );
  }, []);

  // スライダーの自動再生を設定
  useEffect(() => {
    const interval = setInterval(goToNext, 5000); // 5秒ごとに次のスライドへ
    return () => clearInterval(interval); // クリーンアップ処理
  }, [goToNext]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* スライド一覧 */}
      {VIDEO_SLIDES.map((slide, index) => (
        <VideoSlide
          key={index}
          {...slide}
          isActive={index === currentIndex} // アクティブ状態を管理
          isMuted={true} // ミュートを有効
        />
      ))}

      {/* ナビゲーションボタン */}
      <VideoNavigation
        onPrev={() =>
          setCurrentIndex((current) =>
            current === 0 ? VIDEO_SLIDES.length - 1 : current - 1
          )
        }
        onNext={goToNext}
      />
    </div>
  );
}