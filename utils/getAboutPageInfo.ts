import { AboutPageInfoFetchedObject } from "@/types/aboutPageInfo";

export async function getAboutPageInfo() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_ACF_API_URL}/posts/346`);

    const data: AboutPageInfoFetchedObject = await res.json();

    return {
      ...data.acf,
    };
  } catch (error) {
    console.error("Error fetching section heading:", error);
    return null;
  }
}
