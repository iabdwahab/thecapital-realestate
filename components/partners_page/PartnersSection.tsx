import SectionTitleDescription from "../global/SectionTitleDescription";
import PartnerCard from "./PartnerCard";

export default function PartnersSection() {
  return (
    <section className="py-section-y-padding container">
      <SectionTitleDescription
        title="شركاؤنا الاستراتيجيون"
        description="نفخر بشراكاتنا مع أفضل الشركات في المجال"
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
      </div>
    </section>
  );
}
