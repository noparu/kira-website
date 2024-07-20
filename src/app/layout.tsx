import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import HomeIcon from "@/components/icon/homeIcon";
import PenClipIcon from "@/components/icon/penClipIcon";
import BookIcon from "@/components/icon/bookIcon";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* navbar */}
        <div className="w-full flex items-center gap-3 absolute left-0 top-0 p-2 z-20">
          <Link href={"/"} className='cursor-pointer opacity-35 hover:opacity-100 transition'><HomeIcon /></Link>
          <Link href={"/write"} className='cursor-pointer opacity-35 hover:opacity-100 transition'><PenClipIcon /></Link>
          <Link href={"/book"} className='cursor-pointer opacity-35 hover:opacity-100 transition'><BookIcon /></Link>
        </div>{children}
        <ToastContainer /></body>
    </html>
  );
}
