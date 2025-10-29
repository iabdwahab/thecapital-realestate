import Image from "next/image";
import GradientCardBorder from "../global/GradientCardBorder";

export default function NewsCard() {
  return (
    <article
      tabIndex={0}
      className="rounded-card-radius group bg-background duration-hover-normal relative z-10 shadow-sm transition hover:-translate-y-2.5 max-lg:focus:-translate-y-2.5"
    >
      {/* This will be visible when hovering */}
      <GradientCardBorder />

      <div className="rounded-t-card-radius relative overflow-hidden">
        <Image
          src={"/services/product.png"}
          alt="Project Image"
          width={400}
          height={256}
          className="duration-hover-normal h-64 w-full object-cover transition group-hover:scale-125 max-lg:group-focus:scale-125"
        />

        {/* This is the overlay over the image */}
        <span className="absolute top-0 left-0 z-10 h-full w-full -bg-linear-30 from-[#546E8380] to-[#0D325180]"></span>

        {/* This is the status of the project */}
        <span className="bg-primary text-body-small text-background absolute top-3 right-3 z-20 rounded-xl p-3">
          فعاليات{" "}
        </span>
      </div>

      <div className="bg-background duration-hover-normal group-hover:gradient-card-hover-light max-lg:group-focus:gradient-card-hover-light rounded-b-card-radius px-3 pt-3 pb-6 transition">
        <h3 className="text-primary text-body-large mb-2">
          توقيع اتفاقية شراكة استراتيجية مع البنك الأهلي
        </h3>
        <p className="text-primary-light text-body-regular">
          شراكة استراتيجية لتوفير حلول تمويلية ميسرة لعملائنا
        </p>

        <hr className="bg-secondary-light my-3 h-[0.5px] w-full border-none" />

        <div className="text-body-small text-primary-light mt-4 flex items-center justify-between gap-3 px-2">
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>
            <span className="line-clamp-1">1 أكتوبر 2025</span>
          </div>

          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <span>منذ ساعة</span>
          </div>

          <div className="flex items-center gap-3">
            <button className="rounded-sm p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
