import OurValues from "@/components/our_values/Index";
import SummarySection from "./SummarySection";
import ValuesSection from "./ValuesSection";

export default function SummaryValuesSection() {
  return (
    <section className="py-section-y-padding via-background to-background relative overflow-hidden bg-linear-to-br from-[#5D819B]">
      <div className="container flex flex-col gap-32">
        <SummarySection />
        <OurValues />
      </div>
    </section>
  );
}
