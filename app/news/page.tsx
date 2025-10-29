import PageIntroSection from "@/components/global/PageIntroSection";
import NewsCard from "@/components/news/NewsCard";
import { getPageHeading } from "@/utils/getPageHeading";

export default async function News() {
  const pageHeading = await getPageHeading("news");

  return (
    <>
      <PageIntroSection
        title={pageHeading?.title || "أخبارنا"}
        description={pageHeading?.description || "تابع آخر أخبارنا وتحديثاتنا ومشاريعنا الجديدة"}
      />

      <section className="py-section-y-padding container">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </section>
    </>
  );
}
