import OurValues from "@/components/our_values/Index";
import SummarySection from "./SummarySection";

export default function SummaryValuesSection() {
  return (
    <section className="py-section-y-padding via-background to-background overflow-hidden from-[#5D819B] md:bg-linear-to-br">
      <div className="container flex flex-col gap-6">
        <SummarySection />
        <OurValues />
      </div>
    </section>
  );
}
