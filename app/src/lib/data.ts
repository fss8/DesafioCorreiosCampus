import time from "@/public/time.png";
import international from "@/public/international.png";
import postal from "@/public/postal.png";
import cpf from "@/public/cpf.png";
import found from "@/public/found.png";
import locker from "@/public/locker.png";
import correio from "@/public/correio.png";
import cep from "@/public/cep.png";

import { StaticImageData } from "next/image";

export interface CorreiosService {
  icon: StaticImageData;
  slug: string;
  title: string;
  steps: Step[];
}

type Step = {
  title: string;
  desc: string;
};

export const CorreiosServices: CorreiosService[] = [
  { 
    icon: time,
    slug: "prices",
    title: "Preços e prazos",
    steps: [
      {
        title: "Fazer coiso coisado",
        desc: "",
      },
    ],
  },
  { 
    icon: international,
    slug: "prices-inter",
    title: "preços e prazos internacionais",
    steps: [
      {
        title: "Script de Calculo",
        desc: "<Realizar o Atendimento Inicial>  <Acessar o link de Preços e Prazos Internacionais:> https://efi.correios.com.br/app/simulaPrecoPrazoInternacional/index.php  ",
      },
    ],
  },
  { 
    icon: postal,
    slug: "dispatch",
    title: "Despacho Postal",
    steps: [
      {
        title: "Informações Gerais",
        desc: "Desde junho de 2014, é realizada a cobrança de Despacho Postal para as encomendas internacionais importadas TRIBUTADAS pela Receita Federal. Exceto Correios Packet",
      },
      {
        title: "Como pagar",
        desc: "Para saber se é necessário pagar o Despacho Postal, consultar o código identificador da encomenda no sistema de rastreamento dos Correios (SRO). Caso conste a informação “aguardando pagamento do despacho postal”, o cliente deverá e clicar no botão “Pagar” para acessar o ambiente Minhas Importações.",
      },
      {
        title: "Confirmação de Pagamento",
        desc: "Após o pagamento, será apresentada a tela de confirmação de pedido, com as informações relativas ao pagamento",
      },
    ],
  },
  { 
    icon: cpf,
    slug: "cpf",
    title: "Ajustes no CPF",
    steps: [
      {
        title: "Fazer coiso coisado",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi ullam neque quae repellat suscipit assumenda voluptates itaque provident, fugiat consequatur optio voluptatibus! Saepe deserunt voluptatibus, perferendis magni libero nisi?",
      },
    ],
  },
  { 
    icon: found,
    slug: "lost&found",
    title: "Achados e Perdidos",
    steps: [
      {
        title: "Fazer coiso coisado",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi ullam neque quae repellat suscipit assumenda voluptates itaque provident, fugiat consequatur optio voluptatibus! Saepe deserunt voluptatibus, perferendis magni libero nisi?",
      },
    ],
  },
  { 
    icon: locker,
    slug: "locker",
    title: "Locker",
    steps: [
      {
        title: "Fazer coiso coisado",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi ullam neque quae repellat suscipit assumenda voluptates itaque provident, fugiat consequatur optio voluptatibus! Saepe deserunt voluptatibus, perferendis magni libero nisi?",
      },
    ],
  },
  { 
    icon: correio,
    slug: "sedex",
    title: "Sedex",
    steps: [
      {
        title: "Fazer coiso coisado",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi ullam neque quae repellat suscipit assumenda voluptates itaque provident, fugiat consequatur optio voluptatibus! Saepe deserunt voluptatibus, perferendis magni libero nisi?",
      },
    ],
  },
  { 
    icon: cep,
    slug: "cep-search",
    title: "Busca CEP",
    steps: [
      {
        title: "Fazer coiso coisado",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi ullam neque quae repellat suscipit assumenda voluptates itaque provident, fugiat consequatur optio voluptatibus! Saepe deserunt voluptatibus, perferendis magni libero nisi?",
      },
    ],
  },
];
