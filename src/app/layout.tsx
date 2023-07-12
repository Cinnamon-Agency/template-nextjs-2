import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import '../style/app.css'
import { Footer } from './components/footer/Footer'
import { Navbar } from './components/navbar/Navbar'

const inter = Inter({
	weight: ['400', '600', '700'],
	subsets: ['latin'],
	variable: '--inter-font'
})

export const metadata: Metadata = {
	title: 'Next.js App Router',
	description:
		'A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.'
}

// eslint-disable-next-line react/function-component-definition
export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
