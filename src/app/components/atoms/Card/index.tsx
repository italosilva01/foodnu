import Image, { ImageProps } from "next/image";

interface CardRootProps {
    children: React.ReactNode;
    className?: string;
    onClick: () => void;

}

interface CardImageProps extends Omit<ImageProps, 'src' | 'alt'> {
    image: string;
    className?: string;
}

interface CardTitleProps {
    title: string;
    className?: string;
}

interface CardContentProps extends Omit<CardRootProps, "onClick"> {
    className?: string;
}


const CardRoot = ({ children, className, onClick }: CardRootProps) => {
    return (
        <div className={`bg-white rounded-lg overflow-hidden cursor-pointer w-fit h-fit hover:shadow-md transition-shadow duration-300 ${className}`} onClick={onClick}>
            {children}
        </div>
    )
}

const CardImage = ({ image, className, width = 224, height = 275, ...props }: CardImageProps) => {
    return (
        <Image
            src={image}
            alt="Card Image"
            className={`min-w-[224px] min-h-[275px] w-full h-full object-cover !rounded-none ${className}`}
            width={width}
            height={height}
            {...props}
        />
    )
}

const CardContent = ({ children, className }: CardContentProps) => {
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