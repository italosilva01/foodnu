"use client"

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

export const ButtonMinAddToCar = () => {
    return (
        <Button className="bg-white group rounded-full w-10 h-10 z-50 hover pointer-events-auto" onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Adicionar ao carrinho');
            // TODO: Adicionar ao carrinho
        }} >
            <PlusIcon className="group-hover:text-red-500 text-gray-500" />
        </Button>
    )
}