import { create } from "zustand";

 type State = {
   filter: string
 }

 type Actions = {
    setFilter: (filter: string) => void;
    clearFilter: () => void;
 }

 type FilterStore = {
    state: State;
    actions: Actions;
 }

 const useFilterStore = create<FilterStore>((set) => ({
    state: {
        filter: '',
    },
    actions: {
        setFilter: (filter: string) => set({ state: { filter } }),
        clearFilter: () => set({ state: { filter: '' } })
    },
 }))

 
export const useFilter = ()=> useFilterStore((state)=>state.state.filter)
export const useFilterActions = ()=>useFilterStore((state)=>state.actions)