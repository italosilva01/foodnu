import { Logo } from '@atoms/Logo'

export const Header = () => {

    return (
        <header className="flex flex-row px-2 lg:px-20 items-end gap-5 mt-4">
            <Logo />
            <h1 className="border-b-2 border-red-200 text-5xl h-fit text-pretty">SUSHI FOOD</h1>
        </header>
    )
}