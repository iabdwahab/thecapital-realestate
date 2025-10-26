interface SectionHeadingData {
  id: number;
  slug: string;
  acf: {
    title: string;
    description: string;
  };
}

export async function getSectionHeading(section_slug: string) {
  try {
    const sectionHeadingRes = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/sections?slug=${section_slug}&_fields=id,slug,acf`,
    );

    const sectionHeadingArray: SectionHeadingData[] = await sectionHeadingRes.json();

    if (!sectionHeadingArray || sectionHeadingArray.length === 0) {
      return null;
    }

    const sectionHeadingData = sectionHeadingArray[0];

    const {
      id,
      slug,
      acf: { title, description },
    } = sectionHeadingData;

    return {
      id,
      slug,
      title,
      description,
    };
  } catch (error) {
    console.error("Error fetching section heading:", error);
    return null;
  }
}
