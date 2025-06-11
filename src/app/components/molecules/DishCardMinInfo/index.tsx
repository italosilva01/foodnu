import { Food } from "@/app/services/api"
import { formatCurrency } from "@/app/utils/functions";
import { Card } from "@atoms/Card"

interface DishCardMinInfoProps {
    dish: Food
}

export const DishCardMinInfo = ({ dish }: DishCardMinInfoProps) => {
    const { image, name, price } = dish;

    return (
        <Card.Root
            className="border border-gray-300 w-[220px] h-[120px] flex flex-row overflow-hidden hover:shadow-lg transition-shadow"
            onClick={() => console.log('Clicou no prato:', name)}
        >
            <Card.Image
                image={image}
                width={120}
                height={120}
                className="w-[120px] h-[120px] object-cover flex-shrink-0"
            />
            <Card.Content className="flex flex-col justify-center p-3 flex-1">
                <h3 className="font-semibold text-sm text-gray-800 mb-1 line-clamp-2">
                    {name}
                </h3>
                <p className="text-green-600 font-bold text-lg">
                    {formatCurrency(price)}
                </p>
            </Card.Content>
        </Card.Root>
    );
}