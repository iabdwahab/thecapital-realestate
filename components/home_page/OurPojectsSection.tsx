import SectionTitleDescription from "../global/SectionTitleDescription";
import ProjectCardImageText from "../our_projects/ProjectCardImageText";

export default function OurPojectsSection() {
  return (
    <section className="py-section-y-padding container">
      <SectionTitleDescription
        title="مشاريعنا"
        description="استكشف مشاريعنا العقارية المتميزة التي تجمع بين التصميم العصري والجودة العالية"
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCardImageText />
        <ProjectCardImageText />
        <ProjectCardImageText />
        <ProjectCardImageText />
        <ProjectCardImageText />
        <ProjectCardImageText />
      </div>
    </section>
  );
}
