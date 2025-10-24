import SectionTitleDescription from "@/components/global/SectionTitleDescription";
import Image from "next/image";

export default function SummarySection() {
  return (
    <div className="relative grid gap-6 lg:grid-cols-2">
      <div>
        <SectionTitleDescription
          title="نبذة عن الشركة"
          description="تأسســت ذا كابيتـــــــــالبرؤيـة طموحـة تهدف إلى إعــادة تعريــف مفهــوم
            الاســتثمار العقــاري عبــر تقديـم نمـاذج ومنتجات استثمـــــــارية مبتكــــــرة وموثوقــة
            تمنــح الأفــراد والمستثمريــــــــن فرصًـا عمليـة وآمنـة للدخـول في القطــاع العقـــــاري.
            نحــن نؤمــن أن العقــار ليـس مجـرد أصـل ثابـت،بــل هــو أداة اســتراتيجية لبنــاء الثــروة وتحقيــق الاســتدامة المـــــــــالية،لذلــك قمنـــــا بتصميــم منتجــــــــات اســتثماريــــة تراعـــــــي احتياجــــــــات الأفـــــــــــراد وتضمــــــن لهــم تجربــة اســتثمارية ثرية ومتميزة تنســجم حلولنــــــــا مــع تطلعــــــــات الســـــــوق وتـــــواكب مســتهدفات رؤيــــــــــــة المملكــــــــة 2030 في دعــم اقتصــاد متنوع ومستدام."
        />

        <button className="btn-primary flex items-center gap-2">
          <span>اقرأ المزيد</span>
          <span>
            <Image
              src="/icons/arrow-up.svg"
              alt="Arrow Icon"
              width={20}
              height={20}
              className="-rotate-90"
            />
          </span>
        </button>
      </div>

      <div className="flex justify-end">
        <Image
          src="/home_page/summary-hero.png"
          alt="Summary Values Image"
          width={600}
          height={700}
          className="f-fit object-cover"
        />
      </div>

      <span className="absolute bottom-0 left-0 h-1/2 w-full translate-y-2/3 bg-[#D0D8DF] blur-2xl lg:w-1/2 lg:translate-y-1/2"></span>
    </div>
  );
}
