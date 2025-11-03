import { HeroSectionFetchedObject } from "@/types/heroSectionData";

export async function getHeroSectionData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_ACF_API_URL}/posts/456`);

    const data: HeroSectionFetchedObject = await res.json();

    return {
      ...data.acf,
    };
  } catch (error) {
    console.error("Error fetching section heading:", error);
    return null;
  }
}
