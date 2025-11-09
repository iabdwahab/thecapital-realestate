import { getSectionHeading } from "@/utils/getSectionHeading";
import ReviewsCardsContainer from "./ReviewsCardsContainer";
import { getReviews } from "@/utils/getReviews";
import ReviewsStatistics from "./ReviewsStatistics";
import BlurryCirlce from "../global/BlurryCirlce";

export default async function ReviewsSection() {
  const data = await getSectionHeading("reviews");
  const reviewsList = await getReviews();

  console.log(reviewsList);
  return (
    <section className="py-section-y-padding gradient-bg-inside relative z-10 overflow-hidden">
      <BlurryCirlce className="top-0 right-0" />
      <BlurryCirlce className="bottom-0 left-0" />

      <div className="container">
        <div>
          <h2 className="text-sub-heading lg:text-heading text-background mb-3">
            {data?.title || "آراء عملائنا"}
          </h2>
          <p className="text-body-small lg:text-body-large text-background/90 mb-8 text-justify opacity-80">
            {data?.description || "نعتز بثقة عملائنا ونسعى دائماً لتقديم  الخدمات"}
          </p>
        </div>

        <ReviewsCardsContainer reviewsList={reviewsList} />

        <ReviewsStatistics className="mt-16" />
      </div>
    </section>
  );
}
