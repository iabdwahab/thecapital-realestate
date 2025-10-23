import OurValues from "@/components/our_values/Index";
import SummarySection from "./SummarySection";
import ValuesSection from "./ValuesSection";

export default function SummaryValuesSection() {
  return (
    <section className="py-section-y-padding from-primary-light via-primary-light/25 to-background relative overflow-hidden bg-linear-to-br">
      <div className="container">
        <SummarySection />
        {/* <ValuesSection /> */}
        <OurValues />
      </div>
    </section>
  );
}
