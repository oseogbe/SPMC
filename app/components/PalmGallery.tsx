"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from 'react';
import { useRouter } from "next/navigation"
import { register } from 'swiper/element/bundle';
import { Rufina } from "next/font/google"
import { FaArrowRight } from 'react-icons/fa';

register();

const rufina = Rufina({ subsets: ['latin'], weight: "700" })

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
]

const PalmGallery = () => {
    const swiperElRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        const swiperContainer = swiperElRef.current;

        const params = {
            grabCursor: false,
            slidesPerView: 1,
            spaceBetween: 40,
            breakpoints: {
                // small screens
                640: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                },
                // medium screens
                768: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                },
                // normal laptop screens
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 60,
                },
            },
            mousewheel: {
                forceToAxis: true,
            },
            // pagination: true,
            loop: true,
            autoplay: {
                delay: 5000, // Autoplay interval in milliseconds (3 seconds in this example)
            },
        };

        Object.assign(swiperContainer, params);
        swiperContainer.initialize();
    }, []);

    return (
        <div className="w-full max-w-7xl mx-auto pt-16">
            <img className="mx-auto w-[80%]" src="/img/divider.svg" alt="divider" />
            <div className="relative px-5 lg:px-10 py-12 bg-[#F6FDFD]">
                <div className="text-center">
                    <h3 className={rufina.className + " text-secondary text-3xl lg:text-5xl font-bold"}>Palm Gallery</h3>
                </div>

                <div className='mt-6 lg:hidden border shadow-sm overflow-hidden rounded-xl'>
                    <swiper-container
                        ref={swiperElRef}
                        init="false"
                    >
                        {palmTrees.map((tree, i) => (
                            <swiper-slide key={i}>
                                <div key={i} className="relative group min-w-full h-[420px] hover:shadow-lg transition">
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
                            </swiper-slide>
                        ))}
                    </swiper-container>
                </div>


                <div className="hidden lg:grid lg:grid-cols-3 gap-8 lg:px-10 mt-16">
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

                {/* <a className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition" href="#">
                        <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
                            <img className="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl" src="/img/palm-tree.jpeg" alt="Palm Image" />
                        </div>
                        <div className="p-4 md:p-5 text-center">
                            <h3 className="text-lg font-bold text-secondary">
                                Sabal palmetto
                            </h3>
                            <p className="mt-1 text-gray-800 dark:text-gray-400">
                                Sabal palmetto, also known as cabbage palm is one of 15 species of palmetto palm. It is native to the Southern United States, the Yucatán Peninsula in Mexico, and the West Indies.
                            </p>
                        </div>
                    </a> */}
                <div className="mt-12 flex items-center justify-center">
                    <button
                        className="bg-secondary text-white text-lg lg:text-xl font-semibold py-2 lg:py-3 min-w-[300px] w-full lg:w-[30%] rounded lg:rounded-lg"
                        onClick={() => router.push('/palm-species')}
                    >
                        See all <FaArrowRight className="inline-flex h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PalmGallery