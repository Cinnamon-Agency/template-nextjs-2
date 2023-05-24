import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import '../style/app.css'

const inter = Inter({
	weight: ['400', '600', '700'],
	subsets: ['latin'],
	variable: '--inter-font'
})

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<div className={inter.className}>
			<Component {...pageProps} />
		</div>
	)
}

export default App
