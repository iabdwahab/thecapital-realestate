import Image from "next/image";
import BackgroundVideo from "./BackgroundVideo";
import { getHeroSectionData } from "@/utils/getHeroSectionData";
import Link from "next/link";

export default async function HeroSection() {
  const data = await getHeroSectionData();

  return (
    <main className="text-background relative flex min-h-screen flex-col items-center justify-center bg-[#00000070] text-center">
      <BackgroundVideo />
      <div>
        <Image
          src={data?.logo || "/logo-aren.png"}
          alt="The Capital Logo"
          width={206}
          height={52}
        />
      </div>
      <h1 className="text-sub-heading md:text-hero mb-2">{data?.title}</h1>
      <p className="text-body-regular md:text-sub-heading mb-6">{data?.description}</p>
      <Link
        href={data?.link.href || "/"}
        className="btn-secondary text-cta min-h-[58px] min-w-[270px]"
      >
        {data?.link.text || "استكشف حلولنا"}
      </Link>
    </main>
  );
}
