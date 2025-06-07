'use client'

import { createContext, useState, ReactNode, use, useEffect } from 'react';
import { Dish } from '@/app/types/types';
import { getAllFoods, getFilteredFoods } from '@services/api';

interface FilterContextType {
    filters: string[];
    setFilters: (filters: string[]) => void;
    filteredDishes: Promise<Dish[]>;
    isLoading: boolean;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
    const [filters, setFiltersState] = useState<string[]>([]);
    const [filteredDishes, setFilteredDishes] = useState<Promise<Dish[]>>(getAllFoods());
    const [isLoading, setIsLoading] = useState(false);

    const setFilters = async (newFilters: string[]) => {
        setIsLoading(true);
        setFiltersState(newFilters);

        try {
            if (newFilters.length === 0) {
                setFilteredDishes(getAllFoods());
            } else {
                setFilteredDishes(getFilteredFoods(newFilters));
            }
        } catch (error) {
            console.error('Erro ao filtrar pratos:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <FilterContext.Provider value={{
            filters,
            setFilters,
            filteredDishes,
            isLoading
        }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilter = () => {
    const context = use(FilterContext);
    if (!context) {
        throw new Error('useFilter deve ser usado dentro do FilterProvider');
    }
    return context;
};