// 'use client'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jonathan Venturim Dias',
  description: 'Site de apresentação dos trabalhos realizados',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  )
}
