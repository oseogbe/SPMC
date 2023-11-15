"use client"

/* eslint-disable @next/next/no-img-element */
import { Rufina } from "next/font/google"
import { Pagination } from "@mui/material";
import ScrollToTop from "react-scroll-to-top";

const rufina = Rufina({ subsets: ['latin'], weight: "700" })

const Gallery = () => {
    return (
        <div className="pt-20">
            <div className="w-full py-8 lg:py-10 bg-primary">
                <h3 className={rufina.className + " text-xl lg:text-5xl text-white text-center"}>Our Gallery</h3>
            </div>
            <div className="w-full max-w-7xl mx-auto">
                <div className="hidden lg:grid lg:grid-cols-3 gap-8 lg:px-10 my-16">

                </div>
                <img className="mx-auto my-8 lg:my-16 w-[80%]" src="/img/divider.svg" alt="divider" />
                <div className="flex justify-center px-5 mb-8 md:hidden">
                    <Pagination count={10} variant="outlined" shape="rounded" size="medium" />
                </div>

                <div className="hidden md:flex justify-center md:mb-16">
                    <Pagination count={10} variant="outlined" shape="rounded" size="large" />
                </div>
            </div>
            <ScrollToTop
                smooth
                top={1000}
                color='#3C8E48'
                className='scroll-to-top'
            />
        </div>
    )
}

export default Gallery