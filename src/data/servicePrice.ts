export interface ServicePrice {
  id: number;
  name: string;
  price: number;
  description: string;
  image?: string;
}

export const servicePrices: ServicePrice[] = [
  {
    id: 1,
    name: "Haircut",
    price: 20,
    description:
      "Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec.",
  },
  {
    id: 2,
    name: "Trimming",
    price: 15,
    description:
      "Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec.",
  },
  {
    id: 3,
    name: "Shaving",
    price: 15,
    description:
      "Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec.",
  },
  {
    id: 4,
    name: "Facial",
    price: 20,
    description:
      "Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec.",
  },
];
