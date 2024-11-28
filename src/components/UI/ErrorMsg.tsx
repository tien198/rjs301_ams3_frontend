interface Props {
    msg: string
}

export default function ErrorMsg({ msg }: Props) {
    return (
        <div className={`text-red-700 ${msg ? 'h-8' : 'h-0'} duration-300`}>
            <b className="block mt-3"> {msg} </b>
        </div>
    )
}