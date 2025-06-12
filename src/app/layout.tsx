import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import React from 'react'
import ReactQueryProvider from './libs/query'
import Header from './components/layouts/header'
import MainLayouts from './components/layouts/mainLayouts'

const montserrat = Montserrat({
    variable: '--font-montserrat',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Eigen Test App',
    description: '',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <AntdRegistry>
                <body className={`${montserrat.className} antialiased`}>
                    <ReactQueryProvider>
                        <MainLayouts>{children}</MainLayouts>
                    </ReactQueryProvider>
                </body>
            </AntdRegistry>
        </html>
    )
}
