"use client";

import { useRef, useState } from "react";

interface Props {
  src: string;
  className?: string;
}

export default function NewsVideoPlayer({ src, className }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div className={`${className} group relative overflow-hidden`}>
      <video
        ref={videoRef}
        src={src}
        controls={isPlaying}
        playsInline
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onClick={!isPlaying ? togglePlay : undefined}
        className="h-full w-full object-cover"
      />

      {!isPlaying && (
        <>
          <span className="pointer-events-none absolute top-0 left-0 z-10 h-full w-full -bg-linear-30 from-[#546E8380] to-[#0D325180]"></span>

          <button
            type="button"
            onClick={togglePlay}
            aria-label="تشغيل الفيديو"
            className="bg-primary/80 hover:bg-primary duration-hover-fast absolute top-1/2 left-1/2 z-20 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-background size-6 -translate-x-0.5"
            >
              <path d="M8 5.14v13.72a1 1 0 0 0 1.53.848l10.86-6.86a1 1 0 0 0 0-1.696L9.53 4.292A1 1 0 0 0 8 5.14Z" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
