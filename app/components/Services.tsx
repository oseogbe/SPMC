/* eslint-disable @next/next/no-img-element */
import { rufina } from "@/app/fonts"

const Services = () => {
    return (
        <div className="w-full max-w-7xl mx-auto pt-16">
            <img className="mx-auto w-[80%]" src="/img/divider.svg" alt="divider" />
            <div className="relative">
                <div className="mt-6 lg:mt-12 text-center">
                    <h3 className={rufina.className + " text-secondary text-3xl lg:text-5xl font-bold"}>Our Services</h3>
                </div>
                <div className="grid lg:grid-cols-3 gap-8 px-5 lg:px-10 mt-6 lg:mt-16">
                    <div className="service-box">
                        <img className="w-[60px] lg:w-16 mx-auto" src="/img/service-icon.svg" alt="" />
                        <div className="text-center">
                            <h5 className="mt-8 text-xl lg:text-2xl font-medium">Palm Tree Sales</h5>
                            <p className="text-sm lg:text-base mt-6 text-justify">
                                The garden offers a wide variety of palm trees and exotic plants for purchase. These include rare and ornamental species suitable for landscaping, gardening, or enhancing indoor and outdoor spaces. Experts are available to provide advice on plant care and selection.
                            </p>
                        </div>
                    </div>
                    <div className="service-box">
                        <img className="w-[60px] lg:w-16 mx-auto" src="/img/service-icon.svg" alt="" />
                        <div className="text-center">
                            <h5 className="mt-8 text-xl lg:text-2xl font-medium">Event Hosting</h5>
                            <p className="text-sm lg:text-base mt-6 text-justify">
                                The garden offers a lush, green setting for hosting events such as weddings, birthday parties, anniversaries, and corporate gatherings. The tranquil environment and natural beauty make it a unique and memorable venue for special occasions.
                            </p>
                        </div>
                    </div>
                    <div className="service-box">
                        <img className="w-[60px] lg:w-16 mx-auto" src="/img/service-icon.svg" alt="" />
                        <div className="text-center">
                            <h5 className="mt-8 text-xl lg:text-2xl font-medium">Photography Sessions</h5>
                            <p className="text-sm lg:text-base mt-6 text-justify">
                                Known for its stunning landscape and exotic plants, the garden is a top choice for professional photoshoots. It’s frequently used for pre-wedding shoots, family portraits, and artistic photography, offering an unmatched natural backdrop.
                            </p>
                        </div>
                    </div>
                    <div className="service-box">
                        <img className="w-[60px] lg:w-16 mx-auto" src="/img/service-icon.svg" alt="" />
                        <div className="text-center">
                            <h5 className="mt-8 text-xl lg:text-2xl font-medium">Guided Tours</h5>
                            <p className="text-sm lg:text-base mt-6 text-justify">
                                Visitors can enjoy guided tours to explore the wide variety of palms, flowers, and exotic plants cultivated in the garden. These tours provide an educational experience, showcasing the importance and diversity of plant life.
                            </p>
                        </div>
                    </div>
                    <div className="service-box">
                        <img className="w-[60px] lg:w-16 mx-auto" src="/img/service-icon.svg" alt="" />
                        <div className="text-center">
                            <h5 className="mt-8 text-xl lg:text-2xl font-medium">Relaxation & Picnics</h5>
                            <p className="text-sm lg:text-base mt-6 text-justify">
                                The serene atmosphere makes it a perfect spot for relaxation or family picnics. Visitors can unwind, meditate, or simply enjoy a peaceful day out amidst nature’s beauty.
                            </p>
                        </div>
                    </div>
                    <div className="service-box">
                        <img className="w-[60px] lg:w-16 mx-auto" src="/img/service-icon.svg" alt="" />
                        <div className="text-center">
                            <h5 className="mt-8 text-xl lg:text-2xl font-medium">Dining Services</h5>
                            <p className="text-sm lg:text-base mt-6 text-justify">
                                The garden features a restaurant offering delicious meals, snacks, and beverages. Guests can dine in a calm outdoor setting, surrounded by the garden’s breathtaking greenery.
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