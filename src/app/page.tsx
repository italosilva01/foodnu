import { DishCardGrid } from "@organisms/DishCardGrid";
import { getAllFoods } from "@services/api";

export default function Home() {
  const dishes = getAllFoods();
  return (
    <main>
      <div className="flex  gap-4 border"  >
        teste
        <div className="border border-red-500">
          teste
        </div>
      </div>
      <DishCardGrid dishes={dishes} />
    </main>
  );
}
