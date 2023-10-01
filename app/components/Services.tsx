/* eslint-disable @next/next/no-img-element */
import { Rufina } from "next/font/google"

const rufina = Rufina({ subsets: ['latin'], weight: "700" })

const Services = () => {
    return (
        <div className="w-full max-w-7xl mx-auto pt-16">
            <img className="mx-auto w-[80%]" src="/img/divider.svg" alt="divider" />
            <div className="relative">
                <div className="mt-6 lg:mt-12 text-center">
                    <h3 className={rufina.className + " text-secondary-light text-3xl lg:text-5xl font-bold"}>Our Services</h3>
                </div>
                <div className="grid lg:grid-cols-3 gap-8 px-10 mt-6 lg:mt-16">
                    <div className="service-box">
                        <img className="w-[60px] lg:w-16 mx-auto" src="/img/service-icon.svg" alt="" />
                        <div className="text-center">
                            <h5 className="mt-8 text-xl lg:text-2xl font-medium">Feugiat fermentum diam</h5>
                            <p className="text-sm lg:text-base mt-6 text-justify">
                                Lorem ipsum dolor sit amet consectetur. Feugiat fermentum diam mattis rhoncus eu massa tincidunt. Viverra erat maecenas quam varius. Dolor ut eu id ultrices consectetur.
                                Lectus hendrerit amet dui orci. Ornare etiam nulla ipsum nisl purus enim tortor consectetur.
                            </p>
                        </div>
                    </div>
                    <div className="service-box">
                        <img className="w-[60px] lg:w-16 mx-auto" src="/img/service-icon.svg" alt="" />
                        <div className="text-center">
                            <h5 className="mt-8 text-xl lg:text-2xl font-medium">Feugiat fermentum diam</h5>
                            <p className="text-sm lg:text-base mt-6 text-justify">
                                Lorem ipsum dolor sit amet consectetur. Feugiat fermentum diam mattis rhoncus eu massa tincidunt. Viverra erat maecenas quam varius. Dolor ut eu id ultrices consectetur.
                                Lectus hendrerit amet dui orci. Ornare etiam nulla ipsum nisl purus enim tortor consectetur.
                            </p>
                        </div>
                    </div>
                    <div className="service-box">
                        <img className="w-[60px] lg:w-16 mx-auto" src="/img/service-icon.svg" alt="" />
                        <div className="text-center">
                            <h5 className="mt-8 text-xl lg:text-2xl font-medium">Feugiat fermentum diam</h5>
                            <p className="text-sm lg:text-base mt-6 text-justify">
                                Lorem ipsum dolor sit amet consectetur. Feugiat fermentum diam mattis rhoncus eu massa tincidunt. Viverra erat maecenas quam varius. Dolor ut eu id ultrices consectetur.
                                Lectus hendrerit amet dui orci. Ornare etiam nulla ipsum nisl purus enim tortor consectetur.
                            </p>
                        </div>
                    </div>
                    <div className="service-box">
                        <img className="w-[60px] lg:w-16 mx-auto" src="/img/service-icon.svg" alt="" />
                        <div className="text-center">
                            <h5 className="mt-8 text-xl lg:text-2xl font-medium">Feugiat fermentum diam</h5>
                            <p className="text-sm lg:text-base mt-6 text-justify">
                                Lorem ipsum dolor sit amet consectetur. Feugiat fermentum diam mattis rhoncus eu massa tincidunt. Viverra erat maecenas quam varius. Dolor ut eu id ultrices consectetur.
                                Lectus hendrerit amet dui orci. Ornare etiam nulla ipsum nisl purus enim tortor consectetur.
                            </p>
                        </div>
                    </div>
                    <div className="service-box">
                        <img className="w-[60px] lg:w-16 mx-auto" src="/img/service-icon.svg" alt="" />
                        <div className="text-center">
                            <h5 className="mt-8 text-xl lg:text-2xl font-medium">Feugiat fermentum diam</h5>
                            <p className="text-sm lg:text-base mt-6 text-justify">
                                Lorem ipsum dolor sit amet consectetur. Feugiat fermentum diam mattis rhoncus eu massa tincidunt. Viverra erat maecenas quam varius. Dolor ut eu id ultrices consectetur.
                                Lectus hendrerit amet dui orci. Ornare etiam nulla ipsum nisl purus enim tortor consectetur.
                            </p>
                        </div>
                    </div>
                    <div className="service-box">
                        <img className="w-[60px] lg:w-16 mx-auto" src="/img/service-icon.svg" alt="" />
                        <div className="text-center">
                            <h5 className="mt-8 text-xl lg:text-2xl font-medium">Feugiat fermentum diam</h5>
                            <p className="text-sm lg:text-base mt-6 text-justify">
                                Lorem ipsum dolor sit amet consectetur. Feugiat fermentum diam mattis rhoncus eu massa tincidunt. Viverra erat maecenas quam varius. Dolor ut eu id ultrices consectetur.
                                Lectus hendrerit amet dui orci. Ornare etiam nulla ipsum nisl purus enim tortor consectetur.
                            </p>
                        </div>
                    </div>
                </div>
                <img className="absolute top-1/3 lg:bottom-4 left-0 -z-10" src="/img/ellipse-right.svg" alt="ellipse" />
            </div>
        </div>
    )
}

export default Services