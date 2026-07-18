import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getNews } from "@/utils/getNews";
import { formatDateToArabic } from "@/functions/dateManipulation";
import BlurryCirlce from "@/components/global/BlurryCirlce";
import NewsCard from "@/components/news/NewsCard";
import ButtonPrimaryArrow from "@/components/global/ButtonPrimaryArrow";
import NewsletterSubscribtionSection from "@/components/newsletter/NewsletterSubscribtionSection";

export const dynamicParams = false;

export async function generateStaticParams() {
  const newsList = await getNews();

  return newsList.filter((news) => Boolean(news.slug)).map((news) => ({ news_info: news.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ news_info: string }>;
}): Promise<Metadata> {
  const { news_info } = await params;
  const newsList = await getNews();
  const news = newsList.find((item) => item.slug === news_info);

  if (!news) return {};

  return {
    title: `${news.title} | ذا كابيتال - The Capital`,
    description: news.short_description,
    openGraph: {
      title: news.title,
      description: news.short_description,
      images: news.image ? [news.image] : undefined,
    },
  };
}

export default async function NewsInfoPage({ params }: { params: Promise<{ news_info: string }> }) {
  const { news_info } = await params;
  const newsList = await getNews();
  const news = newsList.find((item) => item.slug === news_info);

  if (!news) notFound();

  const relatedNews = newsList.filter((item) => item.slug !== news.slug).slice(0, 3);

  return (
    <>
      <main className="text-background bg-primary relative z-10 overflow-hidden">
        <BlurryCirlce className="top-0 left-0 -translate-1/2" />
        <BlurryCirlce className="right-0 bottom-0 translate-1/2" />

        <div className="container flex flex-col items-center pt-44 pb-20 text-center">
          <span className="bg-background/10 border-secondary-light text-body-small mb-4 rounded-xl border px-4 py-2">
            أخبار
          </span>
          <h1 className="text-sub-heading md:text-heading mb-4 max-w-[900px]">{news.title}</h1>
          <p className="text-body-small md:text-body-regular text-background/80">
            {formatDateToArabic(news.date)}
          </p>
        </div>
      </main>

      <section className="py-section-y-padding container">
        <div className="mx-auto max-w-[900px]">
          {news.image && (
            <Image
              src={news.image}
              alt={news.title}
              width={900}
              height={500}
              className="rounded-card-radius border-secondary-light mb-10 max-h-100 w-full border object-cover object-center"
            />
          )}

          <div
            dangerouslySetInnerHTML={{ __html: news.news_info || news.short_description }}
            className="text-body-small lg:text-body-large text-primary-light mb-10 text-justify opacity-80"
          />

          <ButtonPrimaryArrow text="تصفح جميع الأخبار" href="/news" />
        </div>
      </section>

      {relatedNews.length > 0 && (
        <section className="py-section-y-padding container">
          <h2 className="text-sub-heading lg:text-heading text-primary mb-8">أخبار ذات صلة</h2>
          <div className="centered-cards-3-parent">
            {relatedNews.map((item) => (
              <NewsCard key={item.id} className="centered-cards-3-child" data={item} />
            ))}
          </div>
        </section>
      )}

      <NewsletterSubscribtionSection />
    </>
  );
}
