import { FooterContactInfo } from "@/types/footerInfo";
import { getServices } from "@/utils/getServices";
import Link from "next/link";

interface Props {
  contactInfo: FooterContactInfo | undefined;
}

export default async function LinksSide({ contactInfo }: Props) {
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

  const contactList = [
    {
      id: 1,
      title: contactInfo?.location,
      icon: (
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
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: contactInfo?.working_hours,
      icon: (
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
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: contactInfo?.email,
      icon: (
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
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-4">
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
              <Link href="/contact">{service.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-sub-heading text-background mb-6">تواصل معنا</h3>
        <ul className="text-body-small flex flex-col gap-3 text-[#CDD2D3]">
          {contactList.map((item) => (
            <li key={item.id} className="flex items-center gap-3">
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
