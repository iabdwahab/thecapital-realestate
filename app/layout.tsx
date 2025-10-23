import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  weight: ["300", "400", "600", "700", "800", "900"],
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "ذا كابيتال - The Capital",
  description: `تأسست ذا كابيتال برؤية طموحة تهدف إلى إعادة تعريف مفهوم الاستثمار العقاري عبر تقديم نماذج ومنتجات استثمارية مبتكرة وموثوقة، تمنح الأفراد والمستثمرين فرصًا عملية وآمنة للدخول في القطاع العقاري.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={` ${cairo.className} min-h-screen antialiased`}>{children}</body>
    </html>
  );
}
