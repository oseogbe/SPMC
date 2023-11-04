/* eslint-disable @next/next/no-img-element */
import { Rufina } from "next/font/google"

const rufina = Rufina({ subsets: ['latin'], weight: "700" })

const ManagementCompany = () => {
    return (
        <div className="pt-18">
            <div className="w-full py-5 lg:py-10 bg-primary">
                <h3 className={rufina.className + " text-xl lg:text-5xl text-white text-center"}>About Sarius Palmetum Management Company</h3>
            </div>
            <div className="w-full max-w-7xl mx-auto">
                <div className="px-5 lg:px-10 text-sm lg:text-2xl lg:leading-9 text-justify">
                    <div className="relative mt-8 lg:mt-16 lg:px-[8%] grid grid-rows-7 grid-cols-7">
                        <img className="absolute hidden lg:block h-full top-0 bottom-0 -z-10" src="/img/ellipse-right.svg" alt="" />
                        <div className="row-start-1 row-end-5 col-start-1 col-end-5">
                            <img className="w-full object-cover" src="/img/spmc-1.png" alt="Sarius Palmetum Botanical Garden" />
                        </div>
                        <div className="row-start-2 row-end-7 col-start-4 col-end-8 z-10">
                            <img className="w-full object-cover" src="/img/spmc-2.png" alt="Sarius Palmetum Botanical Garden" />
                        </div>
                        <img className="absolute hidden lg:block lg:h-full right-0 -z-10" src="/img/ellipse-left.svg" alt="" />
                    </div>
                    <img className="mx-auto my-8 lg:my-16 w-[80%]" src="/img/divider.svg" alt="divider" />
                    <div className="space-y-4 lg:space-y-8">
                        <p>
                            Sarius Palmetum Management Company was formed in 2014 by Adnan Adeosun with the primary aim of harnessing and developing the full potentials of Sarius Palmetum Botanical Garden through effective management. The company sees the opportunities in the eco - tourism industry and aims to propose various models to manage and develop more recreational green areas within Nigeria, both privately and on a PPP basis with the federal government.
                        </p>
                        <p>
                            It was carefully designed to situate the garden in a calm region while yet making it accessible to individuals in the capital city who need a break every now and then. The Ibrahim Babangida Way borders the property to the north, high-end residential residences overlooking the garden to the east, and principally, a natural forest region to the south and west.
                        </p>
                        <p>
                            Furthermore, event stages are located throughout the garden and can accommodate hundreds of people, with fees ranging from N250,000 to N500,000 for a full day, depending on the space utilized. The environment is fumigated and snake-free on a weekly basis. We charge N1000 per adult and N500 for children under the age of fourteen.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManagementCompany