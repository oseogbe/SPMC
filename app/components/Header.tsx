import Image from "next/image"
import Link from "next/link"

const Header = () => {
    return (
        <header className="fixed top-0 z-50 w-full bg-white shadow transition-all duration-500">
            <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
                <Link href="/">
                    <Image
                        src="/img/spmc-logo.svg"
                        alt="Salrius Palmetum Logo"
                        width={150}
                        height={150}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="lg:-ml-4"
                    />
                </Link>
                <ul className="hidden text-lg text-secondary-dark space-x-8 md:flex md:text-xl">
                    <li><Link href="/">home</Link></li>
                    <li><Link href="/about/management-company">about us</Link></li>
                    <li>palm gallery</li>
                </ul>
            </div>
        </header>
    )
}

export default Header