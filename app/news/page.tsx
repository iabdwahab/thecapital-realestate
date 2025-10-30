import PageIntroSection from "@/components/global/PageIntroSection";
import NewsCard from "@/components/news/NewsCard";
import NewsSection from "@/components/news/NewsSection";
import NewsletterSubscribtionSection from "@/components/newsletter/NewsletterSubscribtionSection";
import { getPageHeading } from "@/utils/getPageHeading";

export default async function News() {
  const pageHeading = await getPageHeading("news");

  return (
    <>
      <PageIntroSection data={pageHeading} />

      <NewsSection />
      <NewsletterSubscribtionSection />
    </>
  );
}
