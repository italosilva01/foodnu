"use client"
import { Filter } from "@molecules/Filter";
import { Suspense, use, useMemo, useState } from "react";
import { getFilteredFoods } from "./services/api";
import { DishCardGrid } from "./components/organisms/DishCardGrid";

export default function Home() {
  const dishesPromise = useMemo(() => getFilteredFoods([], 1), []);
  const { data: dishes } = use(dishesPromise);
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  const handleLoadMore = async () => {
    setIsLoading(true);
    try {
      const response = await getFilteredFoods([], 1);
      setHasMore(!((dishes.length + response.data.length) >= response.pagination.totalItems));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col pl-3 w-full lg:p-0 !mx-auto justify-start">
      <div className="flex gap-4 !w-full m-4 ml-0"  >
        <Filter />
      </div>
      <Suspense fallback={<div className="flex justify-center items-center !size-full w-full !mx-auto lg:min-w-full lg:w-[1095px]">Loading...</div>}>
        <div className="flex flex-col w-full !mx-auto ">
          <DishCardGrid dishes={dishes} onLoadMore={handleLoadMore} isLoading={isLoading} hasMore={hasMore} />
        </div>
      </Suspense>
    </div>
  );
}
