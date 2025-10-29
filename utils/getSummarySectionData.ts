import { SummarySectionDataFetchedObject } from "@/types/summarySectionData";

export async function getSummarySectionData() {
  try {
    const reasonsRes = await fetch(`${process.env.NEXT_PUBLIC_ACF_API_URL}/posts/158`);

    const data: SummarySectionDataFetchedObject = await reasonsRes.json();

    return {
      ...data.acf,
    };
  } catch (error) {
    console.error("Error fetching section heading:", error);
    return null;
  }
}
