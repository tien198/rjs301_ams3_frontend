

export default function convertToFraction(price: string | undefined) {
    return price?.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
} 