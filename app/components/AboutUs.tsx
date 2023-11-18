/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { rufina } from "../fonts";

const AboutUs = () => {
    return (
        <div className="w-full max-w-7xl mx-auto pt-8 lg:pt-16">
            <img className="mx-auto w-[80%]" src="/img/divider.svg" alt="divider" />
            <div className="mt-6 lg:mt-12 text-center">
                <h3 className={rufina.className + " text-secondary text-3xl lg:text-5xl font-bold"}>About Us</h3>
            </div>
            <div className="flex flex-col-reverse lg:flex-row items-center px-5 lg:px-0 lg:mt-16">
                <div className="mt-6 lg:mt-0 lg:px-10 lg:flex-1">
                    <img src="/img/ajoke-muhammed.png" alt="Ajoke Muhammed" />
                </div>
                <div className="mt-5 lg:flex-1 lg:mt-0">
                    <h4 className={rufina.className + " font-bold text-center text-xl lg:text-4xl lg:text-left lg:pl-11 text-secondary leading-10"}>Meet Our Founder</h4>
                    <div className="flex">
                        <img className="h-[280px] lg:h-full" src="img/vertical-divider.svg" alt="divider" />
                        <div className="pl-5 lg:px-10">
                            <p className="text-sm lg:text-2xl text-justify mt-6 lg:mt-8">
                                Ajoke Muhammed, one of Nigeria&apos;s previous first ladies, is now dedicated to protecting indigenous flora, notably the West African country&apos;s numerous palm tree varieties. She began her career as a dental therapist. Her spouse raised fish, aquatic snakes, and birds, but she developed her own passion for nature after he died, when she moved into a new house with a garden.
                            </p>
                            <div className="mt-8 lg:mt-12">
                                <Link href="/about/our-founder"><button className="bg-secondary text-white text-base lg:text-xl font-semibold py-2 lg:py-3 w-full rounded lg:rounded-lg">Learn more <FaArrowRight className="inline-flex h-4 w-4 lg:h-5 lg:w-5" /></button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="mx-auto mt-8 w-[80%] lg:hidden" src="/img/divider.svg" alt="divider" />
            <div className="flex flex-col mt-6 lg:mt-16">
                <div className="relative lg:flex lg:items-center px-5 lg:px-0">
                    <div className="lg:flex-1">
                        <h4 className={rufina.className + " font-bold text-center text-xl lg:text-4xl lg:text-left lg:pl-11 text-secondary leading-10"}>What We Are</h4>
                        <div className="flex-1 flex">
                            <img className="h-[250px] lg:h-full" src="img/vertical-divider.svg" alt="divider" />
                            <div className="pl-5 lg:px-10">
                                <p className="text-sm lg:text-2xl text-justify mt-6 lg:mt-8">
                                    The Sarius Palmetum Botanical Garden is situated in a Maitama neighborhood. There are now over 1,000 different plant species, including approximately 450 palm species, in addition to those popular in Nigeria, such as the oil and coconut palm, and others like Bismarckia, golden, and royal palm.
                                </p>
                                <div className="mt-8 lg:mt-12">
                                    <Link href="/about/botanical-garden"><button className="bg-secondary text-white text-base lg:text-xl font-semibold py-2 lg:py-3 w-full rounded lg:rounded-lg">Learn more <FaArrowRight className="inline-flex h-4 w-4 lg:h-5 lg:w-5" /></button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative lg:flex-1 lg:pr-10">
                        <img className="mt-6 lg:mt-0 lg:ml-auto" src="/img/palm-tree-1.svg" alt="Palm tree in SPMC" />
                        <img className="hidden lg:block absolute -top-32 right-0 -z-10" src="/img/ellipse-left.svg" alt="ellipse" />
                    </div>
                    <img className="lg:hidden absolute -bottom-8 right-0 -z-10" src="/img/ellipse-left-mobile.svg" alt="ellipse" />
                </div>
            </div>
        </div>
    )
}

export default AboutUs