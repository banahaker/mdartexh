import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Noto_Sans_TC } from "next/font/google";

import HeaderBar from "@/components/home/HeaderBar";

import "@/styles/global.scss";

const inter = Inter({ subsets: ["latin"] });
const notoSansTC = Noto_Sans_TC({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "明道中學高中美展 7th",
  description: "明道中學高中美展 7th",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " " + notoSansTC.className}>
        <HeaderBar />
        {children}
      </body>
    </html>
  );
}
