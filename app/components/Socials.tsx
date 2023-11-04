/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Socials = () => {
    return (
        <div className="pt-16 -mt-48">
            <div className="bg-primary lg:pt-40 lg:pb-20 rounded-t-3xl lg:rounded-t-[100px]">
                <div className="w-full max-w-7xl mx-auto px-5 lg:px-10">
                    {/* <div className="grid grid-cols-2 lg:grid-cols-4 h-20"> */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 mt-12 lg:mt-0 pt-24 pb-12 lg:py-0">
                        <div className="flex items-center justify-center py-4 lg:py-6 bg-[#3C8E48]">
                            <img className="h-6 lg:h-full" src="/img/facebook.svg" alt="SPMC Facebook" />
                        </div>
                        <div className="flex items-center justify-center py-4 lg:py-6 bg-[#6DAA76]">
                            <a href='https://www.instagram.com/sariuspalmetumbotanicalgarden/' target='blank'>
                                <img className="h-6 lg:h-full" src="/img/instagram.svg" alt="SPMC Instagram" />
                            </a>
                        </div>
                        <div className="flex items-center justify-center py-4 lg:py-6 bg-[#3C8E48]">
                            <img className="h-6 lg:h-full" src="/img/twitter.svg" alt="SPMC Twitter" />
                        </div>
                        <div className="flex items-center justify-center py-4 lg:py-6 bg-[#6DAA76]">
                            <img className="h-6 lg:h-full" src="/img/linkedin.svg" alt="SPMC LinkedIn" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Socials