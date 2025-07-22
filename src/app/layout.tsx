import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { Header } from "@molecules/Header";
import { Filter } from "./components/molecules/Filter";

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
        className={`${mulish.variable} font-mulish antialiased `}
      >
        <div className="flex flex-col mx-auto">
          <Header />
          <main className="">
            <div className="flex flex-col w-full 2xl:!max-w-[1920px] lg:flex-row">

              <Filter />
              <div className="w-full">
                {children}
              </div>
            </div>
          </main>
        </div>
      </body>
    </html >
  );
}
