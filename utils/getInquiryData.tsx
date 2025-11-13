import { InquiryDataFetchedObject } from "@/types/InquiryData";

export async function getInquiryData() {
  try {
    const reasonsRes = await fetch(`${process.env.NEXT_PUBLIC_ACF_API_URL}/posts/569`, {
      next: { revalidate: 60 },
    });

    const data: InquiryDataFetchedObject = await reasonsRes.json();

    return {
      ...data.acf,
    };
  } catch (error) {
    console.error("Error fetching section heading:", error);
    return null;
  }
}
