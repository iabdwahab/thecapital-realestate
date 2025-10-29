import { getNews } from "@/utils/getNews";
import NewsCard from "./NewsCard";

export default async function NewsSection() {
  const newsList = await getNews();

  console.log("newsList:", newsList);

  return (
    <section className="py-section-y-padding container">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {newsList.map((news) => {
          return <NewsCard key={news.id} data={news} />;
        })}
      </div>
    </section>
  );
}
