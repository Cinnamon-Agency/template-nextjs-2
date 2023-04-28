import { NextPage } from 'next'

import { GeneralLayout } from 'components/layout'

const homepageMeta = {
	title: 'Homepage',
	description: 'Homepage',
	url: '/'
}

const IndexPage: NextPage = () => {
	return (
		<GeneralLayout metaTags={homepageMeta}>
			<h1>Next.js Template</h1>
		</GeneralLayout>
	)
}

export default IndexPage
