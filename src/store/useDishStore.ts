import { Food } from "@/app/services/api"
import { create } from "zustand"

type State = {
    dishes: Food[]
    
}

type Actions = {
    setDishes: (dishes: Food[]) => void
    
}

type DishStore = {
    state: State
    actions: Actions
}

const useDishStore = create<DishStore>((set) => ({
    state: {
        dishes: []
    },
    actions: {
        setDishes: (dishes: Food[]) => set({ state: { dishes } })
    }
}))

export const useDishes = () => useDishStore((state) => state.state.dishes)
export const useDishesActions = () => useDishStore((state) => state.actions)
