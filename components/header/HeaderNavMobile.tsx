import { NavLink } from "@/types/headerInfo";
import Link from "next/link";
import { RefObject } from "react";

interface Props {
  navLinks: NavLink[];
  isMobileMenuOpen: boolean;
  navRef: RefObject<HTMLElement | null>;
}

export default function HeaderNavMobile({ navLinks, isMobileMenuOpen, navRef }: Props) {
  return (
    <nav
      ref={navRef}
      className={`${isMobileMenuOpen ? "" : "hidden"} border-secondary-light bg-background/20 text-background absolute top-full -right-px -left-px rounded-b-xl border border-t-0 p-5`}
    >
      <ul className="flex flex-col gap-2">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className="text-body-small block">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
