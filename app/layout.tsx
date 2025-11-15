import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Index";
import Header from "@/components/header/Index";
import { getHeaderInfo } from "@/utils/getHeaderInfo";
import NextTopLoader from "nextjs-toploader";
import Link from "next/link";
import Image from "next/image";

const cairo = Cairo({
  variable: "--font-cairo",
  weight: ["300", "400", "600", "700", "800", "900"],
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "ذا كابيتال - The Capital",
  description: `تأسست ذا كابيتال برؤية طموحة تهدف إلى إعادة تعريف مفهوم الاستثمار العقاري عبر تقديم نماذج ومنتجات استثمارية مبتكرة وموثوقة، تمنح الأفراد والمستثمرين فرصًا عملية وآمنة للدخول في القطاع العقاري.`,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerInfo = await getHeaderInfo();

  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
      </head>

      <body className={` ${cairo.className} relative min-h-screen antialiased`}>
        {/* WhatsApp Icon */}
        <Link
          href="https://wa.me/9660554910233"
          className="fixed right-5 bottom-5 z-50 hover:opacity-90"
        >
          <Image
            src="/logos/whatsapp.webp"
            alt="whatsapp logo"
            width={60}
            height={60}
            className=""
          />
        </Link>

        <NextTopLoader color="#f8f8f8" height={5} />
        <Header headerInfo={headerInfo} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
