"use client"
import { useFilters } from "@/store/useFilterStore";
import { useEffect, useState } from "react";
import { Food, getFilteredFoods } from "../services/api";

export const usePagination = () => {
    const filters = useFilters();
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const [dishes, setDishes] = useState<Food[]>([])

    const handleLoadMore = async () => {
        setIsLoading(true);
        try {
            const response = await getFilteredFoods(filters, page + 1);
            setDishes((oldState) => [...oldState, ...response.data])
            setPage(page + 1);
            // setHasMore(!((dishes.length + response.data.length) >= response.pagination.totalItems));
        } finally {
            setIsLoading(false);
        }
    };

    const initialDishes = async () => {
        setIsLoading(true)
        const response = await getFilteredFoods([], page)
        setDishes(response.data)
        setIsLoading(false)
    }
    useEffect(() => {
        initialDishes()
    }, [])

    return { dishes, handleLoadMore, isLoading, initialDishes }
}