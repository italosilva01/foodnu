import { Input } from "@/components/ui/input"
import { InputHTMLAttributes } from "react"
import { FieldValues } from "react-hook-form"
import { UseFormRegister } from "react-hook-form"

interface CheckboxOptionProps extends InputHTMLAttributes<HTMLDivElement> {
    register: UseFormRegister<FieldValues>
    item: unknown & { name: string, label: string }
}

export const CheckboxOption = ({ register, item, ...rest }: CheckboxOptionProps) => {
    return <div className="w-full max-w-96 flex gap-2 items-center" {...rest}>
        <Input {...register(item.name)} type="checkbox" placeholder={item.label} id={item.name} className="size-3" />
        <label htmlFor={item.name} className="text-sm w-full">{item.label}</label>
    </div>
}
