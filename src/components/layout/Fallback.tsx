
interface Props {
    className?: string
}
export function Fallback({ className }: Props) {
    return <span className={`${className} inline-block rounded-md bg-zinc-200 animate-pulse w-full h-full`}></span>
}