"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <main className="text-background relative flex min-h-screen flex-col items-center justify-center bg-[#00000033] text-center">
      <video className="absolute top-0 left-0 -z-10 h-full w-full object-cover" autoPlay muted loop>
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <div>
        <Image src="/logo-aren.png" alt="The Capital Logo" width={206} height={52} />
      </div>
      <h1 className="text-sub-heading md:text-hero mb-2">حلول عقارية ذكية ومستدامة</h1>
      <p className="text-body-regular md:text-sub-heading mb-6">
        نمنحك تجربة استثمارية آمنة ومتميزة تحقق طموحاتك.
      </p>
      <button className="btn-secondary text-cta min-h-[58px] min-w-[270px]">استكشف حلولنا</button>
    </main>
  );
}
