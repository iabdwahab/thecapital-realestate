import ContactForm from "@/components/contact_page/ContactForm";
import ContactInfoCard from "@/components/contact_page/ContactInfoCard";
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
        </div>
      </div>
    </>
  );
}
