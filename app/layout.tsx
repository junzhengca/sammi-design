import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { MainLayout } from "@/components/layouts/MainLayout";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sammi Li",
  description: "Welcome to Sammi Li's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} antialiased`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
