"use client"

/* eslint-disable @next/next/no-img-element */

import React, { useState, useEffect, SetStateAction } from "react";
import Image from "next/image";
import { rufina } from "@/app/fonts";
import { Pagination } from "@mui/material";
import ScrollToTop from 'react-scroll-to-top'
import { IPalmSpecie } from "@/typings";

const sortByValues = [
    "Alphabet A-D",
    "Alphabet E-I",
    "Alphabet J-M",
    "Alphabet N-R",
    "Alphabet S-V",
    "Alphabet W-Z",
];

const Content = ({
    palmTrees
}: {
    palmTrees: IPalmSpecie[]
}) => {
    const [selectedOption, setSelectedOption] = useState("");

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="pt-[84px] lg:pt-18">
            <div className="relative w-full h-24 lg:h-32">
                <div className="absolute inset-0 flex justify-center items-center bg-[url(/img/palm-leafs.jpg)] bg-cover bg-bottom bg-no-repeat">
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-primary/50"></div>
                    <h3 className={rufina.className + " text-xl lg:text-5xl text-white text-center z-10"}>Palm Species</h3>
                </div>
            </div>
            <div className="w-full max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row px-5 lg:px-0 lg:mt-16 lg:mb-9">
                    <div className="mt-8 lg:mt-0 lg:flex-1 lg:px-10">
                        <h5 className="text-primary lg:text-3xl lg:font-medium">Search Here</h5>
                        <img className="h-3 lg:h-6 mt-2 lg:mt-4" src="/img/contact-3-lines.svg" alt="" />
                        <div className="relative mt-9 lg:w-4/5">
                            <input
                                type="text"
                                id="search-input"
                                className="w-full py-3 pl-4 pr-10 text-primary font-medium border-2 border-primary/50 focus:border-primary/50 rounded-lg outline-none focus:ring-0 placeholder:text-primary transition duration-300"
                                placeholder="Find a Palm Tree"
                            />
                            <img className="w-6 h-6 absolute bottom-3.5 right-4" src="/img/search.svg" alt="search" />
                        </div>
                    </div>
                    <div className="mt-8 lg:mt-0 lg:flex-1 lg:px-10">
                        <h5 className="text-primary lg:text-3xl lg:font-medium">Sort By</h5>
                        <img className="h-3 lg:h-6 mt-2 lg:mt-4" src="/img/contact-3-lines.svg" alt="" />
                        <div className="mt-9">
                            <div className="grid lg:grid-cols-3 gap-6">
                                {sortByValues.map((sortItem, i) => (
                                    <label className="flex items-center sm:px-2 lg:px-0" key={i}>
                                        <input
                                            type="radio"
                                            className="form-radio"
                                            value={sortItem}
                                            onChange={handleRadioChange}
                                            checked={selectedOption === sortItem}
                                        />
                                        <span className="ml-2 text-primary font-medium">{sortItem}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <img className="mx-auto my-8 lg:my-16 w-[80%]" src="/img/divider.svg" alt="divider" />
                <div className="grid lg:grid-cols-4 gap-4 px-5 lg:px-10 my-16">
                    {palmTrees.map((tree, i) => (
                        <div key={i} className="relative group h-[360px] border shadow-sm overflow-hidden rounded-xl hover:shadow-lg transition">
                            <Image
                                src={tree.image}
                                alt={`Palm Tree ${tree.name}`}
                                fill
                                className="scale-105 group-hover:scale-110 transition-transform duration-500 ease-in-out"
                            />
                            <div className="absolute bottom-0 w-full bg-white p-4 md:p-5 text-center lg:translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                                <h3 className="text-sm font-bold text-secondary">
                                    {tree.name}
                                </h3>
                                <p className="mt-1 text-gray-800 dark:text-gray-400">
                                    {tree.info}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <img className="mx-auto my-8 lg:my-16 w-[80%]" src="/img/divider.svg" alt="divider" />

                {/* <div className="flex justify-center px-5 mb-8 md:hidden">
                    <Pagination count={10} variant="outlined" shape="rounded" size="medium" />
                </div>

                <div className="hidden md:flex justify-center md:mb-16">
                    <Pagination count={10} variant="outlined" shape="rounded" size="large" />
                </div> */}
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

export default Content