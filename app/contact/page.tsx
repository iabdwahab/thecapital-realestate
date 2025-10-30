import ContactForm from "@/components/contact_page/ContactForm";
import ContactInfoCardsContainer from "@/components/contact_page/ContactInfoCardsContainer";
import PageIntroSection from "@/components/global/PageIntroSection";
import { getContactPageInfo } from "@/utils/getContactPageInfo";
import { getPageHeading } from "@/utils/getPageHeading";

export default async function Contact() {
  const pageHeading = await getPageHeading("contact");

  const contactPageInfo = await getContactPageInfo();

  return (
    <>
      <PageIntroSection data={pageHeading} />

      <div className="py-section-y-padding container">
        <ContactInfoCardsContainer data={Object.values(contactPageInfo?.contact_info || {})} />

        <hr className="my-section-y-padding bg-secondary-light h-px w-full border-none" />

        <div className="grid gap-20 lg:grid-cols-2">
          <ContactForm />

          <div>
            <div>
              <iframe
                src={
                  contactPageInfo?.google_maps_location ||
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d927791.1826067893!2d45.63954355802078!3d24.72055203332265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2seg!4v1761863338612!5m2!1sen!2seg"
                }
                allowFullScreen={undefined}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-card-radius border-secondary-light h-[400px] w-full border shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
