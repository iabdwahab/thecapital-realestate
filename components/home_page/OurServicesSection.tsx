import SectionTitleDescription from "../global/SectionTitleDescription";
import ServiceCardIconText from "../our_services/ServiceCardIconText";

export default function OurServicesSection() {
  return (
    <section className="py-section-y-padding bg-[url('/services/background-shape.png')] bg-cover">
      <div className="container">
        <SectionTitleDescription
          title="خدماتنا"
          description="نقدم مجموعة شاملة من الخدمات العقارية المتكاملة لتلبية احتياجاتكم"
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCardIconText />
          <ServiceCardIconText />
          <ServiceCardIconText />
          <ServiceCardIconText />
          <ServiceCardIconText />
          <ServiceCardIconText />
        </div>
      </div>
    </section>
  );
}
