"use client";

import { capitalizeFirstLetter } from "@utils/functions";

interface CategoryProps {
    category: string;
}

export const Category = ({ category }: CategoryProps) => {
    return (
        <div className="flex flex-col gap-2 rounded-full w-fit !h-8 text-center justify-center items-center !p-1.5 bg-gray-100 border-1 min-w-14 border-rose-50 hover:bg-rose-50 transition-all duration-300">
            <h1>{capitalizeFirstLetter(category)}</h1>
        </div>
    )
}