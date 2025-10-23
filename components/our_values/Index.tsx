import SectionTitleDescription from "../global/SectionTitleDescription";
import ValueCard from "./ValueCard";

export default function OurValues() {
  return (
    <section>
      <SectionTitleDescription
        title="قيمنا"
        description="أن نكـون الـرواد في تطويـر الشـقق الفندقيـة والفلـل السـكنية الذكيـة في المملكـة، ونُقـدم تجربـة سـكنية تجمـع بيـن الراحة، الفخامة، واالسـتثمار المسـتدام."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <ValueCard />
        <ValueCard />
        <ValueCard />
        <ValueCard />
      </div>
    </section>
  );
}
