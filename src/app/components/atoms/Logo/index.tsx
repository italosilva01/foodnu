import Image from "next/image"

export const Logo = () => {
    return (
        <div className='p-5 pr-3 rounded-2xl bg-black flex justify-center items-center'>
            <Image src="/assets/S..svg" alt="Logo" width={50} height={50} />
        </div>
    )
}