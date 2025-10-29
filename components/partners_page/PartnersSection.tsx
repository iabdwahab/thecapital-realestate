import { getPartners } from "@/utils/getPartners";
import SectionTitleDescription from "../global/SectionTitleDescription";
import PartnerCard from "./PartnerCard";
import { SectionHeadingData } from "@/types/pageHeading";
import { getSectionHeading } from "@/utils/getSectionHeading";
import PartnersSectionCTACard from "./PartnersSectionCTACard";
import ButtonPrimaryArrow from "../global/ButtonPrimaryArrow";
import Link from "next/link";

export default async function PartnersSection() {
  const sectionHeadingData: SectionHeadingData | null = await getSectionHeading("partners");
  const parntersList = await getPartners();

  return (
    <section className="py-section-y-padding container">
      <SectionTitleDescription
        title={sectionHeadingData?.title || "شركاؤنا الاستراتيجيون"}
        description={sectionHeadingData?.description || "نفخر بشراكاتنا مع أفضل الشركات في المجال"}
      />

      <div className="mb-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {parntersList.map((partner) => (
          <PartnerCard key={partner.id} data={partner} />
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <PartnersSectionCTACard />
        <PartnersSectionCTACard />
      </div>
    </section>
  );
}
