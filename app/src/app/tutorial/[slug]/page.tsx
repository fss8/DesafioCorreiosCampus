"use client";

import Chat from "@/app/chat/page";
import { CorreiosService } from "@/lib/data";
import { getServiceById } from "@/lib/services/CorreiosServices";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const params = useParams<{ slug: string }>();

  const [service, setService] = useState<CorreiosService | null>();

  useState(() => {
    if (!params) return;

    const foundService = getServiceById(params.slug)[0];

    if (!foundService) return;
    setService(foundService);
  });

  return (
    <div className="mt-6 grid gap-4 grid-cols-1 lg:grid-cols-2">
      <div className="max-w-1/2">
        <div>
          <h2 className="text-[1.5rem] text-blue">Sistemas</h2>
        </div>
        <h1 className="text-[1.5rem] text-blue font-bold">{service?.title}</h1>

        <div className="grid grid-cols-2 gap-6">
          {service &&
            service.steps?.map((step, i) => (
              <div key={i}>
                <div className="text-blue flex items-center gap-2 bg-yellow p-2 rounded-md">
                  <span className="text-bold text-[2rem]">{i + 1}</span>
                  <div className="font-semibold ">{step.title}</div>
                </div>
                <p className="text-blue break-words">{step.desc}</p>
              </div>
            ))}
        </div>
      </div>
      <aside className="flex flex-col items-end justify-end gap-2">
        <div className="text-blue">Como posso ajudar?</div>
        <Chat />
      </aside>
    </div>
  );
}
