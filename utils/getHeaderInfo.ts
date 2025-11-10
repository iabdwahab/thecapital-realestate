import { HeaderInfoFetchedObject } from "@/types/headerInfo";

export async function getHeaderInfo() {
  try {
    const reasonsRes = await fetch(`${process.env.NEXT_PUBLIC_ACF_API_URL}/posts/395`, {
      next: { revalidate: 60 },
    });

    const data: HeaderInfoFetchedObject = await reasonsRes.json();

    return {
      ...data.acf,
    };
  } catch (error) {
    console.error("Error fetching section heading:", error);
    return null;
  }
}
