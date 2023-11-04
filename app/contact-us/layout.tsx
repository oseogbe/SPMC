/* eslint-disable @next/next/no-img-element */
import '../globals.css'
import type { Metadata } from 'next'
import { Inclusive_Sans } from 'next/font/google'
import ContactHeader from '../components/ContactHeader'
import Footer from '../components/Footer'

const is = Inclusive_Sans({ subsets: ['latin'], weight: "400" })

export const metadata: Metadata = {
    title: 'SPMC',
    description: 'Sarius Palmetum Management Company',
}

export default function ContactLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={is.className}>
                <div className='hidden lg:block lg:absolute lg:h-screen w-full bg-gradient-to-r from-[#DF6500] to-[#E4D200] bg-no-repeat clip-bg-contact'></div>
                <div className="pt-28 lg:pt-0 lg:h-screen flex items-center justify-center">
                    <ContactHeader />
                    {children}
                    {/* <img className="absolute bottom-12 mt-8 w-[70%]" src="/img/divider.svg" alt="divider" /> */}
                </div>
                <Footer />
            </body>
        </html>
    )
}