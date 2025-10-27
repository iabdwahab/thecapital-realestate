import PageIntroSection from "@/components/global/PageIntroSection";
import ProjectsFilteration from "@/components/our_projects/ProjectsFilteration";
import { getProjects } from "@/utils/getProjects";

export default async function Projects() {
  const projectsList = await getProjects();

  return (
    <>
      <PageIntroSection />
      <section className="pb-section-y-padding container">
        <ProjectsFilteration allProjects={projectsList} />
      </section>
    </>
  );
}
