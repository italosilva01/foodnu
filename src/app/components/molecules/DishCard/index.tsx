'use client';

import { Card } from "@/app/components/atoms/Card";
import { formatCurrency } from "@/app/utils/functions";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
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
        <Button className="bg-white rounded-full w-10 h-10 z-50 hover" onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Clicou no botão');
        }} >
            <PlusIcon className="group-hover:text-red-500 text-gray-500" />
        </Button>
    )
}
export const DishCard = ({ dataDish, id }: DishCardProps) => {
    const router = useRouter()
    const { image, title, price } = dataDish;

    const handleClick = (e: React.MouseEvent) => {
        console.log('Clicou no card');
        // router.push(`dishes/${id}`)
        e.stopPropagation();
        e.preventDefault();
    }

    return (
        <Card.Root onClick={(e) => handleClick(e)} className=" max-w-[7.625rem]">
            <Card.Content className="">
                <div className="relative h-fit border-1 border-rose-50">
                    <Card.Image image={image} width={122} height={61} />
                    <div className="absolute bottom-[5px] right-[5px]">
                        <div className="relative z-50 " onClick={e => {
                            // Impede que o click do Card.Root dispare
                            e.stopPropagation();
                        }} >
                            <ButtonAddToCar />
                        </div>
                    </div>
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