import PageIntroSection from "@/components/global/PageIntroSection";
import OurServicesSection from "@/components/services_page/OurServicesSection";
import { getPageHeading } from "@/utils/getPageHeading";

export default async function page() {
  const pageHeading = await getPageHeading("services");

  console.log(pageHeading);

  return (
    <>
      <PageIntroSection
        title={pageHeading?.title || "خدماتنا"}
        description={
          pageHeading?.description ||
          "نقدم مجموعة شاملة من الخدمات العقارية المتكاملة لتلبية جميع احتياجاتكم."
        }
      />
      <OurServicesSection />
    </>
  );
}
