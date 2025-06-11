'use client'
import Image from "next/image"
import { formatCurrency } from "@/app/utils/functions"
import { AddToCartButton } from "@/app/components/atoms/ButtonAddToCartButton"
import { Food } from "@/app/services/api"
import { motion } from "motion/react"
import { useMobile } from "@/app/hoocks/useMobile"

interface DishDetailsProps {
    dish: Food | undefined,

}

export const DishDetails = ({ dish }: DishDetailsProps) => {
    const isMobileScreen = useMobile()
    const sizeImage = isMobileScreen ? {
        width: 400,
        height: 200
    } : {
        width: 400,
        height: 400
    };

    return (<div>
        <motion.div className="size-full flex flex-col md:flex-row md:gap-5 p-3 bg-cream mt-4" initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}>
            <Image src={dish?.image || ''} {...sizeImage} alt="image of dish" priority className="mx-auto" />
            <div className="p-2 pl-0 flex flex-col items-start mt-4 gap-3">
                <h1 className="text-2xl font-semibold border-b border-black w-fit text-left">
                    {dish?.name}
                </h1>
                <p className=" text-left text-pretty">{dish?.description}</p>
                <div className="flex gap-2 border-b border-black">
                    <p className=" border-b">Preço:</p>
                    <p>
                        {formatCurrency(dish?.price || '')}
                    </p>
                </div>
                <AddToCartButton dishId={dish?.id || ''} className="mt-auto" />
            </div>
        </motion.div>

    </div>

    )
}
