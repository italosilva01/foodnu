"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"

export const Logo = () => {
    const router = useRouter()
    const handleCLick = () => {
        router.push('/')
    }
    return (
        <div className='p-5 pr-3 rounded-2xl bg-black flex justify-center items-center max-h-[5.3125rem] min-h-[5.3125rem] h-[5.3125rem]' onClick={handleCLick}>
            <Image src="/assets/S..svg" alt="Logo" width={50} height={50} />
        </div>
    )
}