import { SectionHeadingData } from "@/types/pageHeading";
import { getSectionHeading } from "@/utils/getSectionHeading";
import Link from "next/link";
import BlurryCirlce from "../global/BlurryCirlce";

export default async function StartInvestmentSection() {
  const sectionHeadingData: SectionHeadingData | null = await getSectionHeading("start_investment");

  return (
    <section className="py-section-y-padding bg-primary text-background relative z-10 overflow-hidden text-center">
      <BlurryCirlce className="top-0 left-0 -translate-y-1/2" />
      <BlurryCirlce className="right-0 translate-y-1/2" />

      <div className="container">
        <div className="mb-12">
          <h2 className="text-heading mb-3">
            {sectionHeadingData?.title || "ابدأ رحلتك الاستثمارية معنا اليوم"}
          </h2>
          <p className="text-body-large">
            {sectionHeadingData?.description ||
              "استثمر في وحدات فندقية ، بمبالغ رمزية ، وعوائد مجزية .. فريقنا جاهز لمساعدتك في الاطلاع على الفرص واتخاذ قرار الاستثمار."}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/projects"
            className="btn-primary text-primary flex w-full items-center justify-center gap-3 bg-white hover:bg-white/90 active:bg-white/80 sm:w-fit"
          >
            <span>تصفح المشاريع</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="btn-primary border-secondary-light w-full border sm:w-fit"
          >
            <span>تواصل معنا</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
