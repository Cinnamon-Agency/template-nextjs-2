import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import '@/style/app.css'

const inter = Inter({
	weight: ['400', '600', '700'],
	subsets: ['latin'],
	variable: '--inter-font'
})

export const metadata: Metadata = {
	title: 'Next.js v. 14 Template'
}

// eslint-disable-next-line react/function-component-definition
export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	)
}
