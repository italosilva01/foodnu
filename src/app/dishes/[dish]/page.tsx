import { Suspense } from "react"
import { getFoodById } from "@/app/services/api"
import { DishDetails } from "@/app/components/molecules/DishDetails"
import { SkeletonDishDetail } from "@/app/components/atoms/Skeletons/SkeletonDishDetail"
import { SimilarDishes } from "@/app/components/molecules/SimilarDishes"

interface DishProps {
    params: Promise<{
        dish: string
    }>
}

export default async function DishPage({ params }: DishProps) {
    const resolvedParams = await params;
    console.log("params", resolvedParams)
    const selectedDish = await getFoodById(resolvedParams.dish)
    console.log("selectedDish", selectedDish)
    return (
        <div className="flex flex-col gap-2 w-full">
            <Suspense fallback={
                <SkeletonDishDetail />
            } >
                <DishDetails dish={selectedDish} />
            </Suspense>
            <Suspense fallback={
                <div className="!h-[100px]  bg-gray-200 rounded-md animate-pulse flex flex-col ">
                    <div className="!h-10 bg-gray-400 w-[210px] mt-5 ml-3 rounded-md">
                    </div>
                    <div>
                        <div className="h-[60px]" />
                    </div>

                </div>
            }>
                <SimilarDishes dish={selectedDish} />
            </Suspense>
        </div >
    )
}