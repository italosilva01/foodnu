export const Link = ({ children, className = '', variant = 'base' }: { children: React.ReactNode, className?: string, variant?: 'base' | 'paragraphSecondary' | 'small' | 'medium' | 'large' | 'xlarge' }) => {

    const linkVariants = {
        base: 'text-sm text-gray-500',
        paragraphSecondary: 'text-sm text-gray-500',
        small: 'text-xs',
        medium: 'text-md text-gray-500 font-bold hover:text-gray-500/80',
        large: 'text-lg',
        xlarge: 'text-xl',
    } as const

    return <a className={`${linkVariants[variant]} ${className}`}>{children}</a>
}