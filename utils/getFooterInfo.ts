import { FooterInfoFetchedObject } from "@/types/footerInfo";

export async function getFooterInfo() {
  try {
    const reasonsRes = await fetch(`${process.env.NEXT_PUBLIC_ACF_API_URL}/posts/201`);

    const data: FooterInfoFetchedObject = await reasonsRes.json();

    return {
      ...data.acf,
    };
  } catch (error) {
    console.error("Error fetching section heading:", error);
    return null;
  }
}
