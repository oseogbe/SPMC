"use client";

import { useCallback, useMemo, useState } from "react";
import Image from "next/image";
/* eslint-disable @next/next/no-img-element */
import ScrollToTop from "react-scroll-to-top";

import { rufina } from "@/app/fonts";
import Lightbox from "@/app/components/Lightbox";


const Gallery = () => {
    const gardenPics = [
        "/img/garden/1.png",
        "/img/garden/22.png",
        "/img/garden/2.png",
        "/img/garden/3.png",
        "/img/garden/4.png",
        "/img/garden/5.png",
        "/img/garden/26.png",
        "/img/garden/7.png",
        "/img/garden/8.png",
        "/img/garden/25.png",
        "/img/garden/9.png",
        "/img/garden/10.png",
        "/img/garden/12.png",
        "/img/garden/24.png",
        "/img/garden/13.png",
        "/img/garden/14.png",
        "/img/garden/15.png",
        "/img/garden/18.png",
        "/img/garden/20.png",
        "/img/garden/21.png",
        "/img/garden/17.png",
        "/img/garden/6.png",
        "/img/garden/23.png",
        "/img/garden/27.png",
        "/img/garden/28.png",
        "/img/garden/29.png",
        "/img/garden/30.png",
        "/img/garden/31.png",
        "/img/garden/32.png",
        "/img/garden/34.png",
        "/img/garden/24.png",
        "/img/garden/35.png",
        "/img/garden/11.png",
        "/img/garden/36.png",
        "/img/garden/33.png",
        "/img/garden/38.png",
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);

    const viewImage = useCallback((index) => {
        setIsOpen(true);
        setImageIndex(index);
    }, []);

    return (
        <div className="pt-[84px] lg:pt-18">
            <div className="relative w-full h-24 lg:h-32">
                <div className="absolute inset-0 flex justify-center items-center bg-[url(/img/palm-leafs.jpg)] bg-cover bg-bottom bg-no-repeat">
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-primary/50"></div>
                    <h3 className={rufina.className + " text-xl lg:text-5xl text-white text-center z-10"}>Our Gallery</h3>
                </div>
            </div>
            <div className="w-full max-w-7xl mx-auto">
                <div className="columns-2 md:columns-3 lg:columns-4 gap-2 md:gap-5 space-y-2 md:space-y-5 px-5 lg:px-10 my-8 lg:my-16">
                    {
                        gardenPics.map((pic, i) => (
                            <div
                                key={pic}
                                className="overflow-hidden cursor-pointer"
                                onClick={() => viewImage(i)}
                            >
                                <Image
                                    src={pic}
                                    width={500}
                                    height={500}
                                    className="object-cover transition duration-500 ease-out hover:scale-110"
                                    alt="A picture gallery of Sarius Palmetum Botanical Garden in Maitama, Abuja"
                                />
                            </div>
                        ))
                    }
                </div>
                {/* <img className="mx-auto my-8 lg:my-16 w-[80%]" src="/img/divider.svg" alt="divider" />
                <div className="flex justify-center px-5 mb-8 md:hidden">
                    <Pagination count={10} variant="outlined" shape="rounded" size="medium" />
                </div>

                <div className="hidden md:flex justify-center md:mb-16">
                    <Pagination count={10} variant="outlined" shape="rounded" size="large" />
                </div> */}
            </div>
            <Lightbox
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                index={imageIndex}
                slides={gardenPics.map(image => ({
                    src: image
                }))}
            />
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