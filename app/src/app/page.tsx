"use client";

// import { IService } from "@/interfaces/service";
import { useEffect, useState } from "react";
import ServiceCard from "./components/ServiceCard/page";
import { IService } from "@/interfaces/service";
import Chat from "./chat/page";
// import {}

export default function Home() {
  const maxMinimizedItems = 2;
  const [showedServices, setShowedServices] = useState<IService[]>([]);
  const [isMinimized, setIsMinimized] = useState(true);
  const services = [
    {
      title: "Entrega",
      link: "delivery",
    },
    {
      title: "Entrega",
      link: "delivery",
    },
    {
      title: "Entrega",
      link: "delivery",
    },
  ];

  useEffect(() => {
    console.log("reached");

    if (isMinimized) {
      const filteredServices = services.filter((service, i) => {
        if (i < maxMinimizedItems) return service;
        return false;
      });
      setShowedServices(filteredServices);
    } else {
      setShowedServices(services);
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
        <div className="mt-10 flex flex-col">
          <div className="flex gap-8 flex-wrap">
            {showedServices.map((service, i) => (
              <ServiceCard
                key={i}
                title={service.title}
                icon=""
                link={service.link}
              />
            ))}
            <button
              className="bg-blue p-4 rounded-md"
              onClick={handleServicesGrid}
            >
              {isMinimized ? "Mostrar mais" : "mostrar menos"}
            </button>
          </div>
        </div>
        <Chat />
      </main>
    </div>
  );
}
