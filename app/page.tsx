import SectionTitleDescription from "@/components/global/SectionTitleDescription";
import HeroSection from "@/components/home_page/HeroSection";
import OurPojectsSection from "@/components/home_page/OurPojectsSection";
import OurServicesSection from "@/components/home_page/OurServicesSection";
import SummaryValuesSection from "@/components/home_page/summary_valeus_section/SummaryValuesSection";
import WhyUsSection from "@/components/home_page/WhyUsSection";
import ProjectCardFull from "@/components/our_projects/ProjectCardFull";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SummaryValuesSection />
      <OurServicesSection />
      <OurPojectsSection />
      <WhyUsSection />
      <div className="py-section-y-padding container">
        <SectionTitleDescription
          title="مشاريعنا"
          description="استكشف مشاريعنا العقارية المتميزة التي تجمع بين التصميم العصري والجودة العالية"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCardFull />
          <ProjectCardFull />
          <ProjectCardFull />
          <ProjectCardFull />
          <ProjectCardFull />
          <ProjectCardFull />
        </div>
      </div>
    </>
  );
}
