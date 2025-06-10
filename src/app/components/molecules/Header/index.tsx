import Image from 'next/image'

export const Header = () => {

    return (
        <header className="flex flex-row px-20 items-end gap-5 mt-4">
            <div className='p-5 pr-3 rounded-2xl bg-black flex justify-center items-center'>
                <Image src="/assets/S..svg" alt="Logo" width={50} height={50} />
            </div>
            <h1 className="border-b-2 border-red-200 text-5xl h-fit">SUSHI FOOD</h1>
        </header>
    )
}