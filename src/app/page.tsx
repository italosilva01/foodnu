import { DishCardGrid } from "@organisms/DishCardGrid";
import { Dish } from "./types/types";

const dishes: Dish[] = [
  {
    id: "1",
    name: "Pizza",
    description: "Deliciosa pizza com queijo e presunto",
    price: 29.90,
    image: "/foods/foodTest.svg",
    category: "Pizzas",
    tags: ["Pizza", "Queijo", "Presunto"]
  },
];

export default function Home() {

  return (
    <main>
      <DishCardGrid dishes={dishes} />
    </main>
  );
}
