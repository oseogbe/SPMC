"use client"

import { useRouter } from "next/navigation"

const Hero = () => {
    const router = useRouter()
    // const videoRef = useRef<HTMLVideoElement | null>(null)
    // const [overlayHeight, setOverlayHeight] = useState<number | null>(null)
    // const [readyState, setReadyState] = useState<number>(0);

    // const handleVideoLoadedMetadata = () => {
    //     if (videoRef.current) {
    //         setOverlayHeight(videoRef.current.clientHeight);
    //     }
    // };

    // useEffect(() => {
    //     let videoElement = videoRef.current;

    //     if (videoElement) {
    //         // If video metadata is already loaded, set the overlay height
    //         if (videoElement.readyState >= 1) {
    //             setReadyState(videoElement.readyState);
    //             setOverlayHeight(videoElement.clientHeight);
    //         } else {
    //             // If metadata is not loaded yet, use the event listener
    //             videoElement.addEventListener('loadedmetadata', handleVideoLoadedMetadata);
    //         }
    //     }

    //     // Cleanup event listener on component unmount
    //     return () => {
    //         if (videoElement) {
    //             videoElement.removeEventListener('loadedmetadata', handleVideoLoadedMetadata);
    //         }
    //     };
    // }, [readyState])

    return (
        <div className="h-screen">
            {/* <video autoPlay loop muted>
                <source src="/video/spmc_video.mp4" type="video/mp4" />
            </video>
            <div className={`absolute top-0 w-full h-screen bg-[rgba(0,0,0,0.5)] flex items-center selection:bg-transparent`}>
                <div className="w-full max-w-7xl mx-auto p-4 lg:p-0">
                    <div className="text-center">
                        <h1 className="text-4xl lg:text-7xl font-bold text-white text-shadow-lg">Discover the Allure of Paradise <br className="hidden lg:block" />with Palm Trees</h1>
                        <p className="mt-6 text-lg lg:text-2xl text-white text-shadow-md">Discover the glamour and elegance of the tropics with our extensive selection of stunning palm trees, <br className="hidden lg:block" />perfectly suited for any landscape or garden project.</p>
                        <div className="mt-8 flex items-center justify-center space-x-4">
                            <button className="bg-secondary text-white text-lg lg:text-2xl font-semibold px-8 py-4 lg:px-12 lg:py-5 rounded lg:rounded-lg" onClick={() => router.push('/palm-species')}>Explore Now</button>
                            <button className="bg-transparent text-white inner-border border-white text-lg lg:text-2xl font-semibold px-8 py-4 lg:px-12 lg:py-5 rounded lg:rounded-lg" onClick={() => router.push('/contact-us')}>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="absolute inset-0 bg-[url(/img/palm-forest.jpg)] bg-cover bg-top bg-no-repeat flex items-center selection:bg-transparent">
                <div className="max-w-7xl mx-auto p-4 lg:p-0">
                    <div className="text-center">
                        <h1 className="text-4xl lg:text-7xl font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">Discover the Allure of Paradise <br className="hidden lg:block" />with Palm Trees</h1>
                        <p className="mt-6 text-lg lg:text-2xl text-gray-900 md:text-white md:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">Discover the glamour and elegance of the tropics with our extensive selection of stunning palm trees, <br className="hidden lg:block" />perfectly suited for any landscape or garden project.</p>
                        <div className="mt-8 flex items-center justify-center space-x-4">
                            <button className="bg-primary text-white text-lg lg:text-2xl font-semibold px-8 py-4 lg:px-12 lg:py-5 rounded lg:rounded-lg" onClick={() => router.push('/palm-species')}>Explore Now</button>
                            <button className="bg-transparent text-primary border border-primary inner-border text-lg lg:text-2xl font-semibold px-8 py-4 lg:px-12 lg:py-5 rounded lg:rounded-lg" onClick={() => router.push('/contact-us')}>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero