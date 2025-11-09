"use client";

import { NavLink } from "@/types/headerInfo";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  navLinks: NavLink[];
}

export default function HeaderNav({ navLinks }: Props) {
  const currentPath = usePathname();

  return (
    <nav className="header-breakpoint:block hidden">
      <ul className="flex items-center gap-6">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className={`${currentPath === link.href ? "border-b font-semibold" : ""}`}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
