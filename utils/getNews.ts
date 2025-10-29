import { NewsFetchedObject } from "@/types/news";

export async function getNews() {
  try {
    const reasonsRes = await fetch(`${process.env.NEXT_PUBLIC_ACF_API_URL}/news`);

    const reasonsArray: NewsFetchedObject[] = await reasonsRes.json();

    return reasonsArray.map((reason) => ({
      id: reason.id,
      ...reason.acf,
    }));
  } catch (error) {
    console.error("Error fetching section heading:", error);
    return [];
  }
}
