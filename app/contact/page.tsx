import PageIntroSection from "@/components/global/PageIntroSection";
import { getPageHeading } from "@/utils/getPageHeading";

export default async function Contact() {
  const pageHeading = await getPageHeading("contact");

  return (
    <>
      <PageIntroSection
        title={pageHeading?.title || "تواصل معنا"}
        description={
          pageHeading?.description ||
          "نحن هنا للإجابة على استفساراتكم ومساعدتكم في بدء رحلتكم الاستثمارية"
        }
      />
    </>
  );
}
