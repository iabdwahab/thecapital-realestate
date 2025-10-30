import PageIntroSection from "@/components/global/PageIntroSection";
import InquirySection from "@/components/inquiry_section/InquirySection";
import PartnersSection from "@/components/partners_page/PartnersSection";
import { getPageHeading } from "@/utils/getPageHeading";

export default async function Partners() {
  const pageHeading = await getPageHeading("partners");

  return (
    <>
      <PageIntroSection data={pageHeading} />

      <PartnersSection />
      <InquirySection />
    </>
  );
}
