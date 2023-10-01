import Link from "next/link"

/* eslint-disable @next/next/no-img-element */
const Footer = () => {
    return (
        <div className="pt-16 -mt-48">
            <div className="bg-secondary-dark lg:pt-40 lg:pb-20 lg:rounded-t-[100px]">
                <div className="w-full max-w-7xl mx-auto px-10">
                    <div className="grid grid-cols-4 h-20">
                        <div className="flex items-center justify-center bg-[#3C8E48]">
                            <img src="/img/facebook.svg" alt="SPMC Facebook" />
                        </div>
                        <div className="flex items-center justify-center bg-[#6DAA76]">
                            <img src="/img/instagram.svg" alt="SPMC Instagram" />
                        </div>
                        <div className="flex items-center justify-center bg-[#3C8E48]">
                            <img src="/img/twitter.svg" alt="SPMC Twitter" />
                        </div>
                        <div className="flex items-center justify-center bg-[#6DAA76]">
                            <img src="/img/linkedin.svg" alt="SPMC LinkedIn" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#06390D] lg:py-12">
                <div className="flex w-full max-w-7xl mx-auto px-10">
                    <div className="flex-1 pr-8 lg:pr-16">
                        <h3 className="text-lg lg:text-2xl text-white font-bold">About Sarius Palmetum Botanical Garden</h3>
                        <img className="mt-3 lg:w-3/5" src="/img/footer-3-lines.svg" alt="" />
                        <p className="mt-4 lg:mt-8 lg:text-lg text-white">
                            Lorem ipsum dolor sit amet consectetur. Tincidunt ultrices ut egestas dictum bibendum ultrices leo vulputate commodo. Dis mauris velit sagittis volutpat commodo blandit. Neque habitant integer eget tristique suspendisse et cursus. Tristique massa
                        </p>
                    </div>
                    <div className="flex-1 pr-8 lg:px-16">
                        <h3 className="text-lg lg:text-2xl text-white font-bold">Quick Link</h3>
                        <img className="mt-3 lg:w-3/5" src="/img/footer-3-lines.svg" alt="" />
                        <div className="grid lg:grid-cols-2 lg:gap-8 mt-4 lg:mt-8 lg:text-lg text-white">
                            <div className="flex items-center">
                                <img src="/img/ninja-star.svg" alt="" />
                                <Link className="ml-1" href=''>About The Company</Link>
                            </div>
                            <div className="flex items-center">
                                <img src="/img/ninja-star.svg" alt="" />
                                <Link className="ml-1" href=''>About Our Pioneer</Link>
                            </div>
                            <div className="flex items-center">
                                <img src="/img/ninja-star.svg" alt="" />
                                <Link className="ml-1" href=''>Our Palm Tree Gallery</Link>
                            </div>
                            <div className="flex items-center">
                                <img src="/img/ninja-star.svg" alt="" />
                                <Link className="ml-1" href=''>Make An Enquiry</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-9 bg-[#E7F1E9] flex items-center justify-center text-secondary-light">
                <p>Copyright © 2023 Sarius Palmetum & Botanical Garden</p>
            </div>
        </div>
    )
}

export default Footer