'use client';

import { Card } from "@/app/components/atoms/Card";
import { Category } from "@atoms/Category";
import { Tag } from "@atoms/Tag";

interface DishCardProps {
    image: string;
    title: string;

}

export const DishCard = ({ image, title }: DishCardProps) => {
    return (
        <Card.Root>
            <Card.Content>
                <div className="relative h-fit border-1 border-rose-50">
                    <Card.Image image={image} />
                    <div className="absolute bottom-0 left-0 flex gap-2 !py-2">
                        <Category category={"teste"} />
                        <Tag tag={"teste"} />
                    </div>
                </div>
                <Card.Title title={title} className="text-center mt-2" />
            </Card.Content>
        </Card.Root>
    )
}