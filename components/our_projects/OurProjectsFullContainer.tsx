import { getProjects } from "@/utils/getProjects";
import ProjectCardFull from "./ProjectCardFull";

export default async function OurProjectsFullContainer() {
  const projectsList = await getProjects();

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projectsList.map((value) => {
        return <ProjectCardFull key={value.id} data={value} />;
      })}
    </div>
  );
}
