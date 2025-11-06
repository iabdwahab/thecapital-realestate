import { getSectionHeading } from "@/utils/getSectionHeading";
import ReviewsCardsContainer from "./ReviewsCardsContainer";

export default async function ReviewsSection() {
  const data = await getSectionHeading("opinions");

  return (
    <section className="py-section-y-padding gradient-bg-inside">
      <div className="container">
        <div>
          <h2 className="text-sub-heading lg:text-heading text-background mb-3">
            {data?.title || "آراء عملائنا"}
          </h2>
          <p className="text-body-small lg:text-body-large text-background/90 mb-8 text-justify opacity-80">
            {data?.description || "نعتز بثقة عملائنا ونسعى دائماً لتقديم  الخدمات"}
          </p>
        </div>

        <ReviewsCardsContainer />
      </div>
    </section>
  );
}
