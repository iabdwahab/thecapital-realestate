"use client";

export default function BackgroundVideo() {
  return (
    <video autoPlay muted loop className="absolute inset-0 -z-10 h-full w-full object-cover">
      <source src="/hero-video.mp4" type="video/mp4" />
    </video>
  );
}
