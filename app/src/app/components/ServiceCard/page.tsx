"use client";
import Image from "next/image";
import logo from "@/public/logo.svg";
import Link from "next/link";

export interface props {
  icon: string;
  title: string;
  link: string;
}
export default function ServiceCard({ title, link }: props) {
  return (
    <Link
      href={`/tutorial/${link}`}
      className="flex flex-col items-center w-[9.75rem] gap-2 p-2             hover:bg-[#e7f6ffaf]"
    >
      <div></div>
      <Image src={logo} alt={title} className="h-[5rem] w-[5rem]" />
      <span className="text-blue text-center">{title}</span>
    </Link>
  );
}
