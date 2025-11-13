import { getProjects } from "@/utils/getProjects";
import ProjectCardFull from "./ProjectCardFull";

export default async function OurProjectsFullContainer() {
  const projectsList = await getProjects();

  return (
    <div className="centered-cards-3-parent">
      {projectsList.map((value) => {
        return <ProjectCardFull className="centered-cards-3-child" key={value.id} data={value} />;
      })}
    </div>
  );
}
