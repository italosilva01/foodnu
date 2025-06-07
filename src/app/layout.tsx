import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { MenuSideBar } from "@molecules/Menu";
import { FilterProvider } from "./context/FilterContext";

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
        <FilterProvider>
          <div className="flex flex-col lg:flex-row 2xl:max-w-[1980px] mx-auto">
            <div className="hidden lg:block">
              <MenuSideBar />
            </div>
            <main className="mx-auto flex justify-center size-full items-center lg:max-w-[1095px]">
              {children}
            </main>
          </div>
        </FilterProvider>
      </body>
    </html >
  );
}
