import { PartnersCTAFetchedObject } from "@/types/PartnersCTAData";

export async function getPartnersCTAData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_ACF_API_URL}/posts/310`, {
      next: { revalidate: 60 },
    });

    const data: PartnersCTAFetchedObject = await res.json();

    return {
      ...data.acf,
    };
  } catch (error) {
    console.error("Error fetching section heading:", error);
    return null;
  }
}
