import SectionTitleDescription from "../global/SectionTitleDescription";
import ProjectCardImageText from "../our_projects/ProjectCardImageText";

export default function OurPojectsSection() {
  return (
    <section className="py-section-y-padding">
      <div className="container">
        <SectionTitleDescription
          title="مشاريعنا"
          description="استكشف مشاريعنا العقارية المتميزة التي تجمع بين التصميم العصري والجودة العالية"
        />
      </div>

      {/*
        Hey, this element is for mobile and Desktop.
        Desktop will use grid layout, and mobile will use horizontal scroll.
        You can see both implementations below, just uncomment the one you want to use.
      */}
      <div className="max-md:scrollbar-hide gap-4 max-md:flex max-md:overflow-x-auto max-md:px-4 max-md:py-4 md:container md:grid md:grid-cols-2 lg:grid-cols-3">
        <ProjectCardImageText className="max-md:w-[calc(100vw-32px-15px)] max-md:shrink-0" />
        <ProjectCardImageText className="max-md:w-[calc(100vw-32px-15px)] max-md:shrink-0" />
        <ProjectCardImageText className="max-md:w-[calc(100vw-32px-15px)] max-md:shrink-0" />
        <ProjectCardImageText className="max-md:w-[calc(100vw-32px-15px)] max-md:shrink-0" />
        <ProjectCardImageText className="max-md:w-[calc(100vw-32px-15px)] max-md:shrink-0" />
        <ProjectCardImageText className="max-md:w-[calc(100vw-32px-15px)] max-md:shrink-0" />
      </div>

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
