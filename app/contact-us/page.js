/* eslint-disable @next/next/no-img-element */
const ContactUs = () => {
    return (
        <div className="w-full h-3/4 flex flex-col-reverse lg:grid lg:grid-rows-9 lg:grid-cols-9 lg:z-10 max-w-7xl mx-auto">
            <div className="relative bg-white mt-16 lg:mt-0 lg:row-start-2 lg:row-end-[9] lg:col-start-1 lg:col-end-4 z-20 lg:rounded-lg lg:shadow-lg">
                <div className="absolute w-full h-full bg-[#6DAA76] clip-contact-info"></div>
                <div className="flex flex-col items-center lg:block lg:px-14 min-h-[300px] lg:pt-[25%]">
                    <h3 className="text-2xl lg:text-3xl text-center lg:text-left font-medium text-dark-green z-10">Contact <br className="hidden lg:block" />Directly</h3>
                    <div className="mt-7 lg:mt-12 space-y-5 lg:space-y-6">
                        <div className="flex items-center space-x-3">
                            <img className="w-6 lg:w-8" src="/img/call.svg" alt="" />
                            <p className="text-sm lg:text-xl text-dark-green font-medium">+234 (816) 574-8910</p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <img className="w-6 lg:w-8" src="/img/location.svg" alt="" />
                            <p className="text-sm lg:text-xl text-dark-green font-medium">Abuja, Nigeria</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-6 pl-1 mt-8 lg:mt-12">
                        <img className="w-5 lg:w-6" src="/img/instagram-icon.svg" alt="spmc instagram" />
                        <img className="w-5 lg:w-6" src="/img/facebook-icon.svg" alt="spmc facebook" />
                        <img className="w-5 lg:w-6" src="/img/linkedin-icon.svg" alt="spmc linkedin" />
                        <img className="w-5 lg:w-6" src="/img/twitter-icon.svg" alt="spmc twitter" />
                        <img className="w-5 lg:w-6" src="/img/youtube-icon.svg" alt="spmc youtube" />
                    </div>
                </div>
            </div>
            <div className="bg-white lg:row-start-1 lg:row-end-[10] lg:col-start-2 lg:col-end-10 lg:rounded-lg lg:shadow-lg">
                <div className="lg:pl-[25%] w-full h-full">
                    <form className="mx-auto w-3/4 h-full pt-[10%]">
                        <h2 className="text-2xl lg:text-3xl text-[#1F2937] text-center font-light">Send us a <span className="text-dark-green font-semibold">Message</span></h2>
                        <div className="mt-16 lg:mt-24">
                            <div className="grid lg:grid-cols-2 lg:gap-x-8 gap-y-8 lg:gap-y-16">
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="first-name"
                                        className="contact-input"
                                    />
                                    <label htmlFor="first-name" className="contact-input-label">First name</label>
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="last-name"
                                        className="contact-input"
                                    />
                                    <label htmlFor="last-name" className="contact-input-label">Last name</label>
                                </div>
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        className="contact-input"
                                    />
                                    <label htmlFor="email" className="contact-input-label">Email address</label>
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="phone"
                                        className="contact-input"
                                    />
                                    <label htmlFor="phone" className="contact-input-label">Phone</label>
                                </div>
                                <div className="relative lg:col-span-2">
                                    <textarea
                                        type="text"
                                        id="message"
                                        className="contact-input resize-none"
                                        rows="5"
                                    />
                                    <label htmlFor="message" className="contact-input-label">Message</label>
                                </div>
                            </div>
                            <button type="button" className="w-full h-10 lg:h-14 mt-8 bg-primary text-xs lg:text-base text-white text-center font-medium rounded-lg">SEND MESSAGE</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default ContactUs