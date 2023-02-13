import { NextPage } from 'next'

import { Layout } from 'components/shared'
import { defaultMetaTags } from 'parameters'

const Custom404: NextPage = () => {
	return (
		<Layout metaTags={defaultMetaTags}>
			<h1>404</h1>
			<p>Page not found.</p>
		</Layout>
	)
}

export default Custom404
