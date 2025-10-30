import PageIntroSection from "@/components/global/PageIntroSection";
import ProjectsFilteration from "@/components/our_projects/ProjectsFilteration";
import { getPageHeading } from "@/utils/getPageHeading";
import { getProjects } from "@/utils/getProjects";

export default async function Projects() {
  const pageHeading = await getPageHeading("projects");
  const projectsList = await getProjects();

  return (
    <>
      <PageIntroSection data={pageHeading} />
      <section className="pb-section-y-padding container">
        <ProjectsFilteration allProjects={projectsList} />
      </section>
    </>
  );
}
