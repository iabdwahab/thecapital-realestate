"use client";

import Image from "next/image";
import HeaderNav from "./HeaderNav";
import Link from "next/link";
import HeaderNavMobile from "./HeaderNavMobile";
import { HeaderInfo } from "@/types/headerInfo";
import { useEffect, useRef, useState } from "react";
import HeaderProfileCard from "./HeaderProfileCard";
import { usePathname } from "next/navigation";

interface Props {
  headerInfo: HeaderInfo | null;
}

export default function Header({ headerInfo }: Props) {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserProfileCardOpen, setIsUserProfileCardOpen] = useState(false);

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const headerNavMobileRef = useRef<HTMLElement>(null);
  const userProfileCardButtonRef = useRef<HTMLButtonElement>(null);
  const userProfileCardRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  // This for URL changing
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsUserProfileCardOpen(false);
  }, [pathname]);

  // This is for resizing window
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1100);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // This is for closing the mobile menu when clicking outside it.
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        // This prevent nav from closing when clicking inside it
        headerNavMobileRef.current &&
        !headerNavMobileRef.current.contains(event.target as Node) &&
        // This for triggering outside click
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutsideProfileCard = (event: MouseEvent) => {
      if (
        // This prevent card from closing when clicking inside it
        userProfileCardRef.current &&
        !userProfileCardRef.current.contains(event.target as Node) &&
        // This for triggering outside click
        userProfileCardButtonRef.current &&
        !userProfileCardButtonRef.current.contains(event.target as Node)
      ) {
        setIsUserProfileCardOpen(false);
      }
    };

    if (isUserProfileCardOpen) {
      document.addEventListener("mousedown", handleClickOutsideProfileCard);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideProfileCard);
    };
  }, [isUserProfileCardOpen]);

  return (
    <header
      className={`${isMobileMenuOpen && isMobile ? "rounded-t-xl" : "rounded-b-xl"} ${isUserProfileCardOpen ? "rounded-bl-none" : ""} bg-background/20 text-body-regular text-background border-secondary-light header-breakpoint:px-[30px] absolute z-50 flex w-full items-center justify-between border px-5 py-5`}
    >
      <div className="flex items-center gap-3">
        {/* Menu Button */}
        <button
          ref={menuButtonRef}
          className="header-breakpoint:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <Link href="/">
          <Image
            src="/logo-ar-150-50.png"
            alt="Logo"
            width={150}
            height={50}
            className="header-breakpoint:w-[150px] -mt-1.5 block w-24 object-contain"
          />
        </Link>
      </div>

      {isMobile ? (
        <HeaderNavMobile
          navRef={headerNavMobileRef}
          isMobileMenuOpen={isMobileMenuOpen}
          navLinks={Object.values(headerInfo?.nav_links || [])}
          ctaButtonData={headerInfo?.cta_button}
        />
      ) : (
        <HeaderNav navLinks={Object.values(headerInfo?.nav_links || [])} />
      )}

      <Link
        href={headerInfo?.cta_button.href || "/contact"}
        className="btn-primary hidden p-3 xl:block"
      >
        {headerInfo?.cta_button.text || "ابدأ استثمارك"}
      </Link>

      <div className="flex items-center gap-3">
        <Link href="https://wa.me/9660554910233" target="_blank">
          <Image
            src="/logos/whatsapp.webp"
            alt="whatsapp logo"
            width={20}
            height={20}
            className=""
          />
        </Link>

        {/* Search Link */}
        <Link href="/search">
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
        </Link>

        {/* User Button */}
        <button
          ref={userProfileCardButtonRef}
          onClick={() => setIsUserProfileCardOpen((prev) => !prev)}
        >
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

      {isUserProfileCardOpen && <HeaderProfileCard cardRef={userProfileCardRef} />}
    </header>
  );
}
