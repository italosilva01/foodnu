
interface MenuRootProps {
    children: React.ReactNode;
    className?: string;
}

interface MenuItemProps {
    children: React.ReactNode;
    className?: string;
}

const MenuRoot = ({ children, className }: MenuRootProps) => {
    return (
        <nav className={`flex flex-col items-center justify-between w-fit max-w-[8.375rem] h-fit  bg-black ${className}`}>
            {children}
        </nav >
    )
}


const MenuItem = ({ children, className }: MenuItemProps) => {
    return (
        <li className={`min-w-[8.375rem]  h-fit text-white text-center ${className}`}>{children}</li>
    )
}




export const Menu = {
    Root: MenuRoot,
    Item: MenuItem,
};