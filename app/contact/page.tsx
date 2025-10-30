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

        <div className="grid gap-8 lg:grid-cols-2">
          <ContactForm />

          <div className="flex flex-col gap-8">
            <div className="h-full max-lg:h-[400px]">
              <iframe
                src={
                  contactPageInfo?.google_maps_location ||
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d927791.1826067893!2d45.63954355802078!3d24.72055203332265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2seg!4v1761863338612!5m2!1sen!2seg"
                }
                allowFullScreen={undefined}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-card-radius border-secondary-light h-full w-full border shadow-sm"
              ></iframe>
            </div>

            <div className="gradient-bg-inside text-background rounded-card-radius p-6">
              <h5 className="text-body-large mb-3">نسعد بخدمتكم</h5>
              <p className="text-body-regular text-background/80 mb-6">
                فريقنا المتخصص جاهز للإجابة على جميع استفساراتكم ومساعدتكم في اختيار الفرصة
                الاستثمارية المناسبة. لا تترددوا في التواصل معنا.
              </p>

              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-3">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </span>
                  <span>متوفرون على مدار الأسبوع</span>
                </li>

                <li className="flex items-center gap-3">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </span>
                  <span>استجابة سريعة خلال 24 ساعة</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
