'use client'

import { useEffect, useState, useTransition } from "react"
import { Food, getFilteredByCategoryFoods } from "@/app/services/api"
import { DishCardMinInfo } from "@molecules/DishCardMinInfo"

interface SimilarDishesProps {
    dish: Food | undefined
}

export const SimilarDishes = ({ dish }: SimilarDishesProps) => {
    const [similarDishes, setSimilarDishes] = useState<Food[]>([]);
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        if (!dish) return;

        startTransition(async () => {
            try {
                const { data } = await getFilteredByCategoryFoods([dish.category]);
                const filtered = data?.filter(item => item.id !== dish.id) || [];
                setSimilarDishes(filtered);
            } catch (error) {
                console.error("Erro ao buscar pratos similares:", error);
                setSimilarDishes([]);
            }
        });
    }, [dish]);

    if (!dish) return null;

    return (
        <div className="h-48">
            {isPending ? (
                <div className="h-full bg-gray-200 rounded-md animate-pulse flex flex-col">
                    <div className="h-10 bg-gray-400 w-[210px] mt-5 ml-3 rounded-md" />
                    <div className="h-[60px]" />
                </div>
            ) : (
                <div className="flex flex-col gap-4 max-w-full">
                    <h2 className="text-2xl font-semibold border-b border-gray-300 w-fit pb-2">
                        Pratos Similares
                    </h2>
                    <div className="w-full flex flex-row gap-3 overflow-x-auto pb-2">
                        {similarDishes.length > 0 ? (
                            similarDishes.map((item) => (
                                <div key={item.id} className="flex-shrink-0">
                                    <DishCardMinInfo dish={item} />
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-600">Nenhum prato similar encontrado.</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
