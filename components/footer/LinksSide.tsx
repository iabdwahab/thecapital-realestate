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
              <Link href="#">{service.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-sub-heading text-background mb-6">تواصل معنا</h3>
        <ul className="text-body-small flex flex-col gap-3 text-[#CDD2D3]">
          <li className="flex items-center gap-3">
            <span>
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
            </span>

            <span>{contactInfo?.location}</span>
          </li>

          <li className="flex items-center gap-3">
            <span>
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
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </span>
            <span>{contactInfo?.phone_number}</span>
          </li>

          <li className="flex items-center gap-3">
            <span>
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
            </span>
            <span>{contactInfo?.working_hours}</span>
          </li>
          <li className="flex items-center gap-3">
            <span>
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
            </span>
            <span>{contactInfo?.email}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
