'use client'

import { Button } from "@/components/ui/button"
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { CheckboxOption } from "../../atoms/CheckboxOption";
import { CATEGORY_FILTERS_OPTIONS, TAG_FILTERS_OPTIONS } from "@utils/constants/filters";
import { useFilters, useFiltersActions } from "@store/useFilterStore";


interface FilterFormData {
    [key: string]: boolean;
}

export const Filter = () => {
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
        <aside className="hidden lg:block w-full lg:min-w-[300px] lg:w-[300px] lg:!max-h-[calc(100vh-100px)] sticky bottom-0 overflow-y-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-4 w-full ml-auto">
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
                <div className="flex flex-col gap-2 ">
                    <h2 className="text-lg font-bold">Categorias</h2>
                    <div className="overflow-y-auto lg:!max-h-32">

                        {CATEGORY_FILTERS_OPTIONS.map((item, index) => (
                            <CheckboxOption key={index} register={register} item={item} />
                        ))}
                    </div>
                    <h2 className="text-lg font-bold">Tags</h2>
                    <div className="flex flex-col gap-2 overflow-y-auto lg:!max-h-32">
                        {TAG_FILTERS_OPTIONS.map((item, index) => (
                            <CheckboxOption key={index} register={register} item={item} />
                        ))}
                    </div>
                </div>

                <div className="">

                </div>


                <Button type="submit" className="w-full mt-4">Aplicar</Button>
            </form>
        </aside>
    )
}


