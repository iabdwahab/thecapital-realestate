import { WhyUsReasonFetchedObject } from "@/types/whyUs";

export async function getWhyUsReasons() {
  try {
    const reasonsRes = await fetch(`${process.env.NEXT_PUBLIC_ACF_API_URL}/why_us`);

    const reasonsArray: WhyUsReasonFetchedObject[] = await reasonsRes.json();

    return reasonsArray.map((reason) => ({
      id: reason.id,
      ...reason.acf,
    }));
  } catch (error) {
    console.error("Error fetching section heading:", error);
    return [];
  }
}
