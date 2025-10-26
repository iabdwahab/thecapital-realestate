import Image from "next/image";

export default function PageIntroSection() {
  return (
    <main className="text-background from-primary to-primary-light relative flex min-h-screen flex-col items-center justify-center bg-linear-to-b text-center">
      <div>
        <Image src="/logo-aren.png" alt="The Capital Logo" width={206} height={52} />
      </div>
      <h1 className="text-sub-heading md:text-hero mb-2">خدماتنا</h1>
      <p className="text-body-regular md:text-sub-heading mb-6">
        نقدم مجموعة شاملة من الخدمات العقارية المتكاملة لتلبية جميع احتياجاتكم.
      </p>
      <button className="btn-secondary text-cta min-h-[58px] min-w-[270px]">استكشف حلولنا</button>
    </main>
  );
}
