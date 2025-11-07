import { getNews } from "@/utils/getNews";
import NewsCard from "./NewsCard";

export default async function NewsSection() {
  const newsList = await getNews();

  console.log("newsList:", newsList);

  return (
    <section className="py-section-y-padding container">
      <div className="centered-cards-3-parent">
        {newsList.map((news) => {
          return <NewsCard className="centered-cards-3-child" key={news.id} data={news} />;
        })}
      </div>
    </section>
  );
}
