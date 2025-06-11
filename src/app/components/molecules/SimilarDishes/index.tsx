'use client'

import { use } from "react"
import { Food, getFilteredByCategoryFoods } from "@/app/services/api"
import { DishCardMinInfo } from "@molecules/DishCardMinInfo"

interface SimilarDishesProps {
    dish: Food | undefined
}
export const SimilarDishes = ({ dish }: SimilarDishesProps) => {
    if (!dish) return null;

    const { category } = dish

    const { data: similarDishes } = use(Promise.resolve(getFilteredByCategoryFoods([category])));

    console.log("similarDishes", similarDishes)
    return (
        <div className="flex flex-col gap-4 max-w-full border border-black overflow-x-auto items-start h-fit">
            <h2 className="text-2xl font-semibold border-b border-black w-fit">
                Pratos Similares
            </h2>
            <div className="flex flex-row gap-1 overflow-x-auto max-w-full border border-red-500">
                <div className="bg-black min-size-60">testes</div>
                <div className="bg-black min-size-60">testes</div>
                <div className="bg-black min-size-60">testes</div>
                <div className="bg-black min-size-60">testes</div>
                <div className="bg-black min-size-60">testes</div>
                <div className="bg-black min-size-60">testes</div>
            </div>

        </div >
    )
}
