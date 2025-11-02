import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { navElements } from "@/shared/data/navElements.data";
import { NavPanel } from "@/app/components/NavPanel";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Профиль пользователя",
  description: "Страница профиля пользователя",
};

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}>
        <NavPanel navElements={navElements} />
        <main className="max-w-5xl mx-auto p-8 pt-28 bg-white rounded-2xl shadow-md mt-10">
          {children}
        </main>
      </body>
    </html>
  );
}
