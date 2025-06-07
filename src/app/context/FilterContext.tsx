'use client'

import { createContext, useState, ReactNode, use } from 'react';
import { getAllFoods, getFilteredFoods, PaginatedResponse, Food } from '@services/api';
import { LIMIT_PER_PAGE } from '../utils/constants/constants';

interface FilterContextType {
    filters: string[];
    setFilters: (filters: string[]) => void;
    filteredDishes: Promise<PaginatedResponse<Food>>;
    isLoading: boolean;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
    const [filters, setFiltersState] = useState<string[]>([]);
    const initialDishes = getAllFoods();
    const [filteredDishes, setFilteredDishes] = useState<Promise<PaginatedResponse<Food>>>(initialDishes);
    const [isLoading, setIsLoading] = useState(false);

    const setFilters = async (newFilters: string[]) => {
        setIsLoading(true);
        setFiltersState(newFilters);

        try {
            if (newFilters.length === 0) {
                setFilteredDishes(initialDishes);
            } else {
                setFilteredDishes(getFilteredFoods(newFilters, 1, LIMIT_PER_PAGE));
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