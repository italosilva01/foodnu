'use client'

import { FilterIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CheckboxOption } from "../../atoms/CheckboxOption";
import { CATEGORY_FILTERS_OPTIONS, TAG_FILTERS_OPTIONS } from "@utils/constants/filters";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useFilters, useFiltersActions } from "@store/useFilterStore";


interface FilterFormData {
    [key: string]: boolean;
}

const FilterBody = () => {
    const { register, handleSubmit, setValue, reset } = useForm<FilterFormData>();
    const { setFilters, clearFilters } = useFiltersActions();
    const filters = useFilters();

    useEffect(() => {
        filters.forEach((filter: string) => {
            setValue(filter, true);
        });
    }, [filters, setValue]);

    const onSubmit = async (data: FilterFormData) => {
        const payload = Object.keys(data).filter(key => data[key] !== false);
        setFilters(payload);
    }
    const handleClearFilters = () => {
        reset();
        clearFilters();
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-2xl font-bold">Filtros</h1>
            {filters.length > 0 && (
                <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleClearFilters}
                >
                    Limpar
                </Button>
            )}
            <div className="grid grid-cols-2 gap-4">
                <div className="">
                    <h2 className="text-lg font-bold !mb-3">Tags</h2>
                    <div className="flex flex-col gap-2 overflow-y-auto h-56">
                        {TAG_FILTERS_OPTIONS.map((item, index) => (
                            <CheckboxOption key={index} register={register} item={item} />
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="text-lg font-bold !mb-3">Categorias</h2>
                    <div className="overflow-y-auto lg:h-56">

                        {CATEGORY_FILTERS_OPTIONS.map((item, index) => (
                            <CheckboxOption key={index} register={register} item={item} />
                        ))}
                    </div>
                </div>
            </div>
            <Button type="submit" className="w-full mt-4">Aplicar</Button>
        </form>
    )
}

export const Filter = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen} >
            <PopoverTrigger asChild>
                <Button onClick={() => console.log("click")}>
                    <FilterIcon />
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <FilterBody />
            </PopoverContent>
        </Popover>
    )
}

