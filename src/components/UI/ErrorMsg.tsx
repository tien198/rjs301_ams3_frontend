interface Props {
    msg: string
}

export default function ErrorMsg({ msg }: Props) {
    return (
        <div className={`${msg ? 'h-8' : 'h-0'} text-red-700 duration-300`}>
            <b className="block mt-3"> {msg} </b>
        </div>
    )
}