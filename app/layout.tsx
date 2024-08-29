import type { Metadata } from "next";
import { Bricolage_Grotesque, Oswald } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import GreenEffect from "@/components/visualEffect/GreenEffect";
import Cursor from "@/components/cursor/Cursor";

const mainFont = Bricolage_Grotesque({ subsets: ["latin"] });
const oswaldFont = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: "Abdullah Al Sayad",
  description:
    "I am Abdullah Al Sayad is a Profresonal mern stack develeoper based on Bangladesh. it is my offical portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(mainFont.className, oswaldFont.variable)}>
        <GreenEffect />
        <Cursor color="#fff" />
        {children}
      </body>
    </html>
  );
}
