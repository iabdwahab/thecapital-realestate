import Link from "next/link";

export default function LinksSide() {
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
