"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const ContactHeader = () => {
    const pathname = usePathname()

    return (
        <header className="absolute top-0 w-full bg-transparent">
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
                    <li><Link className={`header-link ${pathname === '/' ? 'active' : ''}`} href="/">home</Link></li>
                    <li><Link className={`header-link ${pathname === '/about/management-company' ? 'active' : ''}`} href="/about/management-company">about us</Link></li>
                    <li><Link className={`header-link ${pathname === '/palm-gallery' ? 'active' : ''}`} href="/palm-gallery">palm gallery</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default ContactHeader