import { NextPage } from 'next'

import { Layout } from 'components/shared'
import { defaultMetaTags } from 'parameters'

const Custom500: NextPage = () => {
	return (
		<Layout metaTags={defaultMetaTags}>
			<main>
				<h1>500</h1>
				<p>Server error occurred.</p>
			</main>
		</Layout>
	)
}

export default Custom500
