import { Layout } from 'components/shared'
import { NextPage } from 'next'
import { defaultMetaTags } from 'parameters'

const IndexPage: NextPage = () => {
	return (
		<Layout metaTags={defaultMetaTags}>
			<main>
				<h1>Title</h1>
			</main>
		</Layout>
	)
}

export default IndexPage
