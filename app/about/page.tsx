import PageIntroSection from "@/components/global/PageIntroSection";
import OurValues from "@/components/our_values/Index";
import { getPageHeading } from "@/utils/getPageHeading";

export default async function About() {
  const pageHeading = await getPageHeading("about");

  return (
    <>
      <PageIntroSection
        title={pageHeading?.title || "عن ذا كابيتال"}
        description={
          pageHeading?.description || "رواد في مجال التطوير الاستثمار العقاري في المنتجات الفندقية"
        }
      />

      <div className="py-section-y-padding container">
        <OurValues />
      </div>
    </>
  );
}
