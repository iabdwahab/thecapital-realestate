import { PartnersCTACard } from "@/types/PartnersCTAData";
import Link from "next/link";

interface Props {
  data: PartnersCTACard | undefined;
}

export default function PartnersSectionCTACard({ data }: Props) {
  let featuresList = Object.values(data?.features || {});

  return (
    <article className="rounded-card-radius group hover:gradient-card-hover-light duration-hover-normal bg-background border-secondary-light flex flex-col gap-2 border p-6 shadow-sm transition">
      <div className="group-hover:bg-primary mr-auto w-fit rounded-xl p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="group-hover:text-background duration-hover-fast text-primary size-10 transition-colors"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
          />
        </svg>
      </div>

      <h3 className="text-body-large text-primary mb-2">{data?.title}</h3>
      <p className="text-primary-light text-body-small mb-3">{data?.description} </p>

      <ul className="text-primary-light mb-3 flex flex-col gap-2">
        {featuresList.map((feature, index) => (
          <li key={index} className="flex items-center gap-1">
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
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <hr className="border-secondary-light mt-auto mb-3" />

      <Link href={data?.link.href || "#"} className="btn-primary text-center">
        {data?.link.text}
      </Link>
    </article>
  );
}
