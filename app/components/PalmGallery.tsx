"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { rufina } from "../fonts";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IPalmSpecie } from "@/typings";

const PalmGallery = ({
    palmTrees
}: {
    palmTrees: IPalmSpecie[]
}) => {
    const router = useRouter();

    return (
        <div className="w-full mt-16 pt-16">
            <img className="mx-auto w-[80%]" src="/img/divider.svg" alt="divider" />
            <div className="relative px-5 lg:px-10 py-12 bg-[#F6FDFD]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h3
                            className={
                                rufina.className +
                                " text-secondary text-3xl lg:text-5xl font-bold"
                            }
                        >
                            Palm Species
                        </h3>
                    </div>

                    <div className="mt-6 lg:hidden border shadow-sm overflow-hidden rounded-xl">
                        <Swiper
                            grabCursor={false}
                            slidesPerView={1}
                            spaceBetween={40}
                            breakpoints={{
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
                            }}
                            mousewheel={{
                                forceToAxis: true,
                            }}
                            // pagination: true,
                            loop={true}
                            autoplay={{
                                delay: 5000,
                            }}
                            init={false}
                        >
                            {palmTrees.map((tree, i) => (
                                <SwiperSlide key={i}>
                                    <div
                                        key={i}
                                        className="relative group min-w-full h-[360px] hover:shadow-lg transition"
                                    >
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
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="hidden lg:grid lg:grid-cols-4 gap-4 lg:px-10 mt-16">
                        {palmTrees.map((tree, i) => (
                            <div
                                key={i}
                                className="relative group h-[360px] border shadow-sm overflow-hidden rounded-xl hover:shadow-lg transition"
                            >
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

                    <div className="mt-12 flex items-center justify-center">
                        <button
                            className="bg-secondary text-white text-lg lg:text-xl font-semibold py-2 lg:py-3 min-w-[300px] w-full lg:w-[30%] rounded lg:rounded-lg"
                            onClick={() => router.push("/palm-species")}
                        >
                            See all <FaArrowRight className="inline-flex h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PalmGallery;
