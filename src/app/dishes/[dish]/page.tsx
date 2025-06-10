import { Suspense, use } from "react"
import { getFoodById } from "@/app/services/api"
import { DishDetails } from "@/app/components/molecules/DishDetails"

interface DishProps {
    params: {
        dish: string
    }
}

export default function DishPage({ params }: DishProps) {
    const selectedDish = use(Promise.resolve(getFoodById(params.dish)))

    return (
        <Suspense fallback={
            <div className="size-full flex flex-col md:flex-row md:gap-5 p-3 bg-cream mt-4 animate-pulse">
                <div className="w-[400px] h-[200px] bg-gray-800 rounded-md mx-auto" />
                <div className="p-2 pl-0 flex flex-col items-start mt-4 gap-3 w-full">
                    <div className="h-8 bg-gray-800 w-1/3 rounded-md" />
                    <div className="h-20 bg-gray-800 w-full rounded-md" />
                    <div className="h-6 bg-gray-800 w-1/4 rounded-md" />
                    <div className="h-10 bg-gray-800 w-40 rounded-md ml-auto" />
                </div>
            </div>
        }>
            <DishDetails dish={selectedDish} />
        </Suspense>
    )
}