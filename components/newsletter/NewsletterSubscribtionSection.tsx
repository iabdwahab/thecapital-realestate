import { SectionHeadingData } from "@/types/pageHeading";
import { getSectionHeading } from "@/utils/getSectionHeading";
import SubscribtionForm from "./SubscribtionForm";

export default async function NewsletterSubscribtionSection() {
  const sectionHeadingData: SectionHeadingData | null = await getSectionHeading("newsletter");

  return (
    <section className="py-section-y-padding text-background bg-primary">
      <div className="container">
        <div className="mb-10">
          <h2 className="text-heading mb-3">
            {sectionHeadingData?.title || "اشترك في نشرتنا الإخبارية"}
          </h2>
          <p className="text-body-large">
            {sectionHeadingData?.description ||
              "احصل على آخر الأخبار والتحديثات مباشرة في بريدك الإلكتروني"}
          </p>
        </div>

        <div>
          <SubscribtionForm />
        </div>
      </div>
    </section>
  );
}
