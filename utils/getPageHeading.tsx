import { PageHeadingFetchedObject } from "@/types/pageHeading";

export async function getPageHeading(page_slug: string) {
  try {
    const sectionHeadingRes = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/pages_heading?slug=${page_slug}&_fields=id,slug,acf`,
    );

    const pageHeadingArray: PageHeadingFetchedObject[] = await sectionHeadingRes.json();

    if (!pageHeadingArray || pageHeadingArray.length === 0) {
      return null;
    }

    const pageHeadingData = pageHeadingArray[0];

    const {
      id,
      slug,
      acf: { title, description },
    } = pageHeadingData;

    return {
      id,
      slug,
      title,
      description,
    };
  } catch (error) {
    console.error("Error fetching page heading:", error);
    return null;
  }
}
