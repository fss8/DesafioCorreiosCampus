"use client";

import { useEffect, useState } from "react";
import ServiceCard from "./components/ServiceCard/page";
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
        <h1 className="font-bold text-[2rem] text-blue pl-2 md:pl-4">Correios Assistente</h1>
        <div className="mt-5 flex flex-col items-start">
          <div className="flex flex-col pl-4 md:pl-0 items-center">
            <div className="flex gap-4 flex-wrap ">
              {showedServices.map((service, i) => (
                <div
                key={i}
                className="flex flex-row content-between "
                >
                  <ServiceCard
                  icon={service.icon}
                  key={i}
                  title={service.title}
                  link={service.slug}
                />
                </div>
                
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
          
        </div>
        <Chat />
      </main>
    </div>
  );
}
