import { getProjects } from "@/utils/getProjects";
import SectionTitleDescription from "../global/SectionTitleDescription";
import ProjectCardImageText from "../our_projects/ProjectCardImageText";
import { getSectionHeading } from "@/utils/getSectionHeading";
import { SectionHeadingData } from "@/types/sectionHeading";
import ButtonPrimaryArrow from "../global/ButtonPrimaryArrow";

export default async function OurPojectsSection() {
  const sectionHeadingData: SectionHeadingData | null = await getSectionHeading("projects");
  const projectsList = await getProjects();

  return (
    <section className="py-section-y-padding">
      <div className="container">
        <SectionTitleDescription
          title={sectionHeadingData?.title || "مشاريعنا"}
          description={
            sectionHeadingData?.description ||
            "استكشف مشاريعنا العقارية المتميزة التي تجمع بين التصميم العصري والجودة العالية"
          }
        />
      </div>

      <div className="container grid gap-4 md:grid-cols-2">
        {projectsList.slice(0, 2).map((project) => {
          return <ProjectCardImageText key={project.id} data={project} />;
        })}
      </div>

      <div className="container mt-8 flex justify-center">
        <ButtonPrimaryArrow
          href="/projects"
          text="اكتشف جميع مشاريعنا"
          className="btn-primary block"
        />
      </div>

      {/*
        Hey, this element is for mobile and Desktop.
        Desktop will use grid layout, and mobile will use horizontal scroll.
        You can see both implementations below, just uncomment the one you want to use.

        I combined them into one div to reduce code duplication in html source.
      */}
      {/* <div className="max-md:scrollbar-hide gap-4 max-md:flex max-md:overflow-x-auto max-md:px-4 max-md:py-4 md:container md:grid md:grid-cols-2 lg:grid-cols-3">
        {projectsList.map((project) => {
          return (
            <ProjectCardImageText
              key={project.id}
              data={project}
              className="max-md:w-[calc(100vw-32px-15px)] max-md:shrink-0"
            />
          );
        })}
      </div> */}

      {/* Mobile Slider */}
      {/* <div className="scrollbar-hide flex gap-4 overflow-x-auto px-4 md:hidden">
        <ProjectCardImageText className="w-[calc(100vw-32px-15px)] shrink-0" />
        <ProjectCardImageText className="w-[calc(100vw-32px-15px)] shrink-0" />
        <ProjectCardImageText className="w-[calc(100vw-32px-15px)] shrink-0" />
        <ProjectCardImageText className="w-[calc(100vw-32px-15px)] shrink-0" />
        <ProjectCardImageText className="w-[calc(100vw-32px-15px)] shrink-0" />
      </div> */}

      {/* Desktop Grid */}
      {/* <div className="container hidden md:block">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCardImageText />
          <ProjectCardImageText />
          <ProjectCardImageText />
          <ProjectCardImageText />
          <ProjectCardImageText />
          <ProjectCardImageText />
        </div>
      </div> */}
    </section>
  );
}
