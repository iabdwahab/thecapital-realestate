import { getServices } from "@/utils/getServices";
import ServiceCardFull from "../our_services/ServiceCardFull";

export default async function OurServicesSection() {
  const servicesList = await getServices();

  return (
    <section className="py-section-y-padding container grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {servicesList.map((service) => {
        return <ServiceCardFull key={service.id} data={service} />;
      })}
    </section>
  );
}
