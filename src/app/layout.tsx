import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { MenuSideBar } from "@molecules/Menu";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Foodnu",
  description: "Foodnu is a platform for finding and sharing recipes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${mulish.variable} font-mulish antialiased`}
      >
        <div className="flex lg:w-[1440px] justify-center gap-14 ">
          <div className="hidden lg:block">
            <MenuSideBar />
          </div>
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
