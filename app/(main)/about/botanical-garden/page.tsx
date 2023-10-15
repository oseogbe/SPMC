/* eslint-disable @next/next/no-img-element */
import { Rufina } from "next/font/google"

const rufina = Rufina({ subsets: ['latin'], weight: "700" })

const BotanicalGarden = () => {
    return (
        <div className="pt-18">
            <div className="w-full py-5 lg:py-10 bg-primary">
                <h3 className={rufina.className + " text-xl lg:text-5xl text-white text-center"}>About Sarius Palmetum Botanical Garden</h3>
            </div>
            <div className="w-full max-w-7xl mx-auto">
                <div className="px-5 lg:px-10 text-sm lg:text-2xl lg:leading-9 text-justify">
                    <div className="relative mt-8 lg:mt-16 lg:px-[8%] grid grid-rows-7 grid-cols-7">
                        <img className="absolute hidden lg:block h-full top-0 bottom-0 -z-10" src="/img/ellipse-right.svg" alt="" />
                        <div className="row-start-1 row-end-5 col-start-1 col-end-5">
                            <img className="w-full object-cover" src="/img/spmc-1.png" alt="Salrius Palmetum Botanical Garden" />
                        </div>
                        <div className="row-start-2 row-end-7 col-start-4 col-end-8 z-10">
                            <img className="w-full object-cover" src="/img/spmc-2.png" alt="Salrius Palmetum Botanical Garden" />
                        </div>
                        <img className="absolute hidden lg:block lg:h-full right-0 -z-10" src="/img/ellipse-left.svg" alt="" />
                    </div>
                    <img className="mx-auto my-8 lg:my-16 w-[80%]" src="/img/divider.svg" alt="divider" />
                    <div className="space-y-4 lg:space-y-8">
                        <p>
                            The Sarius Palmetum Botanical Garden is situated in a Maitama neighborhood. But it&apos;s not just a garden of plants. There is a big ambition to transform it into a resort in addition to being a botanical park. There will soon be lodging available for those who want to spend the night and fully enjoy the location.
                        </p>
                        <p>
                            Our founder, Mrs. Murtala Muhammed, who was the late General Murtala Muhammed&apos;s wife and previous head of state, bought the strategically positioned 21 hectare land mass with a plan years ago. Because of her trips to places like Hawaii, Singapore, and Mauritius, where she gathered many of the species seen in the garden, Mrs. Muhammed developed a love for plants.
                        </p>
                        <p>
                            There are now over 1,000 different plant species, including approximately 450 palm species, in addition to those popular in Nigeria, such as the oil and coconut palm, and others like Bismarckia, golden, and royal palm, that our founder, Mrs. Murtala Muhammed, has created, other such places like the Murtala Muhammed Memorial Botanical Garden in Lagos, and was also part of the team that did the primary landscape planning for Obudu Cattle Ranch.
                        </p>
                        <p>
                            Sarius Palmetum also has an intriguing topography, with green hills on its outskirts, many rock formations, and a river that traverses the length of the garden. And there is a horticultural side to our operations, such as planting trees to prevent desertification in the north, because planting is neglected in the country, save for agriculture. We are now collaborating with Aurecon South Africa, who completed a rigorous and comprehensive site assessment study and master plan to raise awareness and attention for horticulture in Nigeria while also generating cash for the garden&apos;s care and improvement.
                        </p>
                        <p>
                            Over 200 monkeys live in the area. They only venture out at morning and in the nights, when there is little human activity, and then return to the woods, where the fruits of the trees are usually left for them. Already, the garden employs around fifty people, including laborers who trim the grasses and those who care for the nursery, in addition to security and administrative personnel. The botanical garden produces revenue through events, consulting services, plant sales, and other means.
                        </p>
                        <p>
                            Our botanical garden looks to give a unique experience in a city recognized for its various amusement and leisure sites. A scene for a Nollywood film has already been shot on its grounds, and an event called the &apos;Tamerri Festival,&apos; which is anticipated to attract authors, poets, painters, and filmmakers, will be held there shortly.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BotanicalGarden