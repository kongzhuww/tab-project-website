import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "tab-project · 让新标签页，成为你的日常",
  description: "已上架 Chrome 与 Edge 官方商店的开源新标签页工作台。把常用网站、书签看板、音乐与 Todoist 放在一起，按自己的习惯组织浏览器。",
  verification: {
    google: "um1XqtmpcCLUYGbZWfJEJXpdF3L1ju1iCso4BdlMp8o",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
