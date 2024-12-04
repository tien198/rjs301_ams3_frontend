
function urlCutting(str: string) {
    const arr = str.split('/')
    const result = []
    const amout = arr.length
    for (let i = 0; i < amout; i++) {
        result.push(
            (i !== amout - 1)
                ? <><span className="text-black mx-2" key={i}>{arr[i]} </span><span>/</span></>
                : <span key={i} className="mx-2">{arr[i]}</span>
        )
    }
    return result
}

interface Props {
    pageTitle: string
    pageUrl?: string
}
export default function Banner({ pageTitle, pageUrl }: Props) {
    return (
        <div className="flex justify-between items-center bg-zinc-100 h-48 italic uppercase px-6 md:px-16">
            <span className="text-4xl font-medium">{pageTitle}</span>
            <span className="text-zinc-500 font-semibold">
                {pageUrl
                    ? urlCutting(pageUrl)
                    : pageTitle}
            </span>
        </div>
    )
}

