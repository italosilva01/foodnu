"use client"
import { useEffect, useState, useTransition } from "react";
import { useFilter } from "@store/useFilterStore";
import { getFilteredFoods } from "@services/api";
import { useDishes, useDishesActions } from "@store/useDishStore";
import { useDishFetcher } from "./useDishFetcher";

export const usePagination = () => {
    const filter = useFilter();
    const dishes = useDishes();
    const { fetchInitialDishes, fetchFilteredDishes } = useDishFetcher();

    const { setDishes } = useDishesActions();
    const [page, setPage] = useState(1)
    const [isLoading, startTransition] = useTransition();

    const handleLoadMore = async () => startTransition(async () => {
        try {
            const response = await getFilteredFoods(filter, page + 1);
            setDishes([...dishes, ...response.data])
            setPage(page + 1);
            // setHasMore(!((dishes.length + response.data.length) >= response.pagination.totalItems));
        } catch (e) {
            console.error("err: ", e)
        }
    });

    const initialDishes = async () => startTransition(async () => {
        console.log('initialDishes')
        const response = await fetchInitialDishes(page)
        setDishes(response.data)
    });

    useEffect(() => {
        handleFetchDishesWithFilters()
    }, [filter])

    const handleFetchDishesWithFilters = async () => startTransition(async () => {
        const res = await fetchFilteredDishes(page)
        setDishes(res.data)
    })

    return { dishes, handleLoadMore, isLoading, initialDishes }
}