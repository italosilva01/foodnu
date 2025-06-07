import { DishCardGrid } from "@organisms/DishCardGrid";
import { getAllFoods } from "@services/api";
import { Filter } from "@molecules/Filter";
import { Suspense } from "react";
import { Dish } from "@/app/types/types";

async function DishesLoader() {
  const promisseDishes = getAllFoods() as Promise<Dish[]>;
  return <DishCardGrid promisseDishes={promisseDishes} />;
}
export default async function Home() {
  return (
    <main>
      <div className="flex gap-4 border !w-full border-red-400"  >
        <Filter />
      </div>
      <Suspense fallback={<div className="flex justify-center items-center size-full lg:max-w-[1095px] lg:w-[944px] lg:h-[44.875rem]">Loading...</div>}>
        <DishesLoader />
      </Suspense>
    </main>
  );
}
