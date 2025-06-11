'use client'

import { useMobile } from "@/app/hoocks/useMobile"

export const SkeletonDishDetail = () => {
    const isMobileScreen = useMobile()
    const sizeImage = isMobileScreen ? {
        width: 400,
        height: 200
    } : {
        width: 400,
        height: 400
    };

    return (
        <div className="size-full flex flex-col md:flex-row md:gap-5 p-3 bg-gray-300 mt-4 animate-pulse">
            <div className={`w-[${sizeImage.width}px] h-[${sizeImage.height}px] bg-gray-400 rounded-md mx-auto`} />
            <div className="p-2 pl-0 flex flex-col items-start mt-4 gap-3 w-full">
                <div className="h-8 bg-gray-400 w-1/3 rounded-md" />
                <div className="h-20 bg-gray-400 w-full rounded-md" />
                <div className="h-6 bg-gray-400 w-1/4 rounded-md" />
                <div className="h-10 bg-gray-400 w-40 rounded-md ml-auto" />
            </div>
        </div>
    )
}
