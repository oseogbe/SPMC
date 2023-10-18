/* eslint-disable @next/next/no-img-element */
const ContactUs = () => {
    return (
        <div className="w-full h-3/4 grid grid-rows-9 grid-cols-9 z-10 max-w-7xl mx-auto">
            <div className="relative bg-white row-start-2 row-end-[9] col-start-1 col-end-4 z-20 rounded-lg shadow-lg">
                <div className="absolute w-full h-full bg-[#6DAA76] clip-contact-info"></div>
                <div className="px-14 pt-[25%]">
                    <h3 className="text-3xl font-medium text-dark-green z-10">Contact <br className="hidden lg:block" />Directly</h3>
                    <div className="mt-7 lg:mt-12 space-y-5 lg:space-y-6">
                        <div className="flex items-center space-x-3">
                            <img className="w-8" src="/img/call.svg" alt="" />
                            <p className="text-sm lg:text-xl text-dark-green font-medium">+234 (816) 574-8910</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <img className="w-8" src="/img/location.svg" alt="" />
                            <p className="text-sm lg:text-xl text-dark-green font-medium">Abuja, Nigeria</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-6 pl-1 mt-6 lg:mt-12">
                        <img className="w-6" src="/img/instagram-icon.svg" alt="spmc instagram" />
                        <img className="w-6" src="/img/facebook-icon.svg" alt="spmc facebook" />
                        <img className="w-6" src="/img/linkedin-icon.svg" alt="spmc linkedin" />
                        <img className="w-6" src="/img/twitter-icon.svg" alt="spmc twitter" />
                        <img className="w-6" src="/img/youtube-icon.svg" alt="spmc youtube" />
                    </div>
                </div>
            </div>
            <div className="bg-white row-start-1 row-end-[10] col-start-2 col-end-10 rounded-lg shadow-lg">
                <div className="pl-[25%] w-full h-full">
                    <form className="mx-auto w-3/4 h-full pt-[10%]">
                        <h2 className="text-3xl text-[#1F2937] text-center font-light">Send us a <span className="text-dark-green font-semibold">Message</span></h2>
                        <div className="lg:mt-24">
                            <div className="grid grid-cols-2 lg:gap-x-8 lg:gap-y-16">
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="first-name"
                                        className="contact-input"
                                    />
                                    <label for="first-name" className="contact-input-label">First name</label>
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="last-name"
                                        className="contact-input"
                                    />
                                    <label for="last-name" className="contact-input-label">Last name</label>
                                </div>
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        className="contact-input"
                                    />
                                    <label for="email" className="contact-input-label">Email address</label>
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="phone"
                                        className="contact-input"
                                    />
                                    <label for="phone" className="contact-input-label">Phone</label>
                                </div>
                                <div className="relative col-span-2">
                                    <textarea
                                        type="text"
                                        id="message"
                                        className="contact-input"
                                        rows="5"
                                    />
                                    <label for="message" className="contact-input-label">Message</label>
                                </div>
                            </div>
                            <button type="button" className="w-full h-14 mt-8 bg-primary text-white text-center font-medium rounded-lg">SEND MESSAGE</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default ContactUs