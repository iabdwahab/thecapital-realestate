import Link from "next/link";

export default function HeaderNav() {
  const navLinks = [
    {
      id: 0,
      text: "الصفحة الرئيسية",
      href: "/",
    },
    {
      id: 1,
      text: "عن ذا كابيتال",
      href: "/about",
    },
    {
      id: 2,
      text: "خدماتنا",
      href: "/services",
    },
    {
      id: 3,
      text: "مشاريعنا",
      href: "/projects",
    },
    {
      id: 4,
      text: "أخبارنا",
      href: "/news",
    },
    {
      id: 5,
      text: "الشركاء والمستثمرون",
      href: "/partners",
    },
    {
      id: 6,
      text: "تواصل معنا",
      href: "/contact",
    },
  ];

  return (
    <nav className="hidden xl:block">
      <ul className="flex items-center gap-6">
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
