import PageIntroSection from "@/components/global/PageIntroSection";
import OurServicesSection from "@/components/services_page/OurServicesSection";
import { getPageHeading } from "@/utils/getPageHeading";

export default async function page() {
  const pageHeading = await getPageHeading("services");

  return (
    <>
      <PageIntroSection data={pageHeading} />
      <OurServicesSection />
    </>
  );
}
