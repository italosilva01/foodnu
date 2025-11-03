"use client";
import { DishCard } from "@molecules/DishCard";
import { Food } from "@services/api";
import { useInfiniteScroll } from "@/app/hooks/useinfinityScrol";

interface DishCardGridProps {
  dishes: Food[];
  isLoading: boolean;
  onLoadMore: () => void;
  hasMore: boolean;
}

export const DishCardGrid: React.FC<DishCardGridProps> = ({
  dishes,
  onLoadMore,
  isLoading = false,
  hasMore = true,
}) => {
  const { observerTarget } = useInfiniteScroll({
    hasMore,
    isLoading,
    onLoadMore,
  });
  const hasDishes = dishes.length > 0;
  if (!hasDishes) {
    return (
      <div className="w-full !h-full flex justify-center items-center border">
        <p className="text-gray-500">Nenhum prato encontrado</p>
      </div>
    );
  }
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:flex md:flex-wrap gap-4 w-fit max-w-[1095px] lg:min-w-full mx-auto p-4">
        {dishes.map(({ id, name, image, price, tags, category }) => {
          const firstTag = tags?.[0] || "";
          const firstCategory = category || "";

          return (
            <DishCard
              key={id}
              id={id}
              dataDish={{
                image,
                title: name,
                price,
                tag: firstTag,
                category: firstCategory,
              }}
            />
          );
        })}
      </div>

      {hasMore && (
        <div
          ref={observerTarget}
          className="h-20 w-full flex justify-center items-center"
        >
          {isLoading && (
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
          )}
        </div>
      )}
    </div>
  );
};
