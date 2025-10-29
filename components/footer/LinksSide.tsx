import { getServices } from "@/utils/getServices";
import Link from "next/link";

export default async function LinksSide() {
  const servicesList = await getServices();

  const navLinks = [
    {
      id: 1,
      title: "الصفحة الرئيسية",
      href: "/",
    },
    {
      id: 2,
      title: "عن ذا كابيتال",
      href: "/about",
    },
    {
      id: 3,
      title: "خدماتنا",
      href: "/services",
    },
    {
      id: 4,
      title: "مشاريعنا",
      href: "/projects",
    },
    {
      id: 5,
      title: "أخبارنا",
      href: "/news",
    },
    {
      id: 7,
      title: "تواصل معنا",
      href: "/contact",
    },
  ];

  return (
    <div className="grid gap-12 md:grid-cols-3">
      <div>
        <h3 className="text-sub-heading text-background mb-6">روابط سريعة</h3>
        <ul className="text-body-small flex flex-col gap-3 text-[#CCD1D2]">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-sub-heading text-background mb-6">الخدمات</h3>
        <ul className="text-body-small flex flex-col gap-3 text-[#CDD2D3]">
          {servicesList.map((service) => (
            <li key={service.id}>
              <Link href="#">{service.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-sub-heading text-background mb-6">روابط سريعة</h3>
        <ul className="text-body-small flex flex-col gap-3 text-[#CDD2D3]">
          <li>
            <Link href="#">الرئيسية</Link>
          </li>
          <li>
            <Link href="#">الرئيسية</Link>
          </li>
          <li>
            <Link href="#">الرئيسية</Link>
          </li>
          <li>
            <Link href="#">الرئيسية</Link>
          </li>
          <li>
            <Link href="#">الرئيسية</Link>
          </li>
          <li>
            <Link href="#">الرئيسية</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
