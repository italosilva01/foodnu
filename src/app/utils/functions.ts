
export const capitalizeFirstLetter = (text: string): string => {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

export const formatCurrency = (price: number | bigint | string, currency = 'BRL', location = 'pt-BR') => {
    return new Intl.NumberFormat(location, {
        style: 'currency',
        currency: currency
    }).format(Number(price))
}