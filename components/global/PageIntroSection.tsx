import { SectionHeadingData } from "@/types/pageHeading";
import Image from "next/image";
import BlurryCirlce from "./BlurryCirlce";

interface Props {
  data: SectionHeadingData | null;
}

export default function PageIntroSection({ data }: Props) {
  return (
    <main className="text-background bg-primary relative z-10 overflow-hidden text-center">
      <BlurryCirlce className="top-0 left-0 -translate-1/2" />
      <BlurryCirlce className="right-0 bottom-0 translate-1/2" />

      <div className="container flex min-h-screen flex-col items-center justify-center">
        <div>
          <Image src="/logo-aren.png" alt="The Capital Logo" width={206} height={52} />
        </div>
        <h1 className="text-sub-heading md:text-hero mb-2">{data?.title}</h1>
        <p className="text-body-regular md:text-sub-heading mb-8 max-w-[800px]">
          {data?.description}
        </p>

        {data?.slogan && (
          <div className="border-secondary-light flex w-[800px] max-w-full items-center justify-center gap-3 rounded-xl border p-3">
            <p className="text-cta">{data.slogan} </p>
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
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
          </div>
        )}
      </div>
    </main>
  );
}
