"use client"

import { useRouter } from "next/navigation"

const Hero = () => {
    const router = useRouter()

    return (
        <div className="relative h-screen">
            <div className="absolute inset-0 bg-[url(/img/palm-forest.jpg)] bg-cover bg-top bg-no-repeat flex items-center selection:bg-transparent">
                {/* Overlay */}
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>
                <div className="max-w-7xl mx-auto p-4 lg:p-0">
                    <div className="text-center">
                        <h1 className="text-4xl lg:text-7xl font-bold text-[#E3D101] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">Discover the Allure of Paradise <br className="hidden lg:block" />with Palm Trees</h1>
                        <p className="mt-6 text-lg lg:text-2xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">Discover the glamour and elegance of the tropics with our extensive selection of stunning palm trees, <br className="hidden lg:block" />perfectly suited for any landscape or garden project.</p>
                        <div className="mt-8 flex items-center justify-center space-x-4">
                            <button className="bg-primary text-white text-md lg:text-2xl font-semibold px-8 py-4 lg:px-12 lg:py-5 rounded lg:rounded-lg z-10" onClick={() => router.push('/palm-species')}>Explore Now</button>
                            <button className="bg-white text-primary border border-primary inner-border text-md lg:text-2xl font-semibold px-8 py-4 lg:px-12 lg:py-5 rounded lg:rounded-lg z-10" onClick={() => router.push('/contact-us')}>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
