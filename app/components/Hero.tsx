const Hero = () => {
    return (
        <div>
            <video autoPlay loop muted>
                <source src="/video/spmc_video.mp4" type="video/mp4" />
            </video>
            <div className="absolute top-0 w-full bottom-0 bg-[rgba(0,0,0,0.5)] flex items-center selection:bg-transparent">
                <div className="w-full max-w-7xl mx-auto p-4 lg:p-0">
                    <div className="text-center">
                        <h1 className="text-4xl lg:text-7xl font-bold text-white text-shadow-lg">Discover the Allure of Paradise <br />with Palm Trees</h1>
                        <p className="mt-6 text-lg lg:text-2xl text-white text-shadow-md">Discover the glamour and elegance of the tropics with our extensive selection of stunning palm trees, <br />perfectly suited for any landscape or garden project.</p>
                        <div className="mt-8 flex items-center justify-center space-x-4">
                            <button className="bg-secondary-light text-white text-lg lg:text-2xl font-semibold px-8 py-4 lg:px-12 lg:py-5 rounded lg:rounded-lg">Explore Now</button>
                            <button className="bg-transparent text-white border border-white text-lg lg:text-2xl font-semibold px-8 py-4 lg:px-12 lg:py-5 rounded lg:rounded-lg">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero