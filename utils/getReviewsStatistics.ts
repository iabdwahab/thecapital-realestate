import { ReviewsStatisticsFetchedObject } from "@/types/reviewsStatistics";

export async function getReviewsStatistics() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_ACF_API_URL}/posts/481`);

    const data: ReviewsStatisticsFetchedObject = await res.json();

    return {
      ...data.acf,
    };
  } catch (error) {
    console.error("Error fetching section heading:", error);
    return null;
  }
}
