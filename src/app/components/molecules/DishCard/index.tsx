'use client';

import { Card } from "@/app/components/atoms/Card";
import { formatCurrency } from "@/app/utils/functions";
import { useRouter } from "next/navigation";
import { ButtonMinAddToCar } from "../../atoms/ButtonMinAddToCar";
import { useMobile } from "@/app/hooks/useMobile";
import { Dish } from "@/types/types";

interface DishItemProps {
    id: string
    handleClick: () => void
    dataDish: Dish

}
const DishItemDesktop = ({ dataDish, handleClick }: DishItemProps) => {
    const { image, name, price } = dataDish;
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

            <Card.Title title={name} className="!text-base whitespace-break-spaces truncate" />

        </Card.Content>
    </Card.Root>
    )
}
const DishItemMobile = ({ dataDish, handleClick }: DishItemProps) => {
        const { image, name, price } = dataDish;
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

            <Card.Title title={name} className="!text-base whitespace-break-spaces truncate" />

        </Card.Content>
    </Card.Root>
    )
}

export const DishCard = () => {
    const router = useRouter()
    const isMobile = useMobile()

    const handleClick = () => {
       router.push(`dishes/${id}`)
    }

    return (
      isMobile ? <DishItemDesktop dataDish={dataDish} id={id} handleClick={handleClick} /> : <DishItemMobile dataDish={dataDish} id={id} handleClick={handleClick} />
    )
}