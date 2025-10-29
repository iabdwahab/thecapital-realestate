import { NewsFetchedObject } from "@/types/news";

export async function getNews() {
  try {
    const NewsRes = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/news?_fields=id,acf,date`,
    );

    const NewsArray: NewsFetchedObject[] = await NewsRes.json();

    return NewsArray.map((news) => ({
      id: news.id,
      date: news.date,
      ...news.acf,
    }));
  } catch (error) {
    console.error("Error fetching section heading:", error);
    return [];
  }
}
