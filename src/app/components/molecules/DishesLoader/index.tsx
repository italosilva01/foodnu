"use client"
import { DishCardGrid } from "@organisms/DishCardGrid";
import { usePagination } from "@/app/hoocks/usePagination";



export const DishesLoader = () => {
    const { dishes, handleLoadMore, isLoading } = usePagination()

    return <div className="flex flex-col w-full !mx-auto ">
        <DishCardGrid dishes={dishes} onLoadMore={handleLoadMore} isLoading={isLoading} hasMore={false} />
    </div>
}
