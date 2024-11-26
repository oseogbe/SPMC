"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Transition } from "@headlessui/react"
import classNames from "classnames"
import clsx from "clsx"

const Header = () => {
    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);

    const links = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "About Us",
            href: "/about/management-company"
        },
        {
            name: "Our Gallery",
            href: "/gallery"
        },
        {
            name: "Palm Species",
            href: "/palm-species"
        },
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuClasses = classNames({
        "transition-transform transform duration-[3000ms] ease-in-out": true,
        "translate-x-full": !isOpen,
        "translate-x-0": isOpen,
    });

    return (
        <header className="fixed top-0 z-40 w-full bg-white shadow transition-all duration-500">
            <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
                <Link href="/">
                    <Image
                        src="/img/spmc-logo.svg"
                        alt="Sarius Palmetum Logo"
                        width={150}
                        height={150}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="lg:-ml-4"
                        priority
                    />
                </Link>
                <ul className="hidden text-primary space-x-6 md:flex font-semibold">
                    {
                        links.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className={clsx('header-link', { 'active': pathname === link.href })}
                                >{link.name}</Link>
                            </li>
                        ))
                    }
                </ul>
                {/* Hamburger Icon */}
                <button type="button" className="pr-5 md:hidden text-gray-500 hover:text-gray-600" onClick={toggleMenu}>
                    <span className="sr-only">Toggle Navigation</span>
                    <svg className="flex-shrink-0 w-8 h-8" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </button>
                <Transition
                    show={isOpen}
                >
                    <div className={`fixed inset-0 bg-white z-50 ${menuClasses}`}>
                        <div className="flex justify-end pr-[26px] pt-8">
                            {/* Close Icon */}
                            <div className="cursor-pointer" onClick={toggleMenu}>
                                <Image
                                    src="/img/close-icon.svg"
                                    alt="Sarius Palmetum Logo"
                                    width={20}
                                    height={20}
                                />
                            </div>
                        </div>
                        {/* Menu Content */}

                        <div className="flex flex-col items-center mt-20">
                            {/* Logo */}
                            <Image
                                src="/img/spmc-logo.svg"
                                alt="Sarius Palmetum Logo"
                                className="mb-8"
                                width={150}
                                height={150}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                style={{ maxWidth: '150px' }}
                            />

                            {/* Navigation Links */}
                            <ul className="flex flex-col text-center text-lg text-primary space-y-8">
                                {
                                    links.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                onClick={toggleMenu}
                                                className={clsx('header-link', { 'active': pathname === link.href })}
                                            >{link.name}</Link>
                                        </li>
                                    ))
                                }
                                <li>
                                    <Link
                                        href="/contact-us"
                                        onClick={toggleMenu}
                                        className={clsx('header-link', { 'active': pathname === "/contact-us" })}
                                    >Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Transition>
            </div>
        </header>
    )
}

export default Header