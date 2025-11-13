import { SectionHeadingData } from "@/types/pageHeading";
import SectionTitleDescription from "../global/SectionTitleDescription";
import { getSectionHeading } from "@/utils/getSectionHeading";
import Link from "next/link";
import { getInquiryData } from "@/utils/getInquiryData";
import Image from "next/image";

export default async function InquirySection() {
  const sectionHeadingData: SectionHeadingData | null = await getSectionHeading("inquiry");

  const inquiryData = await getInquiryData();
  return (
    <section className="py-section-y-padding container">
      <SectionTitleDescription
        title={sectionHeadingData?.title || "هل لديك استفسار؟"}
        description={
          sectionHeadingData?.description ||
          "تواصل مع فريقنا للحصول على مزيد من المعلومات حول فرص الشراكة والاستثمار"
        }
      />

      <div className="flex items-center justify-center gap-3">
        {
          <Link
            href={inquiryData?.links.link_1.href || "#"}
            className="btn-primary flex items-center gap-3"
          >
            <span>{inquiryData?.links.link_1.text}</span>
            {inquiryData?.links.link_1.icon ? (
              <Image src={inquiryData.links.link_1.icon} alt="icon" width={20} height={20} />
            ) : (
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
            )}
          </Link>
        }
        {
          <Link
            href={inquiryData?.links.link_2.href || "#"}
            className="btn-secondary text-primary flex items-center gap-3"
          >
            <span>{inquiryData?.links.link_2.text}</span>
            {inquiryData?.links.link_2.icon ? (
              <Image src={inquiryData.links.link_2.icon} alt="icon" width={20} height={20} />
            ) : (
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
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            )}
          </Link>
        }
      </div>
    </section>
  );
}
