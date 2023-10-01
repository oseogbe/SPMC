/* eslint-disable @next/next/no-img-element */

const Contact = () => {
    return (
        <div className="w-full max-w-7xl mx-auto pt-16">
            <img className="mx-auto h-[100%]" src="/img/contact-divider.svg" alt="divider" />
            <div className="relative px-10 py-12">
                <div className="grid grid-cols-2 gap-8">
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
                    <div className="h-min shadow-sm rounded-t-xl overflow-hidden">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.5625062276627!2d7.488490193568026!3d9.103557672833732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a7b14068519%3A0xc35a742a99e11ed1!2sSarius%20Palmetum!5e0!3m2!1sen!2sng!4v1696086057205!5m2!1sen!2sng" width="600" height="450" style={{ border: 0 }} loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact