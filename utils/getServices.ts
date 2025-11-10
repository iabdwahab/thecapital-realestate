import { ServiceFetchedObject } from "@/types/services";

export async function getServices() {
  try {
    const reasonsRes = await fetch(`${process.env.NEXT_PUBLIC_ACF_API_URL}/services`, {
      next: { revalidate: 60 },
    });

    const reasonsArray: ServiceFetchedObject[] = await reasonsRes.json();

    return reasonsArray.map((reason) => ({
      id: reason.id,
      ...reason.acf,
    }));
  } catch (error) {
    console.error("Error fetching section heading:", error);
    return [];
  }
}
