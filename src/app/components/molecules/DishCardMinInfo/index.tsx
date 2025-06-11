import { Food } from "@/app/services/api"
import { Card } from "@atoms/Card"

interface DishCardMinInfoProps {
    dish: Food
}

export const DishCardMinInfo = ({ dish }: DishCardMinInfoProps) => {
    const { image } = dish;
    return <Card.Root className="border border-black w-[220px] h-[220px]" onClick={() => console.log('teste')}>
        <Card.Image image={image} width={100} height={100} />
    </Card.Root >
}