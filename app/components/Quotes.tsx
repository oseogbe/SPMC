/* eslint-disable @next/next/no-img-element */
const Quotes = () => {
    return (
        <div className="w-full max-w-7xl mx-auto pt-16">
            <img className="mx-auto w-[80%]" src="/img/divider.svg" alt="divider" />
            <div className="flex space-x-8 lg:mt-16">
                <div className="flex-1">
                    <img src="/img/quote-1.png" alt="palm tree quote 1" />
                </div>
                <div className="flex-1">
                    <img src="/img/quote-2.png" alt="palm tree quote 2" />
                </div>
            </div>
        </div>
    )
}

export default Quotes