import SectionTitleDescription from "../global/SectionTitleDescription";
import WhyUsCard from "../why_us/WhyUsCard";

export default function WhyUsSection() {
  return (
    <section className="py-section-y-padding bg-[url('/services/background-shape.png')] bg-cover">
      <div className="container">
        <SectionTitleDescription
          title="لماذا ذا كابيتال؟"
          description="نجمع بين الخبرة والاحترافية والابتكار لنقدم لك أفضل الحلول العقارية"
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
