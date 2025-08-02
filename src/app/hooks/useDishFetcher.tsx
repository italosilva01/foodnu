import { useFilter } from "@/store/useFilterStore";
import { getAllFoods, getFilteredFoods } from "../services/api";
import { LIMIT_PER_PAGE } from "../utils/constants/constants";

export const useDishFetcher = () => {
    const filter = useFilter();

    const fetchInitialDishes = async (page: number) => {
        if (filter === '') {
            return getAllFoods(LIMIT_PER_PAGE, page);
        }
        return getFilteredFoods(filter, page);
    }
    const fetchFilteredDishes = async (page: number) => {
        return getFilteredFoods(filter, page);
    }

    return { fetchInitialDishes, fetchFilteredDishes }
}