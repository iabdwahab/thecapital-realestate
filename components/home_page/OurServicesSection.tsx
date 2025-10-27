import { getServices } from "@/utils/getServices";
import SectionTitleDescription from "../global/SectionTitleDescription";
import ServiceCardIconText from "../our_services/ServiceCardIconText";
import { SectionHeadingData } from "@/types/sectionHeading";
import { getSectionHeading } from "@/utils/getSectionHeading";

export default async function OurServicesSection() {
  const sectionHeadingData: SectionHeadingData | null = await getSectionHeading("services");
  const servicesList = await getServices();

  return (
    <section className="py-section-y-padding bg-[url('/services/background-shape.png')] bg-cover">
      <div className="container">
        <SectionTitleDescription
          title={sectionHeadingData ? sectionHeadingData?.title : "خدماتنا"}
          description={
            sectionHeadingData?.description ||
            "نقدم مجموعة شاملة من الخدمات العقارية المتكاملة لتلبية احتياجاتكم."
          }
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {servicesList.map((service) => {
            return <ServiceCardIconText key={service.id} data={service} />;
          })}
        </div>
      </div>
    </section>
  );
}
