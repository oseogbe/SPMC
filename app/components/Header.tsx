"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Header = () => {
    const pathname = usePathname()

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
                <ul className="hidden text-lg text-primary space-x-8 md:flex md:text-xl">
                    <li><Link className={`header-link ${pathname === '/' ? 'active' : ''}`} href="/">Home</Link></li>
                    <li><Link className={`header-link ${pathname === '/about/management-company' ? 'active' : ''}`} href="/about/management-company">About Us</Link></li>
                    <li><Link className={`header-link ${pathname === '/gallery' ? 'active' : ''}`} href="/gallery">Our Gallery</Link></li>
                    <li><Link className={`header-link ${pathname === '/palm-species' ? 'active' : ''}`} href="/palm-species">Palm Species</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header