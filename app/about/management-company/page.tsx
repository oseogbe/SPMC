import { Rufina } from "next/font/google"

const rufina = Rufina({ subsets: ['latin'], weight: "700" })

const ManagementCompany = () => {
    return (
        <div className="pt-20">
            <div className="w-full py-5 lg:py-10 bg-secondary-dark">
                <h3 className={rufina.className + " text-xl lg:text-5xl text-white text-center"}>About Sarius Palmetum Botanical Garden</h3>
            </div>
            <div className="w-full max-w-7xl mx-auto">
                <div className="px-5 lg:px-10 text-sm lg:text-2xl lg:leading-9 text-justify">
                    <p className="py-4">
                        Sarius Palmetum Management Company was formed in 2014 by Adnan Adeosun with the primary aim of harnessing and developing the full potentials of Sarius Palmetum Botanical Garden through effective management. The company sees the opportunities in the eco - tourism industry and aims to propose various models to manage and develop more recreational green areas within Nigeria, both privately and on a PPP basis with the federal government.
                    </p>
                    <p className="py-4">
                        It was carefully designed to situate the garden in a calm region while yet making it accessible to individuals in the capital city who need a break every now and then. The Ibrahim Babangida Way borders the property to the north, high - end residential residences overlooking the garden to the east, and principally, a natural forest region to the south and west.
                    </p>
                    <p className="py-4">
                        Furthermore, event stages are located throughout the garden and can accommodate hundreds of people, with fees ranging from N250,000 to N500,000 for a full day, depending on the space utilized. The environment is fumigated and snake - free on a weekly basis. We charge N1000 per adult and N500 for children under the age of fourteen.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ManagementCompany