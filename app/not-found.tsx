import BlurryCirlce from "@/components/global/BlurryCirlce";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="bg-primary gradient-bg-inside text-background relative z-20 flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center">
      <BlurryCirlce className="top-0 right-0 translate-x-1/2 -translate-y-1/2" />
      <BlurryCirlce className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />

      <Image
        src="/shapes/not-found-shape.png"
        alt="Shape"
        width={1440}
        height={680}
        draggable={false}
        className="absolute -z-10 h-full w-full object-cover"
      />

      <Image src="/logo-aren.png" alt="Logo" width={206} height={52} className="mb-6" />
      <Image
        src="/notfound/404.png"
        alt="404 Image"
        width={632}
        height={270}
        draggable={false}
        className="mb-3 w-80 max-w-full select-none md:w-auto md:max-w-md lg:max-w-lg"
      />
      <h1 className="text-sub-heading md:text-heading lg:text-hero mb-2">الصفحة غير موجودة</h1>
      <p>عذراً؛ الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى موقع آخر.</p>
    </main>
  );
}
