'use client'

import { FilterIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useForm } from "react-hook-form";
import { CheckboxOption } from "../../atoms/CheckboxOption";
import { CATEGORY_FILTERS_OPTIONS, TAG_FILTERS_OPTIONS } from "@utils/constants/filters";
import { getFilteredFoods } from "@/app/services/api";


interface FilterFormData {
    [key: string]: boolean;
}

const FilterBody = () => {
    const { register, handleSubmit } = useForm<FilterFormData>();
    const onSubmit = async (data: FilterFormData) => {
        const payload = Object.keys(data).filter(key => data[key] !== false);
        console.log(payload)
        const filteredFoods = await getFilteredFoods(payload);
        console.log(filteredFoods)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-2xl font-bold">Filtros</h1>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h2 className="text-lg font-bold !mb-3">Tags</h2>
                    {TAG_FILTERS_OPTIONS.map((item, index) => (
                        <CheckboxOption key={index} register={register} item={item} />
                    ))}
                </div>
                <div>
                    <h2 className="text-lg font-bold !mb-3">Categorias</h2>
                    {CATEGORY_FILTERS_OPTIONS.map((item, index) => (
                        <CheckboxOption key={index} register={register} item={item} />
                    ))}
                </div>
            </div>
            <Button type="submit" className="w-full mt-4">Aplicar</Button>
        </form>
    )
}

export const Filter = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative">
            <Button onClick={() => {
                setIsOpen(!isOpen)
            }}>
                <FilterIcon />
            </Button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div className="bg-cream z-50 absolute top-full w-80 p-4 rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        <FilterBody />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

