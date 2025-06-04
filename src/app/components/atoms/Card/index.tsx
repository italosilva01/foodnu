import Image from "next/image";

interface CardRootProps {
    children: React.ReactNode;
    className?: string;
}

interface CardImageProps {
    image: string;
    className?: string;
}

interface CardTitleProps {
    title: string;
    className?: string;
}

const CardRoot = ({ children, className }: CardRootProps) => {
    return (
        <div className={`bg-white rounded-lg overflow-hidden cursor-pointer w-fit h-fit hover:shadow-md transition-shadow duration-300 ${className}`}>
            {children}
        </div>
    )
}

const CardImage = ({ image, className }: CardImageProps) => {
    return (
        <Image src={image} alt="Card Image" className={`min-w-[224px] min-h-[275px] w-full h-full object-cover !rounded-none ${className}`} width={224} height={275} />
    )
}

const CardContent = ({ children, className }: CardRootProps) => {
    return (
        <div className={`${className}`}>{children}</div>
    )
}

const CardTitle = ({ title, className }: CardTitleProps) => {
    return (
        <h2 className={`text-xl font-semibold mx-auto ${className}`}>{title}</h2>
    )
}


export const Card = {
    Root: CardRoot,
    Image: CardImage,
    Content: CardContent,
    Title: CardTitle
};