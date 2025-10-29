import Image from "next/image";
import Link from "next/link";
import InfoSide from "./InfoSide";
import LinksSide from "./LinksSide";
import { getFooterInfo } from "@/utils/getFooterInfo";

export default async function Footer() {
  const footerInfo = await getFooterInfo();

  return (
    <footer className="bg-[url('/footer/footer-bg.png')] bg-cover bg-position-[top_center]">
      <div className="container">
        <div className="grid gap-16 py-8 md:py-32 lg:grid-cols-[auto_1fr] lg:gap-32">
          <InfoSide />
          <LinksSide contactInfo={footerInfo?.contact_info} />
        </div>
      </div>
    </footer>
  );
}
