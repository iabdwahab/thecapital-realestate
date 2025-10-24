import HeroSection from "@/components/home_page/HeroSection";
import OurPojectsSection from "@/components/home_page/OurPojectsSection";
import OurServicesSection from "@/components/home_page/OurServicesSection";
import SummaryValuesSection from "@/components/home_page/summary_valeus_section/SummaryValuesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SummaryValuesSection />
      <OurServicesSection />
      <OurPojectsSection />
    </>
  );
}
