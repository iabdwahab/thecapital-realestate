import { getReviewsStatistics } from "@/utils/getReviewsStatistics";

interface Props {
  className?: string;
}

export default async function ReviewsStatistics({ className }: Props) {
  const data = await getReviewsStatistics();

  return (
    <div className={`${className} grid gap-10 md:grid-cols-3`}>
      <div className="rounded-card-radius bg-background flex flex-col gap-3 px-6 py-3 text-center">
        <p className="text-sub-heading text-primary">{data?.statistics_1.rating}</p>
        <h3 className="text-body-regular text-primary-light">{data?.statistics_1.title}</h3>
      </div>
      <div className="rounded-card-radius bg-background flex flex-col gap-3 px-6 py-3 text-center">
        <p className="text-sub-heading text-primary">{data?.statistics_2.rating}</p>
        <h3 className="text-body-regular text-primary-light">{data?.statistics_2.title}</h3>
      </div>
      <div className="rounded-card-radius bg-background flex flex-col gap-3 px-6 py-3 text-center">
        <p className="text-sub-heading text-primary">{data?.statistics_3.rating}</p>
        <h3 className="text-body-regular text-primary-light">{data?.statistics_3.title}</h3>
      </div>
    </div>
  );
}
