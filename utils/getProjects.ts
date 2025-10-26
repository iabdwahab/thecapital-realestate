import { ProjectFetchedObject } from "@/types/projects";

export async function getProjects() {
  try {
    const reasonsRes = await fetch(`${process.env.NEXT_PUBLIC_ACF_API_URL}/projects`);

    const reasonsArray: ProjectFetchedObject[] = await reasonsRes.json();

    return reasonsArray.map((reason) => ({
      id: reason.id,
      ...reason.acf,
    }));
  } catch (error) {
    console.error("Error fetching section heading:", error);
    return [];
  }
}
