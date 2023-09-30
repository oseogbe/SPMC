/* eslint-disable @next/next/no-img-element */

const Contact = () => {
    return (
        <div className="w-full max-w-7xl mx-auto pt-16">
            <img className="mx-auto h-[100%]" src="/img/contact-divider.svg" alt="divider" />
            <div className="relative px-10 py-12">
                <div className="grid grid-cols-2 gap-8 lg:mt-16">
                    <div className="flex flex-col lg:mt-16 lg:p-9 bg-white border shadow-sm rounded-t-xl overflow-hidden">
                        <div className="flex items-center">
                            <img src="/img/location-marker.svg" alt="" />
                            <div className="ml-4">
                                <h4 className="text-3xl text-secondary-dark font-black">Get In Touch</h4>
                                <img className="mt-2" src="/img/contact-3-lines.svg" alt="" />
                            </div>
                        </div>
                        <p className="mt-7 text-xl">Lorem ipsum dolor sit amet consectetur. Turpis amet et elementum in vestibulum leo. Tortor quisque malesuada sed nunc platea eget habitasse.</p>
                        <div className="mt-9 space-y-9">
                            <div className="flex items-center space-x-6">
                                <img src="/img/map-marker.svg" alt="" />
                                <p className="text-xl">Plot 3703 - 3704 Babangida Boulevard, Maitama Abuja, Nigeria</p>
                            </div>
                            <div className="flex items-center space-x-6">
                                <img src="/img/telephone.svg" alt="" />
                                <p className="text-xl">+234 818 153 5915</p>
                            </div>
                            <div className="flex items-center space-x-6">
                                <img src="/img/mailbox.svg" alt="" />
                                <p className="text-xl">adnan.adeosun@sariuspalmetum.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact