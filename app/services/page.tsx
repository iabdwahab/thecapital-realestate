import PageIntroSection from "@/components/global/PageIntroSection";
import OurServicesSection from "@/components/services_page/OurServicesSection";
import { getPageHeading } from "@/utils/getPageHeading";

export default async function page() {
  const pageHeading = await getPageHeading("services");

  return (
    <>
      <PageIntroSection
        title={pageHeading?.title || "خدماتنا"}
        description={
          pageHeading?.description ||
          "نقدّم منظومة متكاملة من الخدمات للمستثمر في القطاع الفندقي، تشمل جميع المراحل من الفكرة إلى العائد"
        }
      />
      <OurServicesSection />
    </>
  );
}
