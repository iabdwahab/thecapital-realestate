import Image from "next/image";
import HeaderNav from "./HeaderNav";

export default function Header() {
  return (
    <header className="bg-background/20 text-body-regular text-background border-secondary-light absolute z-50 flex w-full items-center justify-between rounded-b-xl border px-[35px] py-5 lg:px-[30px]">
      <div className="flex items-center gap-3">
        <button className="lg:hidden">
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <Image
          src="/logo-ar-150-50.png"
          alt="Logo"
          width={150}
          height={50}
          className="-mt-1.5 hidden object-contain lg:block"
        />
        <Image
          src="/logo-ar-60-20.png"
          alt="Logo"
          width={60}
          height={20}
          className="object-contain lg:hidden"
        />
      </div>

      <HeaderNav />

      <button className="btn-primary hidden p-3 xl:block">ابدأ استثمارك</button>

      <div className="flex items-center gap-3">
        <button>
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
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
        <button>
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
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
