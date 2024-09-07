export interface CorreiosService {
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
    slug: "delivery",
    title: "Entrega",
    steps: [
      {
        title: "Fazer coiso coisado",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi ullam neque quae repellat suscipit assumenda voluptates itaque provident, fugiat consequatur optio voluptatibus! Saepe deserunt voluptatibus, perferendis magni libero nisi?",
      },
      {
        title: "Fazer coiso coisado 2",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi ullam neque quae repellat suscipit assumenda voluptates itaque provident, fugiat consequatur optio voluptatibus! Saepe deserunt voluptatibus, perferendis magni libero nisi?",
      },
      {
        title: "Fazer coiso coisado 3",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi ullam neque quae repellat suscipit assumenda voluptates itaque provident, fugiat consequatur optio voluptatibus! Saepe deserunt voluptatibus, perferendis magni libero nisi?",
      },
      {
        title: "Fazer coiso coisado 4",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi ullam neque quae repellat suscipit assumenda voluptates itaque provident, fugiat consequatur optio voluptatibus! Saepe deserunt voluptatibus, perferendis magni libero nisi?",
      },
    ],
  },
  {
    slug: "delivery",
    title: "Entrega",
    steps: [
      {
        title: "Fazer coiso coisado",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi ullam neque quae repellat suscipit assumenda voluptates itaque provident, fugiat consequatur optio voluptatibus! Saepe deserunt voluptatibus, perferendis magni libero nisi?",
      },
    ],
  },
  {
    slug: "delivery",
    title: "Entrega",
    steps: [
      {
        title: "Fazer coiso coisado",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi ullam neque quae repellat suscipit assumenda voluptates itaque provident, fugiat consequatur optio voluptatibus! Saepe deserunt voluptatibus, perferendis magni libero nisi?",
      },
    ],
  },
];
