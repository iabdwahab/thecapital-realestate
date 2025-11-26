import { NavLink } from "@/types/headerInfo";
import Link from "next/link";
import { RefObject } from "react";

interface Props {
  navLinks: NavLink[];
  isMobileMenuOpen: boolean;
  navRef: RefObject<HTMLElement | null>;
  ctaButtonData?: {
    href: string;
    text: string;
  };
}

export default function HeaderNavMobile({
  navLinks,
  isMobileMenuOpen,
  navRef,
  ctaButtonData,
}: Props) {
  return (
    <nav
      ref={navRef}
      className={`${isMobileMenuOpen ? "" : "hidden"} border-secondary-light bg-background/20 text-background absolute top-full -right-px -left-px rounded-b-xl border border-t-0 p-5`}
    >
      <ul className="flex flex-col gap-2">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className={`text-body-small block`}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href={ctaButtonData?.href || "/contact"}
        className="btn-primary text-body-small mt-4 block w-full px-4 py-2 text-center font-bold"
      >
        {ctaButtonData?.text || "ابدأ استثمارك"}
      </Link>
    </nav>
  );
}
