import { getServices } from "@/utils/getServices";
import ServiceCardFull from "../our_services/ServiceCardFull";

export default async function OurServicesSection() {
  const servicesList = await getServices();

  return (
    <section className="py-section-y-padding container">
      <div className="centered-cards-3-parent">
        {servicesList.map((service) => {
          return (
            <ServiceCardFull
              className="centered-cards-3-child flex flex-col bg-gray-500"
              key={service.id}
              data={service}
            />
          );
        })}
      </div>
    </section>
  );
}
