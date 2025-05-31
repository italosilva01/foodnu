"use"

import { Dish } from "@/app/types/types";
import { DishCard } from "@molecules/DishCard";

interface DishCardGridProps {
    dishes: Dish[];
}

export const DishCardGrid: React.FC<DishCardGridProps> = ({ dishes }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {dishes.map(({ id, name, image }) => (
                <DishCard key={id} image={image} title={name} />
            ))}
        </div>
    );
};
