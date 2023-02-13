import type { AppProps } from 'next/app'

import { globalStyles } from 'style'

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			{globalStyles}
			<Component {...pageProps} />
		</>
	)
}

export default App
