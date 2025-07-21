import { useFilters } from "@/store/useFilterStore";
import { getAllFoods, getFilteredFoods } from "../services/api";
import { LIMIT_PER_PAGE } from "../utils/constants/constants";

export const useDishFetcher = () => {
    const filters = useFilters();

    const fetchInitialDishes = async (page: number) => {
        if (filters.length === 0) {
            return getAllFoods(LIMIT_PER_PAGE, page);
        }
        return getFilteredFoods(filters, page);
    }
    const fetchFilteredDishes = async (page: number) => {
        return getFilteredFoods(filters, page);
    }

    return { fetchInitialDishes, fetchFilteredDishes }
}