import { ButtonHTMLAttributes } from "react"

interface ItemMenuProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    item: {
        label: string
        name: string
    }
}

export const ItemMenu = ({ item, ...rest }: ItemMenuProps) => {
    return (
        <button className="flex text-sm w-full hover:text-gray-500" {...rest}>{item.label}</button>
    )
}
