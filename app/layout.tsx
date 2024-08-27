import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const mainFont = Bricolage_Grotesque({ subsets: ["latin"] });

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
      <body className={mainFont.className}>{children}</body>
    </html>
  );
}
