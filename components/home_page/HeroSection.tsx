import Image from 'next/image';

export default function HeroSection() {
  return (
    <main className="relative bg-[#363636] min-h-screen text-background flex flex-col justify-center items-center text-center">
      <div>
        <Image src="/logo-aren.png" alt="The Capital Logo" width={206} height={52} />
      </div>
      <h1 className="text-sub-heading md:text-hero mb-2">حلول عقارية ذكية ومستدامة</h1>
      <p className="text-body-regular md:text-sub-heading mb-6">نمنحك تجربة استثمارية آمنة ومتميزة تحقق طموحاتك.</p>
      <button className="btn-secondary min-w-[270px] min-h-[58px]">استكشف حلولنا</button>
    </main>
  );
}
