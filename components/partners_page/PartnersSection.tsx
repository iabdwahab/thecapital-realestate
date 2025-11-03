import { getPartners } from "@/utils/getPartners";
import SectionTitleDescription from "../global/SectionTitleDescription";
import PartnerCard from "./PartnerCard";
import { SectionHeadingData } from "@/types/pageHeading";
import { getSectionHeading } from "@/utils/getSectionHeading";
import PartnersSectionCTACard from "./PartnersSectionCTACard";

import { getPartnersCTAData } from "@/utils/getPartnersCTAData";

export default async function PartnersSection() {
  const sectionHeadingData: SectionHeadingData | null = await getSectionHeading("partners");
  const parntersList = await getPartners();
  const partnersCTAData = await getPartnersCTAData();

  return (
    <section className="py-section-y-padding to-background relative bg-linear-to-b from-[#E1DAD5]">
      <div className="container">
        <SectionTitleDescription
          title={sectionHeadingData?.title || "شركاؤنا الاستراتيجيون"}
          description={
            sectionHeadingData?.description || "نفخر بشراكاتنا مع أفضل الشركات في المجال"
          }
        />
        <p className="absolute left-1/2 z-50 -translate-x-1/2 text-2xl text-red-700">
          لسة شغال عليها! 🙂
        </p>
        <div className="mb-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {parntersList.map((partner) => (
            <PartnerCard key={partner.id} data={partner} />
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <PartnersSectionCTACard data={partnersCTAData?.card_1} />
          <PartnersSectionCTACard data={partnersCTAData?.card_2} />
        </div>
      </div>
    </section>
  );
}
