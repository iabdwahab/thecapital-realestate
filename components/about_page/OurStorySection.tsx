import Image from "next/image";

function OurStorySection() {
  return (
    <section className="grid gap-12 lg:grid-cols-2">
      <div>
        <h2 className="text-sub-heading lg:text-heading text-primary mb-3">قصتنا</h2>
        <p className="text-body-small lg:text-body-large text-primary-light mb-8 text-justify opacity-80">
          في بدايتنا، لم تكن The Capital مجرد فكرة لتأسيس شركة، بل كانت رؤية ُولدت من إيمانٍ عميق
          بأن الضيافة ليست مشروعًا عقاريًا فحسب، بل قيمة تُبنى وتُعاش. قبل خمس سنوات، بدأنا رحلتنا
          في عالم التطوير الفندقي والسياحي، نحمل شغفًا بالتميز وإصرارًا على أن نكون جزءًا من التحول
          الذي يشهده قطاع الضيافة في المملكة. منذ الخطوة الأولى، لم نبحث عن التوسع فقط، بل عن الفرق
          — عن التجربة التي تُحدث أثًرا، والمشاريع التي تترك بصمة. صممنا، طورنا، وأدرنا مشاريع تجمع
          بين الفكر الاستثماري الذكي واللمسة الإنسانية في الضيافة، لنقدّم نموذجًا جديدًا يُوازن بين
          الجمال والتشغيل، بين الفكرة والعائد. واليوم، بعد خمس سنوات من التجربة والخبرة، نؤمن أن
          المستقبل في تمكين الأفراد ليكونوا جزءًا من هذا القطاع المتنامي. لذلك، طوّرت The
          Capitalحلولًا استثمارية فندقية برأس مال منخفض وعوائد مجزية، تمنح المستثمرين الأفراد فرصة
          الدخول إلى عالم الضيافة بثقة ووضوح، ليعيشوا تجربة استثمارية حقيقية، لا مجرد رقم في محفظة.
          نكتب قصتنا كل يوم بمشاريع جديدة، وشركاء يؤمنون كما نؤمن أن الفندقة ليست بناًء فحسب، بل
          بناءٌ تجربةٍ تُروى.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/placeholders/news.jpg"
          alt="Hero Image"
          width={1024}
          height={1024}
          className="border-secondary-light w-full max-w-full rounded-xl border object-cover"
        />

        <Image
          src="/logos/vision_2030.png"
          alt="Vision 2030 Logo"
          width={238}
          height={162}
          className="max-w-[200px] -translate-y-1/2 rounded-xl object-cover shadow-lg"
        />
      </div>
    </section>
  );
}
export default OurStorySection;
