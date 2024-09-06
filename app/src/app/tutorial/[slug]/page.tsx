"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const params = useParams<{ slug: string }>();
  useState(() => {
    console.log(params);
  });

  return <h1 className="text-[1.5rem]">{params.slug}</h1>;
}
