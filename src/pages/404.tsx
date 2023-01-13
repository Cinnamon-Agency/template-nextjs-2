import { Layout } from 'components/shared'
import { NextPage } from 'next'

const Custom404: NextPage = () => {
	return (
		<Layout>
			<h1>404</h1>
			<p>Page not found.</p>
		</Layout>
	)
}

export default Custom404
