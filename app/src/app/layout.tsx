import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import logo from "@/public/logo.svg";
import govLogo from "@/public/govLogo.png";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Espaço de Trabalho Inteligente - Correios",
  description: "Sistema de espaço de trabalho inteligente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white min-h-screen flex flex-col justify-between`}
      >
        <header className="bg-[#F0F0F0] p-4 shadow-lg text-center">
            <Link href={"/"}>
              <Image src={logo} alt="Correios" />
            </Link>
          </header>
        <div className="p-4">
          
          {children}
        </div>
        <footer className="row-start-3 px-4 flex gap-6  items-center justify-between py-2 bg-yellow">
          <span className="text-blue">Copyright 2024 Correios</span>
          <Image src={govLogo} alt="Correios" />
          <span className="opacity-0">teste</span>
        </footer>
      </body>
    </html>
  );
}
