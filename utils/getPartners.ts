import { PartnerFetchedObject } from "@/types/partners";

export async function getPartners() {
  try {
    const reasonsRes = await fetch(`${process.env.NEXT_PUBLIC_ACF_API_URL}/partners`, {
      next: { revalidate: 60 },
    });

    const reasonsArray: PartnerFetchedObject[] = await reasonsRes.json();

    return reasonsArray.map((reason) => ({
      id: reason.id,
      ...reason.acf,
    }));
  } catch (error) {
    console.error("Error fetching section heading:", error);
    return [];
  }
}
