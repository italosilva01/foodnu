'use client';

import { Card } from "@/app/components/atoms/Card";
import { formatCurrency } from "@/app/utils/functions";
import { useRouter } from "next/navigation";
import { ButtonMinAddToCar } from "@atoms/ButtonMinAddToCar";
import { useMobile } from "@/app/hooks/useMobile";

interface Dish {
    image: string;
    title: string;
    price: number;
    id: string;
}

interface DishItemProps {
    handleClick: () => void;
    dataDish: Dish

}


const DishItemDesktop = ({ dataDish, handleClick }: DishItemProps) => {
    const { image, title, price } = dataDish;
    return (
        <Card.Root onClick={handleClick} className=" max-w-[7.625rem]">
        <Card.Content className="">
            <div className="relative h-fit border-1 border-rose-50 pointer-events-none">
                <Card.Image image={image} width={122} height={61} />
                <div className="absolute bottom-[5px] right-[5px] pointer-events-auto">
                    <div className="relative z-50" >
                        <ButtonMinAddToCar />
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
const DishItemMobile = ({ dataDish, handleClick }: DishItemProps) => {
        const { image, title    , price } = dataDish;
        console.log(dataDish);
    return (
        <Card.Root onClick={handleClick} className=" max-w-[7.625rem]">
        <Card.Content className="">
            <div className="relative h-fit border-1 border-rose-50 pointer-events-none">
                <Card.Image image={image} width={122} height={61} />
                <div className="absolute bottom-[5px] right-[5px] pointer-events-auto">
                    <div className="relative z-50" >
                        <ButtonMinAddToCar />
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

export const DishCard = ({ dataDish, }: DishItemProps) => {
    const router = useRouter()
    const isMobile = useMobile()
    return !isMobile ? <DishItemDesktop dataDish={dataDish} handleClick={() => router.push(`dishes/${dataDish.id}`)} /> : <DishItemMobile dataDish={dataDish} handleClick={() => router.push(`dishes/${dataDish.id}`)} />
}