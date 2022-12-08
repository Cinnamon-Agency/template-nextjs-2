import { Layout } from 'components/shared'
import { NextPage } from 'next'
import { defaultMetaTags } from 'parameters'

const IndexPage: NextPage = () => {
	return (
		<Layout metaTags={defaultMetaTags}>
			<main>
				<h1 style={{ textAlign: 'center' }}>Cinnamon Next js template</h1>
			</main>
		</Layout>
	)
}

export default IndexPage
