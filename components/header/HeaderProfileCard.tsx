import Link from "next/link";
import { RefObject } from "react";

interface Props {
  cardRef: RefObject<HTMLDivElement | null>;
}

export default function HeaderProfileCard({ cardRef }: Props) {
  return (
    <div
      ref={cardRef}
      className="bg-background/10 border-secondary-light text-body-regular absolute top-full -left-px flex w-56 max-w-full flex-col gap-3 rounded-xl rounded-t-none border px-3 py-6"
    >
      <div className="">
        <Link href="/login" className="flex items-center gap-2">
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
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </span>
          <span>الحساب الشخصي</span>
        </Link>
      </div>

      <hr className="border-secondary-light" />

      <div>
        <button className="flex items-center gap-2">
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
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
              />
            </svg>
          </span>
          <span>تسجيل الخروج</span>
        </button>
      </div>
    </div>
  );
}
