import { getSectionHeading } from "@/utils/getSectionHeading";
import SectionTitleDescription from "../global/SectionTitleDescription";
import WhyUsCard from "../why_us/WhyUsCard";

interface SectionHeadingData {
  id: number;
  slug: string;
  title: string;
  description: string;
}

export default async function WhyUsSection() {
  const sectionHeadingData: SectionHeadingData | null = await getSectionHeading("why_us");

  return (
    <section className="py-section-y-padding bg-[url('/services/background-shape.png')] bg-cover">
      <div className="container">
        <SectionTitleDescription
          title={sectionHeadingData?.title || "لماذا ذا كابيتال؟"}
          description={
            sectionHeadingData?.description ||
            "نجمع بين الخبرة والاحترافية والابتكار لنقدم لك أفضل الحلول العقارية."
          }
        />

        <div className="flex flex-wrap justify-center gap-4">
          <WhyUsCard className="w-full md:w-[calc((100%/2)-16px)] lg:w-[calc((100%/3)-16px)]" />
          <WhyUsCard className="w-full md:w-[calc((100%/2)-16px)] lg:w-[calc((100%/3)-16px)]" />
          <WhyUsCard className="w-full md:w-[calc((100%/2)-16px)] lg:w-[calc((100%/3)-16px)]" />
          <WhyUsCard className="w-full md:w-[calc((100%/2)-16px)] lg:w-[calc((100%/3)-16px)]" />
          <WhyUsCard className="w-full md:w-[calc((100%/2)-16px)] lg:w-[calc((100%/3)-16px)]" />
        </div>
      </div>
    </section>
  );
}
