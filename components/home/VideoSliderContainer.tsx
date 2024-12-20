"use client";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import { VideoSlider } from "./VideoSlider";
import { Suspense } from "react";

export function VideoSliderContainer() {
  return (
    <ErrorBoundary>
      <Suspense fallback={
        <div className="h-screen bg-black flex items-center justify-center">
          <div className="animate-pulse text-white">Loading...</div>
        </div>
      }>
        <VideoSlider />
      </Suspense>
    </ErrorBoundary>
  );
}