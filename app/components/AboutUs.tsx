/* eslint-disable @next/next/no-img-element */
import { Rufina } from "next/font/google"
import { FaArrowRight } from "react-icons/fa";

const rufina = Rufina({ subsets: ['latin'], weight: "700" })

const AboutUs = () => {
    return (
        <div className="w-full max-w-7xl mx-auto pt-16">
            <img className="mx-auto w-[80%]" src="/img/divider.svg" alt="divider" />
            <div className="px-10">
                <div className="mt-12 text-center">
                    <h3 className={rufina.className + " text-secondary-light text-5xl font-bold"}>About Us</h3>
                </div>
                <div className="lg:mt-16 flex h-40">
                    <div className="flex-1">
                        <img src="/img/ajoke-muhammed.png" alt="Ajoke Muhammed" />
                    </div>
                    <div className="flex-1 relative">
                        <img className="lg:ml-8 lg:py-16" src="img/vertical-divider.svg" alt="divider" />
                        <div className="absolute top-4 lg:top-8 lg:ml-[72px]">
                            <h4 className={rufina.className + " font-bold text-4xl text-secondary-light leading-10"}>Meet Our Founder</h4>
                            <p className="text-2xl text-justify lg:mt-8">
                                Ajoke Muhammed, one of Nigeria's previous first ladies, is now dedicated to protecting indigenous flora, notably the West African country's numerous palm tree varieties. She began her career as a dental therapist. Her spouse raised fish, aquatic snakes, and birds, but she developed her own passion for nature after he died, when she moved into a new house with a garden.
                            </p>
                            <div className="mt-12">
                                <button className="bg-secondary-light text-white text-lg lg:text-xl font-semibold py-2 lg:py-3 w-full rounded lg:rounded-lg">Learn more <FaArrowRight className="inline-flex h-5 w-5" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-[500px] flex items-center">
                <div className="flex-1 flex">
                    <img className="lg:py-8" src="img/vertical-divider.svg" alt="divider" />
                    <div className="lg:px-10 w-5/6">
                        <h4 className={rufina.className + " font-bold text-4xl text-secondary-light leading-10"}>What We Are</h4>
                        <p className="text-2xl text-justify lg:mt-8">
                            The Sarius Palmetum Botanical Garden is situated in a Maitama neighborhood. There are now over 1,000 different plant species, including approximately 450 palm species, in addition to those popular in Nigeria, such as the oil and coconut palm, and others like Bismarckia, golden, and royal palm.
                        </p>
                        <div className="mt-12">
                            <button className="bg-secondary-light text-white text-lg lg:text-xl font-semibold py-2 lg:py-3 w-full rounded lg:rounded-lg">Learn more <FaArrowRight className="inline-flex h-5 w-5" /></button>
                        </div>
                    </div>
                </div>
                <div className="relative lg:pr-10">
                    <img src="/img/palm-tree-1.svg" alt="Palm tree in SPMC" />
                    <img className="absolute -top-32 -right-0 -z-10" src="/img/ellipse-left.svg" alt="ellipse" />
                </div>
            </div>
        </div>
    )
}

export default AboutUs