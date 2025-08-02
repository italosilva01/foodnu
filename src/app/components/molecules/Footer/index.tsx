import Image from "next/image"
import { Text } from "@atoms/Text"
import { Link } from "@atoms/Link"

export const Footer = () => {
    return (
        <footer className="w-full flex flex-col gap-4 p-4 pt-8 bg-white mt-8 border-t border-gray-400">
            <div className="w-full flex flex-col lg:flex-row justify-center gap-4">
                <div className="flex gap-2">
                    <div className='md:p-5 md:pr-3 md:rounded-2xl md:bg-black flex justify-center items-center max-h-[5.3125rem] min-h-[5.3125rem] h-[5.3125rem] !w-[5.3125rem]'>
                        <Image src="/assets/S..svg" alt="Logo da sabor hub - Plataforma de delivery de comidas" width={50} height={50} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Text variant="paragraphSecondary">© Copyright 2025 - Sabor Hub  - Todos os direitos reservados Sabor Hub  com Agência de Restaurantes Online S.A.</Text>
                        <address>
                            <Text variant="paragraphSecondary">Rua dos Bobos, 0, São Paulo - SP</Text>
                            <Text variant="paragraphSecondary">+55 11 99999-9999</Text>
                            <Text variant="paragraphSecondary">sushifood@gmail.com</Text>
                        </address>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-2 items-start">
                    <Link variant="medium">Quem somos</Link>
                    <Link variant="medium">Política de privacidade</Link>
                    <Link variant="medium">Termos de uso</Link>
                    <Link variant="medium">Contato</Link>
                </div>
            </div>
            <div className="w-full text-center">
                <i className="block text-xs">Feito com muito amor por Francisco italo ❤️</i>
            </div>
        </footer>
    )
} 