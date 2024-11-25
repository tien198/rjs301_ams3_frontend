import { DetailProps } from ".";

function DetailDescriptionSide({ product, className }: DetailProps) {
    const article = product.long_desc?.split('\n')

    return (
        <div className={`${className} flex flex-col gap-4`}>
            <div >
                <span className="inline-block bg-zinc-900 text-white px-5 py-3 uppercase">
                    Description
                </span>
            </div>
            <h3 className="uppercase text-black text-xl">Product Description</h3>
            <article>
                {article?.map((i, index) =>
                    <p key={index} className={index === 0 ? 'uppercase mb-2' : 'mb-1'}>{i}</p>
                )}
            </article>
        </div>
    );
}

export default DetailDescriptionSide;