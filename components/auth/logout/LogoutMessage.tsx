import BlurryCirlce from "@/components/global/BlurryCirlce";
import Image from "next/image";
import Link from "next/link";

export default function LogoutMessage() {
  return (
    <main className="text-background bg-primary relative z-10 overflow-hidden text-center">
      <BlurryCirlce className="top-0 left-0 -translate-1/2" />
      <BlurryCirlce className="right-0 bottom-0 translate-1/2" />

      <div className="container flex min-h-screen flex-col items-center justify-center">
        <div>
          <Image src="/logo-aren.png" alt="The Capital Logo" width={206} height={52} />
        </div>
        <h1 className="text-hero md:text-hero mb-2">تم تسجيل الخروج بنجاح</h1>
        <p className="text-body-large md:text-sub-heading mb-16 max-w-[800px]">
          نتطلع لرؤيتك مرة أخرى قريبًا
        </p>

        <Link href="/" className="btn-secondary w-sm max-w-full">
          الذهاب إلى الصفحة الرئيسية
        </Link>
      </div>
    </main>
  );
}
