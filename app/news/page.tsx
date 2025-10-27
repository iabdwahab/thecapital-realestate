import PageIntroSection from "@/components/global/PageIntroSection";
import { getPageHeading } from "@/utils/getPageHeading";

export default async function News() {
  const pageHeading = await getPageHeading("news");

  return (
    <>
      <PageIntroSection
        title={pageHeading?.title || "أخبارنا"}
        description={pageHeading?.description || "تابع آخر أخبارنا وتحديثاتنا ومشاريعنا الجديدة"}
      />
    </>
  );
}
