import { create } from "zustand";

 type State = {
   filters: string[]
 }

 type Actions = {
    setFilters: (filters: string[]) => void;
    clearFilters: () => void;
 }

 type FilterStore = {
    state: State;
    actions: Actions;
 }

 const useFilterStore = create<FilterStore>((set) => ({
    state: {
        filters: [],
    },
    actions: {
        setFilters: (filters: string[]) => set({ state: { filters: [...filters] } }),
        clearFilters: () => set({ state: { filters: [] } })
    },
 }))

 
export const useFilters = ()=> useFilterStore((state)=>state.state.filters)
export const useFiltersActions = ()=>useFilterStore((state)=>state.actions)