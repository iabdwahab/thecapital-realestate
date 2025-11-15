import OurStorySection from "@/components/about_page/OurStorySection";
import VisionMessageCard from "@/components/about_page/VisionMessageCard";
import PageIntroSection from "@/components/global/PageIntroSection";
import OurValues from "@/components/our_values/Index";
import { getAboutPageInfo } from "@/utils/getAboutPageInfo";
import { getPageHeading } from "@/utils/getPageHeading";

export default async function About() {
  const pageHeading = await getPageHeading("about");
  const aboutPageData = await getAboutPageInfo();

  return (
    <>
      <PageIntroSection data={pageHeading} />

      <div className="py-section-y-padding from-background bg-linear-to-b from-45% via-[#E1DAD5] via-80% to-[#e9e5e2]">
        <div className="container">
          <OurStorySection data={aboutPageData?.our_story_section} />

          <div className="my-section-y-padding grid gap-5 lg:grid-cols-2">
            <VisionMessageCard data={aboutPageData?.vision_message.card_1} />
            <VisionMessageCard data={aboutPageData?.vision_message.card_2} />
          </div>

          <OurValues />
        </div>
      </div>
    </>
  );
}
