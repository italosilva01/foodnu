import { DishCardGrid } from "@organisms/DishCardGrid";
import { getAllFoods } from "@services/api";

export default function Home() {
  const dishes = getAllFoods();
  return (
    <main>
      <DishCardGrid dishes={dishes} />
    </main>
  );
}
