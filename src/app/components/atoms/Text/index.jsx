export const Text = ({ children, className = '', variant = 'base' }) => {

    const textVariants = {
        base: '!text-sm text-gray-500',
        paragraphSecondary: 'text-sm text-gray-500',

        small: 'text-xs',
        medium: 'text-md',
        large: 'text-lg',
        xlarge: 'text-xl',
    }
    return <p className={`${textVariants[variant]} ${className}`}>{children}</p>
}