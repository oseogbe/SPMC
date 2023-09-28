import './globals.css'
import type { Metadata } from 'next'
import { Inclusive_Sans } from 'next/font/google'

const is = Inclusive_Sans({ subsets: ['latin'], weight: "400" })

export const metadata: Metadata = {
  title: 'SPMC',
  description: 'Salrius Palmetum Management Company',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={is.className}>{children}</body>
    </html>
  )
}
