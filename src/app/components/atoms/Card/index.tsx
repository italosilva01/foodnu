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
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("Card clicked");
        onClick();
    };

    return (
        <div
            className={`bg-white rounded-lg overflow-hidden cursor-pointer w-fit h-fit hover:shadow-md transition-shadow duration-300 select-none ${className}`}
            onClick={handleClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onClick();
                }
            }}
        >
            {children}
        </div>
    );
};

const CardImage = ({ image, className, width = 224, height = 275, ...props }: CardImageProps) => {
    return (
        <Image
            src={image}
            alt="Card Image"
            className={`object-cover rounded-none pointer-events-none ${className}`}
            width={width}
            height={height}
            draggable={false}
            {...props}
        />
    );
};

const CardContent = ({ children, className }: CardContentProps) => {
    return (
        <div className={`pointer-events-none ${className}`}>
            {children}
        </div>
    );
};

const CardTitle = ({ title, className }: CardTitleProps) => {
    return (
        <h2 className={`text-xl font-semibold mx-auto pointer-events-none ${className}`}>
            {title}
        </h2>
    );
};

export const Card = {
    Root: CardRoot,
    Image: CardImage,
    Content: CardContent,
    Title: CardTitle
};