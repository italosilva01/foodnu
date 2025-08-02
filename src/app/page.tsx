
import { DishesLoader } from "./components/molecules/DishesLoader";
import { getAllFoods } from "./services/api";
import { LIMIT_PER_PAGE } from "./utils/constants/constants";
import { Suspense, useMemo } from "react";

export default function Home() {
  const initialDishesPromise = useMemo(async () => {
    const response = await getAllFoods(LIMIT_PER_PAGE, 1)
    return response
  }, [])

  return (
    <div className="flex flex-col pl-3 w-full lg:p-0 !mx-auto justify-start">
      <div className="flex flex-col w-full !mx-auto ">
        <Suspense fallback={<div>italo...</div>}>
          <DishesLoader initialDishesPromise={initialDishesPromise} />
        </Suspense>
      </div>
    </div>
  );
}
