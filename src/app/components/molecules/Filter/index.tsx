'use client'

import { CATEGORY_FILTERS_OPTIONS, TAG_FILTERS_OPTIONS } from "@utils/constants/filters";
import { useFilterActions } from "@store/useFilterStore";
import { ItemMenu } from "@atoms/ItemMenu";

export const Filter = () => {
    const { setFilter } = useFilterActions();

    const handleFilter = (filter: string) => {
        console.log("filter", filter)
        setFilter(filter);
    }

    return (
        <aside className="hidden lg:block w-full lg:min-w-[300px] lg:w-[300px] lg:max-h-[44.375rem] sticky bottom-0 overflow-y-auto">
            <div className="flex flex-col gap-4 p-4 w-full ml-auto">
                <div className="flex flex-col gap-2">
                    <h2 className="text-lg font-bold sticky top-0 bg-white">Categorias</h2>
                    <div className="overflow-y-auto">
                        {CATEGORY_FILTERS_OPTIONS.map((item, index) => (
                            <ItemMenu key={index} item={item} onClick={() => handleFilter(item.name)} />
                        ))}
                    </div>
                    <h2 className="text-lg font-bold sticky top-0 bg-white">Tags</h2>
                    <div className="overflow-y-auto">
                        {TAG_FILTERS_OPTIONS.map((item, index) => (
                            <ItemMenu key={index} item={item} onClick={() => handleFilter(item.name)} />
                        ))}
                    </div>

                </div>
            </div>
        </aside >
    )
}


