import { ContactPageInfoFetchedObject } from "@/types/contactPageInfo";

export async function getContactPageInfo() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_ACF_API_URL}/posts/369`, {
      next: { revalidate: 60 },
    });

    const data: ContactPageInfoFetchedObject = await res.json();

    return {
      ...data.acf,
    };
  } catch (error) {
    console.error("Error fetching section heading:", error);
    return null;
  }
}
