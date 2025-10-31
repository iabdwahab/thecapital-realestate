import ButtonPrimaryArrow from "@/components/global/ButtonPrimaryArrow";
import { getSummarySectionData } from "@/utils/getSummarySectionData";
import Image from "next/image";

export default async function SummarySection() {
  const fetchedData = await getSummarySectionData();

  return (
    <div className="relative grid gap-6 lg:grid-cols-[1.2fr_1fr]">
      <div>
        <h2 className="text-sub-heading lg:text-heading text-primary mb-3">
          {fetchedData?.title || "نبذة عن الشركة"}
        </h2>
        <div
          className="text-body-small lg:text-body-large text-primary-light mb-8 flex flex-col gap-1 text-justify opacity-80"
          dangerouslySetInnerHTML={{ __html: fetchedData?.description || "" }}
        ></div>

        <ButtonPrimaryArrow
          text={fetchedData?.section_button.text || "اقرأ المزيد"}
          href={fetchedData?.section_button.href || "/about"}
        />
      </div>

      <div className="flex justify-end lg:justify-center">
        <Image
          src={fetchedData?.image || "/home_page/summary-hero.png"}
          alt="Summary Values Image"
          width={380}
          height={680}
          className="object-cover"
        />
      </div>

      <span className="absolute bottom-0 left-0 h-1/2 w-[200%] -translate-x-1/2 translate-y-2/3 bg-[#D0D8DF] blur-2xl lg:w-full lg:translate-y-1/2"></span>
    </div>
  );
}
