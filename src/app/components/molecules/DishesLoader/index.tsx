"use client"
import { useFilter } from "@/app/context/FilterContext";
import { DishCardGrid } from "../../organisms/DishCardGrid";

export const DishesLoader = () => {
    const { filteredDishes } = useFilter();
    return <DishCardGrid promisseDishes={filteredDishes} />;
}
