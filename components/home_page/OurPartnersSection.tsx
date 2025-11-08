import { SectionHeadingData } from "@/types/pageHeading";
import { getPartners } from "@/utils/getPartners";
import { getSectionHeading } from "@/utils/getSectionHeading";
import PartnerCard from "../partners_page/PartnerCard";
import Link from "next/link";

export default async function OurPartnersSection() {
  const sectionHeadingData: SectionHeadingData | null = await getSectionHeading("partners");
  const parntersList = await getPartners();

  return (
    <section className="relative z-20 bg-[url('/home_page/partners-section.png')] bg-cover bg-bottom">
      <span className="absolute top-0 left-0 -z-10 h-full w-full bg-black/60"></span>

      <div className="py-section-y-padding container">
        <div>
          <h2 className="text-sub-heading lg:text-heading text-background mb-3">
            {sectionHeadingData?.title || "شركاؤنا ومستثمرونا"}
          </h2>
          <p className="text-body-small lg:text-body-large text-background mb-8 text-justify opacity-80">
            {sectionHeadingData?.description || "نفخر بشراكاتنا مع أفضل الشركات في المجال"}
          </p>
        </div>

        <div className="centered-cards-3-parent mb-6">
          {parntersList.map((partner) => (
            <PartnerCard className="centered-cards-3-child" key={partner.id} data={partner} />
          ))}
        </div>

        <Link href="/contact" className="btn-primary block w-fit rounded-xl px-8">
          كن شريكنا
        </Link>
      </div>
    </section>
  );
}
