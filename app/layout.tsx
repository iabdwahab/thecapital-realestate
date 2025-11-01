import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Index";
import Header from "@/components/header/Index";
import { getHeaderInfo } from "@/utils/getHeaderInfo";

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
      <body className={` ${cairo.className} relative min-h-screen antialiased`}>
        <Header headerInfo={headerInfo} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
