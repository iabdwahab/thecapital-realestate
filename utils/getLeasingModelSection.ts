import { LeasingModelSectionFetchedObject } from "@/types/leasingModelSection";

// Replace with the ID of the WordPress post you attach the field group in
// acf-json/leasing-model-section.json to (same pattern as getSummarySectionData/getHeaderInfo).
const LEASING_MODEL_POST_ID = 706;

export async function getLeasingModelSection() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_ACF_API_URL}/posts/${LEASING_MODEL_POST_ID}`,
      {
        next: { revalidate: 60 },
      },
    );

    const data: LeasingModelSectionFetchedObject = await res.json();

    return data.acf;
  } catch (error) {
    console.error("Error fetching leasing model section:", error);
    return null;
  }
}
