import { NavLink } from "@/types/headerInfo";
import Link from "next/link";

interface Props {
  navLinks: NavLink[];
  isMobileMenuOpen: boolean;
}

export default function HeaderNavMobile({ navLinks, isMobileMenuOpen }: Props) {
  return (
    <nav
      className={`${isMobileMenuOpen ? "" : "hidden"} border-secondary-light bg-background/20 text-background absolute top-full left-0 w-full rounded-b-xl border p-5`}
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
