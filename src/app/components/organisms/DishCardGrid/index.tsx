"use client"
import { DishCard } from "@molecules/DishCard";
import { useEffect, useRef } from "react";
import { Food } from "@services/api";

interface DishCardGridProps {
    dishes: Food[];
    isLoading: boolean;
    onLoadMore: () => void;
    hasMore: boolean;
}

export const DishCardGrid: React.FC<DishCardGridProps> = ({ dishes,
    onLoadMore,
    isLoading = false,
    hasMore = true }) => {
    const observerTarget = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore && !isLoading) {
                onLoadMore();
            }
        }, {
            threshold: 0.1
        });

        if (observerTarget.current) {
            observer.observe(observerTarget.current)
        }

        return () => { observer.disconnect() };
    }, [hasMore, isLoading, onLoadMore]);
    return (
        <div className="w-full h-full ld:h-[calc(100vh-200px)] xl:h-[calc(100vh)] overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-fit max-w-[1095px] lg:min-w-full mx-auto">
                {dishes.map(({ id, name, image, price, tags, category }) => {
                    const firstTag = tags[0];
                    const firstCategory = category
                    return (
                        <DishCard key={id} image={image} title={name} price={price} tag={firstTag} category={firstCategory} />
                    )
                })}
            </div>
            <div ref={observerTarget} className="h-20 w-full flex justify-center items-center" > {isLoading && (
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
            )}</div>

        </div >
    );
};
