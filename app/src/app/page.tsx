"use client";

// import { IService } from "@/interfaces/service";
import { useEffect, useState } from "react";
import ChatInput from "./chatInput/page";
import ServiceCard from "./components/ServiceCard/page";
import { IService } from "@/interfaces/service";
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
      <main className="">
        Correios Assistente //
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
          <ChatInput />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
