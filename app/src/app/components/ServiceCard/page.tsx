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
    <Link href={`/tutorial/${link}`} className="flex flex-col">
      <Image src={logo} alt={title} />
      <span>{title}</span>
    </Link>
  );
}
