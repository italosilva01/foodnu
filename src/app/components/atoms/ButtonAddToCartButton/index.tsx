'use client'

import { Button } from "@/components/ui/button"

interface AddToCartButtonProps {
    dishId: string,
    className?: string
}

export const AddToCartButton = ({ className = '' }: AddToCartButtonProps) => {
    const handleAddToCart = () => {
        console.log('testestest')
    }

    return (
        <Button className={`ml-auto text-white !bg-black p-5 hover:bg-gray-500 ${className}`} onClick={handleAddToCart} >
            Adicionar ao carrinho
        </Button >
    )
} 