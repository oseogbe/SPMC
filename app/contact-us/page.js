const ContactUs = () => {
    return (
        <div className="w-full h-3/4 grid grid-rows-9 grid-cols-9 z-10 max-w-7xl mx-auto">
            <div className="relative bg-white row-start-2 row-end-[9] col-start-1 col-end-4 z-20 rounded-lg shadow-lg">
                <div className="absolute w-full h-full bottom-0 bg-[#6DAA76] clip-contact-info"></div>
            </div>
            <div className="bg-white row-start-1 row-end-[10] col-start-2 col-end-10 rounded-lg shadow-lg">
            </div>
        </div>
    )
}

export default ContactUs