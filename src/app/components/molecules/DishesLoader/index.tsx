"use client"
import { use } from "react";
import { DishCardGrid } from "@organisms/DishCardGrid";
import { usePagination } from "@/app/hooks/usePagination";
import { Food, PaginatedResponse } from "@/app/services/api";
import { useFilter } from "@/store/useFilterStore";

export const DishesLoader = ({ initialDishesPromise }: { initialDishesPromise: Promise<PaginatedResponse<Food>> }) => {
    const { dishes, handleLoadMore, isLoading } = usePagination()
    const filter = useFilter()
    const initialDishes = use(initialDishesPromise)
    if (
        isLoading
    ) {
        return <div className="flex justify-center items-center !size-full w-full !mx-auto lg:min-w-full lg:w-[1095px] lg:h-full">
            Loading...
        </div>
    }

    return <div className="flex flex-col w-full !mx-auto">
        <DishCardGrid dishes={filter === '' ? initialDishes.data : dishes} onLoadMore={handleLoadMore} isLoading={isLoading} hasMore={false} />
    </div>
}
