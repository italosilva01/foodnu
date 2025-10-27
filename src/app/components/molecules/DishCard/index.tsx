'use client';

import { Card } from "@/app/components/atoms/Card";
import { formatCurrency } from "@/app/utils/functions";
import { Button } from "@/components/ui/button";
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
const ButtonAddToCar = () => {
    return (
        <Button >
            <
        </Button>
    )
}
export const DishCard = ({ dataDish, id }: DishCardProps) => {
    const router = useRouter()
    const { image, title, price } = dataDish;

    const handleClick = () => {
        router.push(`dishes/${id}`)
    }

    return (
        <Card.Root onClick={handleClick} className=" max-w-[7.625rem]">
            <Card.Content className="">
                <div className="relative h-fit border-1 border-rose-50">
                    <Card.Image image={image} width={122} height={61} />
                </div>
                <p className="text-lg text-black">
                    {formatCurrency(price)}
                </p>
                <p className="text-xs text-black">
                    Para duas pessoas
                </p>

                <Card.Title title={title} className="!text-base whitespace-break-spaces truncate" />

            </Card.Content>
        </Card.Root>
    )
}