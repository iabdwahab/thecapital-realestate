import PageIntroSection from "@/components/global/PageIntroSection";
import PartnersSection from "@/components/partners_page/PartnersSection";
import PartnersSectionCTACard from "@/components/partners_page/PartnersSectionCTACard";
import { getPageHeading } from "@/utils/getPageHeading";

export default async function Partners() {
  const pageHeading = await getPageHeading("partners");

  return (
    <>
      <PageIntroSection
        title={pageHeading?.title || "الشركاء والمستثمرون"}
        description={
          pageHeading?.description ||
          "ننمو معاً نحو النجاح - انضم إلى شبكتنا من الشركاء والمستثمرين لتحقيق أهدافك الاستثمارية"
        }
      />

      <PartnersSection />
    </>
  );
}
