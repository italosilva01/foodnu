import { Suspense } from "react"
import { getFoodById } from "@/app/services/api"
import { DishDetails } from "@/app/components/molecules/DishDetails"
import { SkeletonDishDetail } from "@/app/components/atoms/Skeletons/SkeletonDishDetail"

interface DishProps {
    params: Promise<{
        dish: string
    }>
}

export default async function DishPage({ params }: DishProps) {
    const resolvedParams = await params;
    const selectedDish = await getFoodById(resolvedParams.dish)
    return (
        <div className="flex flex-col gap-2 w-full">
            <Suspense fallback={
                <SkeletonDishDetail />
            } >
                <DishDetails dish={selectedDish} />
            </Suspense>

        </div >
    )
}