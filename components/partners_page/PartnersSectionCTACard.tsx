import Image from "next/image";
import Link from "next/link";

export default function PartnersSectionCTACard() {
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

      <h3 className="text-body-large text-primary mb-2">استثمر معنا</h3>
      <p className="text-primary-light text-body-small mb-3">
        فرص استثمارية مميزة في مشاريع عقارية متنوعة بعوائد جذابة ومخاطر محسوبة
      </p>

      <ul className="text-primary-light flex flex-col gap-2">
        <li className="flex items-center gap-1">
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
          <span>عوائد استثمارية مرتفعة</span>
        </li>
        <li className="flex items-center gap-1">
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
          <span>عوائد استثمارية مرتفعة</span>
        </li>
        <li className="flex items-center gap-1">
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
          <span>عوائد استثمارية مرتفعة</span>
        </li>
      </ul>

      <hr className="border-secondary-light my-3" />

      <Link href="#" className="btn-primary text-center">
        استكشف الفرص الاستثمارية
      </Link>
    </article>
  );
}
