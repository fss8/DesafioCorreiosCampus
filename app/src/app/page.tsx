"use client";

import { useEffect, useState } from "react";
import ServiceCard from "./components/ServiceCard/page";
import { IService } from "@/interfaces/service";
import Chat from "./chat/page";
import { CorreiosService, CorreiosServices } from "@/lib/data";
import threeDots from "@/public/icons/tree-dots.svg";
import Image from "next/image";

export default function Home() {
  const maxMinimizedItems = 7;
  const [showedServices, setShowedServices] = useState<CorreiosService[]>([]);
  const [isMinimized, setIsMinimized] = useState(true);
  const services = [
    {
      title: "Preços e Prazos",
      link: "delivery",
    },
    {
      title: "Preços e Prazos internacionais",
      link: "delivery",
    },
    {
      title: "Entrega",
      link: "delivery",
    },
  ];

  useEffect(() => {
    if (isMinimized) {
      const filteredServices: CorreiosService[] = [];

      CorreiosServices.forEach((service, i) => {
        if (i < maxMinimizedItems) filteredServices.push(service);
      });
      setShowedServices(filteredServices);
    } else {
      setShowedServices(CorreiosServices);
    }
  }, [isMinimized]);

  function handleServicesGrid() {
    if (isMinimized) {
      setIsMinimized(false);
      return;
    }
    setIsMinimized(true);
  }

  return (
    <div className="">
      <main className="mt-20">
        <h1 className="font-bold text-[2rem] text-blue">Correios Assistente</h1>
        <div className="mt-5 flex flex-col">
          <div className="flex gap-8 flex-wrap">
            {showedServices.map((service, i) => (
              <ServiceCard
                key={i}
                title={service.title}
                icon=""
                link={service.slug}
              />
            ))}
            <button
              className="p-4 rounded-md flex items-center flex-col"
              onClick={handleServicesGrid}
            >
              <Image src={threeDots} />
              <span className="text-blue">
                {isMinimized ? "Mostrar mais" : "Mostrar menos"}
              </span>
            </button>
          </div>
        </div>
        <Chat />
      </main>
    </div>
  );
}
