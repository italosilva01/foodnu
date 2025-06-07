"use client"
import { Dish } from "@/app/types/types";
import { DishCard } from "@molecules/DishCard";
import { use } from "react";

interface DishCardGridProps {
    promisseDishes: Promise<Dish[]>;
}

export const DishCardGrid: React.FC<DishCardGridProps> = ({ promisseDishes }) => {
    const dishes = use(promisseDishes);
    return (
        <div className="size-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-fit max-w-[1095px] lg:min-w-full mx-auto ">
            {dishes.map(({ id, name, image }) => (
                <DishCard key={id} image={image} title={name} />
            ))}
        </div>
    );
};
