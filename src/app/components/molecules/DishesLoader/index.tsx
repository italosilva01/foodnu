"use client"
import { use, useEffect, useState } from "react";
import { DishCardGrid } from "@organisms/DishCardGrid";
import { getFilteredFoods } from "@/app/services/api";
import { useFilters } from "@/store/useFilterStore";

export const DishesLoader = ({ dishesPromise }: { dishesPromise: Promise<PaginatedResponse<Food>> }) => {
    const filters = useFilters();

    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const [dishes, setDishes] = useState(response.data)


    const handleLoadMore = async () => {
        setIsLoading(true);
        try {
            const response = await getFilteredFoods(filters, page + 1);
            setDishes((oldState) => [...oldState, ...response.data])
            setPage(page + 1);
            setHasMore(!((dishes.length + response.data.length) >= response.pagination.totalItems));

        } finally {
            setIsLoading(false);
        }
    };



    useEffect(() => {
        console.log(hasMore)
    }, [hasMore])


    return <div className="flex flex-col w-full !mx-auto ">
        <DishCardGrid dishes={dishes} onLoadMore={handleLoadMore} isLoading={isLoading} hasMore={hasMore} />
    </div>
}
