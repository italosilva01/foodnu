"use client"
import { useFilter } from "@/app/context/FilterContext";
import { DishCardGrid } from "../../organisms/DishCardGrid";
import { use, useEffect, useState } from "react";
import { getFilteredFoods } from "@/app/services/api";

export const DishesLoader = () => {
    const { filteredDishes, filters } = useFilter();
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const response = use(filteredDishes);
    const [dishes, setDishes] = useState(response.data)

    const handleLoadMore = async () => {
        setIsLoading(true);
        try {
            const nextPage = page + 1;
            const response = await getFilteredFoods(filters, nextPage);
            setDishes((oldState) => [...oldState, ...response.data])
            setPage(nextPage);
            setHasMore(dishes.length > response.pagination.totalItems);

        } finally {
            setIsLoading(false);
        }
    };


    useEffect(() => {
        setDishes(response.data);
    }, [response]);

    return <div className="flex flex-col w-full !mx-auto ">

        <DishCardGrid dishes={dishes} onLoadMore={handleLoadMore} isLoading={isLoading} hasMore={hasMore} />
    </div>
}
