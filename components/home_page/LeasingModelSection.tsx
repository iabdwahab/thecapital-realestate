import Link from "next/link";
import BlurryCirlce from "../global/BlurryCirlce";
import GradientCardBorder from "../global/GradientCardBorder";

const tracks = [
  {
    label: "المسار الأول",
    title: "الجاهز",
    description: "نستأجر العقارات الفندقية بالكامل من مالكها بعقد موثق ومحدد المدة",
  },
  {
    label: "المسار الثاني",
    title: "التطوير",
    description: "ننتج الأصل الفندقي من الصفر، تصميمًا وتنفيذًا وتجهيزًا كاملاً للتشغيل",
  },
];

const steps = [
  {
    number: "01",
    title: "إعادة التأجير",
    description: "نطرح منفعة الوحدة للمستثمرين، ونوثّق عقدًا مستقلًا باسم كل مستثمر",
  },
  {
    number: "02",
    title: "التشغيل",
    description: "نتولى تشغيل الوحدة يوميًا وإدارتها التشغيلية الكاملة طوال مدة العقد",
  },
  {
    number: "03",
    title: "العائد",
    description: "نوزّع عائد التشغيل الدوري وفق النسبة والمدة المحددة في كل عقد",
  },
];

function TrackCard({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div
      tabIndex={0}
      className="bg-background border-secondary-light group hover:gradient-card-hover-light duration-hover-normal rounded-card-radius relative flex-1 border p-6 transition max-lg:focus:gradient-card-hover-light"
    >
      <GradientCardBorder />
      <span className="text-secondary text-body-small mb-2 block font-semibold">{label}</span>
      <h4 className="text-body-large text-primary mb-2">{title}</h4>
      <p className="text-body-small text-primary-light">{description}</p>
    </div>
  );
}

export default function LeasingModelSection() {
  return (
    <section className="py-section-y-padding container" id="model">
      <div className="mx-auto mb-10 max-w-[800px] text-center">
        <span className="text-secondary text-body-small bg-secondary-light/20 mb-3 inline-block rounded-xl px-4 py-2 font-semibold">
          نموذج التأجير وإعادة التأجير
        </span>
        <h2 className="text-sub-heading lg:text-heading text-primary mb-3">
          مساران لإنتاج الأصل، ومسار واحد للعائد
        </h2>
        <p className="text-body-small lg:text-body-large text-primary-light opacity-80">
          سواء استأجرنا العقار الفندقي أو طوّرناه من الصفر، نمر بنفس مراحل التأجير والتشغيل وإعادة
          التأجير لتحقيق العوائد
        </p>
      </div>

      <div className="mb-10 flex flex-col items-stretch gap-4 md:flex-row md:items-center">
        <TrackCard {...tracks[0]} />

        <div className="bg-secondary text-background text-cta flex size-12 shrink-0 items-center justify-center self-center rounded-full">
          أو
        </div>

        <TrackCard {...tracks[1]} />
      </div>

      <div className="mb-10 flex flex-col items-center gap-3">
        <span className="bg-secondary-light/30 text-primary text-cta rounded-full px-5 py-2">
          يلتقي المساران هنا
        </span>
        <span className="bg-secondary-light h-10 w-[2px]"></span>
      </div>

      <div className="centered-cards-3-parent mb-12">
        {steps.map((step) => (
          <div
            key={step.number}
            tabIndex={0}
            className="centered-cards-3-child bg-background border-secondary-light group hover:gradient-card-hover-light duration-hover-normal rounded-card-radius relative flex flex-col gap-2 border p-6 transition max-lg:focus:gradient-card-hover-light"
          >
            <GradientCardBorder />
            <span className="gradient-bg-inside text-background text-heading rounded-card-radius mb-2 w-fit px-4 py-1 font-bold">
              {step.number}
            </span>
            <h4 className="text-body-large text-primary">{step.title}</h4>
            <p className="text-body-small text-primary-light">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-primary text-background rounded-card-radius relative z-10 flex flex-col items-center justify-between gap-6 overflow-hidden p-8 text-center md:flex-row md:p-10 md:text-right">
        <BlurryCirlce className="top-0 left-0 -translate-1/2" />
        <BlurryCirlce className="right-0 bottom-0 translate-1/2" />

        <div className="relative z-10">
          <h3 className="text-sub-heading mb-2">جهة واحدة، عقد واحد، تشغيل مباشر</h3>
          <p className="text-body-regular text-background/80">
            تتعامل مع جهة واحدة من لحظة التعاقد حتى استلام عائدك
          </p>
        </div>

        <Link
          href="/projects"
          className="btn-primary text-primary relative z-10 w-full bg-white hover:bg-white/90 active:bg-white/80 md:w-fit"
        >
          احجز وحدتك الآن
        </Link>
      </div>
    </section>
  );
}
