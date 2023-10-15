/* eslint-disable @next/next/no-img-element */
import '../globals.css'
import type { Metadata } from 'next'
import { Inclusive_Sans } from 'next/font/google'
import ContactHeader from '../components/ContactHeader'
import Footer from '../components/Footer'

const is = Inclusive_Sans({ subsets: ['latin'], weight: "400" })

export const metadata: Metadata = {
    title: 'SPMC',
    description: 'Salrius Palmetum Management Company',
}

export default function ContactLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={is.className}>
                <div className='absolute h-screen w-full bg-gradient-to-r from-[#DF6500] to-[#E4D200] bg-no-repeat clip-bg-contact'></div>
                <div className="h-screen flex items-center justify-center">
                    <ContactHeader />
                    {children}
                    <img className="absolute bottom-12 mt-8 w-[70%]" src="/img/divider.svg" alt="divider" />
                </div>
                <Footer />
            </body>
        </html>
    )
}