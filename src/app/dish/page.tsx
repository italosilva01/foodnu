"use client";

import { DishCard } from "@molecules/DishCard";

export default function Dishes() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-8">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-center">Bem-vindo ao Foodnu!</h1>
                <p className="text-lg font-light">Descubra pratos incríveis com a fonte Mulish</p>
                <p className="text-base font-medium">Peso médio - Mulish Medium</p>
                <p className="text-sm font-semibold">Peso semi-bold - Mulish Semibold</p>
                <p className="text-xs font-extrabold uppercase tracking-wide">Peso extra-bold - Mulish Extrabold</p>
            </div>
            <div className="flex gap-4">
                <DishCard image="https://via.placeholder.com/150" title="Card com Fonte Mulish" />
            </div>
        </div>
    );
}
