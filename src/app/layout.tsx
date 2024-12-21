import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import HomeIcon from "@/components/icon/homeIcon";
import PenClipIcon from "@/components/icon/penClipIcon";
import BookIcon from "@/components/icon/bookIcon";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import InformationIcon from "@/components/icon/informationIcon";
import VolumeIcon from "@/components/icon/volumeIcon";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kira Website",
  description: "The Legend of Kira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* bg-gradient */}
        <div className="fixed left-0 top-0 -z-10 w-full h-dvh bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
        {/* navbar */}
        <div className="w-full flex items-center gap-3 absolute left-0 top-0 p-2 z-20">
          <Link href={"/"} className='cursor-pointer opacity-35 hover:opacity-100 transition'><HomeIcon /></Link>
          <Link href={"/write"} className='cursor-pointer opacity-35 hover:opacity-100 transition'><PenClipIcon /></Link>
          <Link href={"/book"} className='cursor-pointer opacity-35 hover:opacity-100 transition'><BookIcon /></Link>
          <Link href={"/about"} className='cursor-pointer opacity-35 hover:opacity-100 transition ml-[1px]'><InformationIcon /></Link>
          {/* <Link href={"/book"} className='cursor-pointer opacity-35 hover:opacity-100 transition -mb-[1px] -ml-[2px]'><VolumeIcon /></Link> */}
        </div>{children}
        <ToastContainer /></body>
    </html>
  );
}
