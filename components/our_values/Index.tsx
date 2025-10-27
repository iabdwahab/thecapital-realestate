import { SectionHeadingData } from "@/types/sectionHeading";
import SectionTitleDescription from "../global/SectionTitleDescription";
import ValueCard from "./ValueCard";
import { getSectionHeading } from "@/utils/getSectionHeading";
import { getValues } from "@/utils/getValues";

export default async function OurValues() {
  const sectionHeadingData: SectionHeadingData | null = await getSectionHeading("values");
  const valuesList = await getValues();

  return (
    <section className="z-10">
      <SectionTitleDescription
        title={sectionHeadingData?.title || "قيمنا"}
        description={
          sectionHeadingData?.description ||
          "أن نكـون الـرواد في تطويـر الشـقق الفندقيـة والفلـل السـكنية الذكيـة في المملكـة، ونُقـدم تجربـة سـكنية تجمـع بيـن الراحة، الفخامة، واالسـتثمار المسـتدام."
        }
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {valuesList.map((value) => {
          return <ValueCard key={value.id} data={value} />;
        })}
      </div>
    </section>
  );
}
