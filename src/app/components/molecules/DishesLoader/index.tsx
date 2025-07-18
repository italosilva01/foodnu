"use client"
import { DishCardGrid } from "@organisms/DishCardGrid";
import { usePagination } from "@/app/hoocks/usePagination";
import { useEffect } from "react";

export const DishesLoader = () => {
    const { dishes, handleLoadMore, isLoading } = usePagination()
    useEffect(() => {
        console.log("isLoading", isLoading)
    }, [isLoading])
    if (
        isLoading
    ) {
        return <div className="flex justify-center items-center !size-full w-full !mx-auto lg:min-w-full lg:w-[1095px]">
            Loading...
        </div>
    }

    return <div className="flex flex-col w-full !mx-auto ">
        <DishCardGrid dishes={dishes} onLoadMore={handleLoadMore} isLoading={isLoading} hasMore={false} />
    </div>
}
