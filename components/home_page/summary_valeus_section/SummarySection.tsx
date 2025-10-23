import Image from "next/image";

export default function SummarySection() {
  return (
    <div className="lg:grid lg:grid-cols-2">
      <div>
        <h2 className="text-heading text-primary mb-3">نبذة عن الشركة</h2>
        <p className="text-body-large text-primary-light mb-8 text-justify opacity-80">
          تأسســت ذا كابيتـــــــــال برؤيـة طموحـة تهدف إلى إعــادة تعريــف مفهــوم الاســتثمار
          العقــاري عبــر تقديـم نمـاذج ومنتجات استثمـــــــارية مبتكــــــرة وموثوقــة تمنــح
          الأفــراد والمستثمريــــــــن فرصًـا عمليـة وآمنـة للدخـول في القطــاع العقـــــاري.
          <br />
          نحــن نؤمــن أن العقــار ليـس مجـرد أصـل ثابـت،بــل هــو أداة اســتراتيجية لبنــاء
          الثــروة وتحقيــق الاســتدامة المـــــــــالية،لذلــك قمنـــــا بتصميــم منتجــــــــات
          اســتثماريــــة تراعـــــــي احتياجــــــــات الأفـــــــــــراد وتضمــــــن لهــم تجربــة
          اســتثمارية ثرية ومتميزة تنســجم حلولنــــــــا مــع تطلعــــــــات الســـــــوق
          وتـــــواكب مســتهدفات رؤيــــــــــــة المملكــــــــة 2030 في دعــم اقتصــاد متنوع
          ومستدام.
        </p>
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

      <div className="flex justify-center">
        <Image
          src="/home_page/summary-hero.png"
          alt="Summary Values Image"
          width={600}
          height={700}
          className="object-cover"
        />
      </div>
    </div>
  );
}
