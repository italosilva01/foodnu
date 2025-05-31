"use client";

import { capitalizeFirstLetter } from "@utils/functions";

interface TagProps {
    tag: string;
}

export const Tag = ({ tag }: TagProps) => {
    return (
        <div className="flex flex-col gap-2 rounded-full w-fit !h-8 text-center justify-center items-center !p-1.5 min-w-14 text-white">
            <h1>#{capitalizeFirstLetter(tag)}</h1>
        </div>
    )
}