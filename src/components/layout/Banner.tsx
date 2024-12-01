
interface Props {
    pageTitle: string
}
export default function Banner({ pageTitle }: Props) {
    return (
        <div className="flex justify-between items-center bg-zinc-100 h-48 italic uppercase px-6 md:px-16">
            <span className="text-3xl font-medium capitalize">{pageTitle}</span>
            <span className="text-zinc-600 capitalize">{pageTitle}</span>
        </div>
    )
}
