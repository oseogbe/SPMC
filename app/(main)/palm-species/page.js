"use client"

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Rufina } from "next/font/google"
import { Pagination } from "@mui/material";

const rufina = Rufina({ subsets: ['latin'], weight: "700" })

const sortByValues = [
    "Alphabet A-D",
    "Alphabet E-I",
    "Alphabet J-M",
    "Alphabet N-R",
    "Alphabet S-V",
    "Alphabet W-Z",
];

const palmTrees = [
    {
        name: "Sabal palmetto",
        info: "Sabal palmetto, also known as cabbage palm is one of 15 species of palmetto palm. It is native to the Southern United States, the Yucatán Peninsula in Mexico, and the West Indies.",
        image: "/img/trees/beach-2178747_1280.jpg"
    },
    {
        name: "Sabal palmetto",
        info: "Sabal palmetto, also known as cabbage palm is one of 15 species of palmetto palm. It is native to the Southern United States, the Yucatán Peninsula in Mexico, and the West Indies.",
        image: "/img/trees/beach-2178747_1280.jpg"
    },
    {
        name: "Sabal palmetto",
        info: "Sabal palmetto, also known as cabbage palm is one of 15 species of palmetto palm. It is native to the Southern United States, the Yucatán Peninsula in Mexico, and the West Indies.",
        image: "/img/trees/beach-2178747_1280.jpg"
    },
    {
        name: "Sabal palmetto",
        info: "Sabal palmetto, also known as cabbage palm is one of 15 species of palmetto palm. It is native to the Southern United States, the Yucatán Peninsula in Mexico, and the West Indies.",
        image: "/img/trees/beach-2178747_1280.jpg"
    },
    {
        name: "Sabal palmetto",
        info: "Sabal palmetto, also known as cabbage palm is one of 15 species of palmetto palm. It is native to the Southern United States, the Yucatán Peninsula in Mexico, and the West Indies.",
        image: "/img/trees/beach-2178747_1280.jpg"
    },
    {
        name: "Sabal palmetto",
        info: "Sabal palmetto, also known as cabbage palm is one of 15 species of palmetto palm. It is native to the Southern United States, the Yucatán Peninsula in Mexico, and the West Indies.",
        image: "/img/trees/beach-2178747_1280.jpg"
    },
    {
        name: "Sabal palmetto",
        info: "Sabal palmetto, also known as cabbage palm is one of 15 species of palmetto palm. It is native to the Southern United States, the Yucatán Peninsula in Mexico, and the West Indies.",
        image: "/img/trees/beach-2178747_1280.jpg"
    },
    {
        name: "Sabal palmetto",
        info: "Sabal palmetto, also known as cabbage palm is one of 15 species of palmetto palm. It is native to the Southern United States, the Yucatán Peninsula in Mexico, and the West Indies.",
        image: "/img/trees/beach-2178747_1280.jpg"
    },
    {
        name: "Sabal palmetto",
        info: "Sabal palmetto, also known as cabbage palm is one of 15 species of palmetto palm. It is native to the Southern United States, the Yucatán Peninsula in Mexico, and the West Indies.",
        image: "/img/trees/beach-2178747_1280.jpg"
    },
    {
        name: "Sabal palmetto",
        info: "Sabal palmetto, also known as cabbage palm is one of 15 species of palmetto palm. It is native to the Southern United States, the Yucatán Peninsula in Mexico, and the West Indies.",
        image: "/img/trees/beach-2178747_1280.jpg"
    },
    {
        name: "Sabal palmetto",
        info: "Sabal palmetto, also known as cabbage palm is one of 15 species of palmetto palm. It is native to the Southern United States, the Yucatán Peninsula in Mexico, and the West Indies.",
        image: "/img/trees/beach-2178747_1280.jpg"
    },
    {
        name: "Sabal palmetto",
        info: "Sabal palmetto, also known as cabbage palm is one of 15 species of palmetto palm. It is native to the Southern United States, the Yucatán Peninsula in Mexico, and the West Indies.",
        image: "/img/trees/beach-2178747_1280.jpg"
    },
    {
        name: "Sabal palmetto",
        info: "Sabal palmetto, also known as cabbage palm is one of 15 species of palmetto palm. It is native to the Southern United States, the Yucatán Peninsula in Mexico, and the West Indies.",
        image: "/img/trees/beach-2178747_1280.jpg"
    },
    {
        name: "Sabal palmetto",
        info: "Sabal palmetto, also known as cabbage palm is one of 15 species of palmetto palm. It is native to the Southern United States, the Yucatán Peninsula in Mexico, and the West Indies.",
        image: "/img/trees/beach-2178747_1280.jpg"
    },
    {
        name: "Sabal palmetto",
        info: "Sabal palmetto, also known as cabbage palm is one of 15 species of palmetto palm. It is native to the Southern United States, the Yucatán Peninsula in Mexico, and the West Indies.",
        image: "/img/trees/beach-2178747_1280.jpg"
    },
    {
        name: "Sabal palmetto",
        info: "Sabal palmetto, also known as cabbage palm is one of 15 species of palmetto palm. It is native to the Southern United States, the Yucatán Peninsula in Mexico, and the West Indies.",
        image: "/img/trees/beach-2178747_1280.jpg"
    },
    {
        name: "Sabal palmetto",
        info: "Sabal palmetto, also known as cabbage palm is one of 15 species of palmetto palm. It is native to the Southern United States, the Yucatán Peninsula in Mexico, and the West Indies.",
        image: "/img/trees/beach-2178747_1280.jpg"
    },
    {
        name: "Sabal palmetto",
        info: "Sabal palmetto, also known as cabbage palm is one of 15 species of palmetto palm. It is native to the Southern United States, the Yucatán Peninsula in Mexico, and the West Indies.",
        image: "/img/trees/beach-2178747_1280.jpg"
    },
]

const PalmSpecies = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="pt-18">
            <div className="w-full py-5 lg:py-10 bg-primary">
                <h3 className={rufina.className + " text-xl lg:text-5xl text-white text-center"}>Palm Species</h3>
            </div>
            <div className="w-full max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row px-5 lg:px-0 lg:mt-16 lg:mb-9">
                    <div className="lg:flex-1 lg:px-10">
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
                    <div className="lg:flex-1 lg:px-10">
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
                <div className="hidden lg:grid lg:grid-cols-3 gap-8 lg:px-10 my-16">
                    {palmTrees.map((tree, i) => (
                        <div key={i} className="relative group h-[460px] border shadow-sm overflow-hidden rounded-xl hover:shadow-lg transition">
                            <img
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                src={tree.image}
                                alt="Palm Image"
                            />
                            <div className="absolute bottom-0 bg-white p-4 md:p-5 text-center lg:translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                                <h3 className="text-lg font-bold text-secondary">
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
                <div className="flex justify-center lg:mb-16">
                    <Pagination count={10} variant="outlined" shape="rounded" size="large" />
                </div>
            </div>
        </div>
    )
}

export default PalmSpecies