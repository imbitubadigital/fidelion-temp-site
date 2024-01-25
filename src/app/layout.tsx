import type { Metadata } from 'next'
import { Sora, Inter } from 'next/font/google'
import './globals.css'
import { BackgroundPage } from '@/components/BackgroundPage'
import { ContentWrapper } from '@/components/ContentWrapper'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ButtonScrollTop } from '@/components/ButtonScrollTop'
import { CookiesConsent } from '@/components/CookiesConsent'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
export const metadata: Metadata = {
  title: 'Home | Fidelion',
  description:
    'A Fidelion está chegando para fidelizar seus clientes e impulsionar seus lucros.',
  // openGraph: {
  //   images: [
  //     'https://th.bing.com/th/id/OIP.ysgMIHftn2YWKtaMVUzSnQHaD4?rs=1&pid=ImgDetMain',
  //   ],
  // },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${sora.variable} ${inter.variable}`}>{children}</body>
    </html>
  )
}
