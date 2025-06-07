'use client';

import { Card } from "@/app/components/atoms/Card";
import { Category } from "@atoms/Category";
import { Tag } from "@atoms/Tag";

interface DishCardProps {
    image: string;
    title: string;

}

export const DishCard = ({ image, title, }: DishCardProps) => {

    const handleClick = () => {
        console.log("teste")
    }
    return (
        <Card.Root onClick={handleClick}>
            <Card.Content>
                <div className="relative h-fit border-1 border-rose-50">
                    <Card.Image image={image} />
                    <div className="absolute bottom-0 left-0 flex gap-2 !py-2 pl-2">
                        <Category category={"teste"} />
                        <Tag tag={"teste"} />
                    </div>
                </div>
                <Card.Title title={title} className="text-center mt-2" />
                <p className="text-center text-sm text-gray-500">R$ 29,90</p>
            </Card.Content>
        </Card.Root>
    )
}