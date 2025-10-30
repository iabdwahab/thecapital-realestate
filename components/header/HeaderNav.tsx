import { NavLink } from "@/types/headerInfo";
import Link from "next/link";

interface Props {
  navLinks: NavLink[];
}

export default async function HeaderNav({ navLinks }: Props) {
  return (
    <nav className="header-breakpoint:block hidden">
      <ul className="flex items-center gap-6">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
