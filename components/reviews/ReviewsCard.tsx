import { ReviewData } from "@/types/reviews";
import Image from "next/image";

interface Props {
  data: ReviewData;
  className?: string;
}

export default function ReviewsCard({ className, data }: Props) {
  const starsElements = [];

  // Making Rating Stars
  for (let i = 5; i >= 1; i--) {
    if (i <= Number(data.rating)) {
      starsElements.push(
        <li key={i}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#FFB800"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#FFB800"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
        </li>,
      );
    } else {
      starsElements.push(
        <li key={i}>
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
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
        </li>,
      );
    }
  }

  return (
    <article className={`${className} rounded-card-radius bg-background flex h-full flex-col p-6`}>
      <h3 className="text-primary text-body-small mb-4">{data.text} </h3>

      <div className="mt-auto">
        <ul className="flex items-center">{starsElements.reverse()}</ul>
        <hr className="my-6 h-px border-none bg-linear-to-r from-transparent to-[#0D3251]/20" />

        <div className="flex items-center gap-3">
          <div>
            <Image
              src={data.author.image || "/placeholders/reviewer.jpg"}
              alt="reviewer"
              width={64}
              height={64}
              className="h-16 w-16 rounded-full object-cover"
            />
          </div>
          <div>
            <h4 className="text-body-regular text-primary">{data?.author?.name}</h4>
            <p className="text-body-small text-primary-light">{data.author.title}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
