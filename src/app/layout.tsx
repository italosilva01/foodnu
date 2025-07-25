import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { Header } from "@molecules/Header";
import { Footer } from "@molecules/Footer";
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
        <Header />
        <main className="">
          <div className="flex flex-col w-full 2xl:!max-w-[1920px] lg:flex-row mx-auto gap-3">
            <Filter />
            <div className="w-full lg:mx-auto">
              {children}
            </div>
          </div>
        </main>
        <Footer />
      </body>
    </html >
  );
}
