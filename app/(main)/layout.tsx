import '../globals.css'
import type { Metadata } from 'next'
import { is } from '../fonts'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'SPMC',
  description: 'Sarius Palmetum Management Company',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={is.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
