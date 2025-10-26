import { getServices } from "@/utils/getServices";
import Link from "next/link";

export default async function LinksSide() {
  const servicesList = await getServices();

  return (
    <div className="grid gap-12 md:grid-cols-3">
      <div>
        <h3 className="text-sub-heading text-background mb-6">روابط سريعة</h3>
        <ul className="text-body-small flex flex-col gap-3 text-[#CCD1D2]">
          <li>
            <Link href="#">الرئيسية</Link>
          </li>
          <li>
            <Link href="#">الرئيسية</Link>
          </li>
          <li>
            <Link href="#">الرئيسية</Link>
          </li>
          <li>
            <Link href="#">الرئيسية</Link>
          </li>
          <li>
            <Link href="#">الرئيسية</Link>
          </li>
          <li>
            <Link href="#">الرئيسية</Link>
          </li>
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
        <h3 className="text-sub-heading text-background mb-6">روابط سريعة</h3>
        <ul className="text-body-small flex flex-col gap-3 text-[#CDD2D3]">
          <li>
            <Link href="#">الرئيسية</Link>
          </li>
          <li>
            <Link href="#">الرئيسية</Link>
          </li>
          <li>
            <Link href="#">الرئيسية</Link>
          </li>
          <li>
            <Link href="#">الرئيسية</Link>
          </li>
          <li>
            <Link href="#">الرئيسية</Link>
          </li>
          <li>
            <Link href="#">الرئيسية</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
