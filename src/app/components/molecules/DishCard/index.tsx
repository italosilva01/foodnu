'use client';

import { Card } from "@/app/components/atoms/Card";
import { formatCurrency } from "@/app/utils/functions";
import { Category } from "@atoms/Category";
import { Tag } from "@atoms/Tag";
import { useRouter } from "next/navigation";

interface DishCardProps {

    id: string
    dataDish: {
        image: string;
        title: string;
        price: number;
        tag: string;
        category: string;
    }

}

export const DishCard = ({ dataDish, id }: DishCardProps) => {
    const router = useRouter()
    const { image, title, price, tag, category } = dataDish;

    const handleClick = () => {
        router.push(`dishes/${id}`)
    }

    return (
        <Card.Root onClick={handleClick} className=" max-w-[14rem] max-h-[20.6875rem]">
            <Card.Content>
                <div className="relative h-fit border-1 border-rose-50">
                    <Card.Image image={image} />
                    <div className="absolute bottom-0 left-0 flex gap-2 !py-2 pl-2">
                        <Category category={category} />
                        <Tag tag={tag} />
                    </div>
                </div>
                <Card.Title title={title} className="text-center mt-2 max-h-[1.75rem] truncate" />
                <p className="text-center text-sm text-gray-500">
                    {formatCurrency(price)}
                </p>
            </Card.Content>
        </Card.Root>
    )
}