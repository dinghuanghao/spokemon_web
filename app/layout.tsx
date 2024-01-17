import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
// import {AntdRegistry} from '@ant-design/nextjs-registry';
import './globals.css'

const inter = Inter({subsets: ['latin']})
import {Button, ConfigProvider, Space} from 'antd';

export const metadata: Metadata = {
    title: '言灵计划',
    description: '中二嘴炮大作战',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>

        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#4de8ff',
                },
            }}
        >
            {children}
        </ConfigProvider>
        {/*<AntdRegistry>{children}</AntdRegistry>*/}
        </body>
        </html>
    )
}
