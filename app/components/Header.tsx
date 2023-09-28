import Image from "next/image"

const Header = () => {
    return (
        <header className="fixed top-0 z-50 w-full bg-white shadow transition-all duration-500">
            <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
                <Image
                    src="/img/spmc-logo.svg"
                    alt="Salrius Palmetum Logo"
                    width={150}
                    height={150}
                    className="lg:-ml-4"
                />
                <ul className="hidden text-lg text-secondary-dark space-x-8 md:flex md:text-xl">
                    <li>home</li>
                    <li>about us</li>
                    <li>palm gallery</li>
                </ul>
            </div>
        </header>
    )
}

export default Header