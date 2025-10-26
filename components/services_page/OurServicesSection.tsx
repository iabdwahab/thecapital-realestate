import { getServices } from "@/utils/getServices";
import ServiceCardFull from "../our_services/ServiceCardFull";

export default async function OurServicesSection() {
  const servicesList = await getServices();

  return (
    <section className="py-section-y-padding container">
      <h2 className="text-sub-heading lg:text-heading border-secondary-light text-primary mx-auto mb-8 w-fit border-b px-20 pb-3 text-center">
        قائمة الخدمات
      </h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {servicesList.map((service) => {
          return <ServiceCardFull key={service.id} data={service} />;
        })}
      </div>
    </section>
  );
}
