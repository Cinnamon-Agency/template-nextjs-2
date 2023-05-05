import { NextPage } from 'next'

import { GeneralLayout } from 'components/layout'
import { AtomComponent } from 'components/layout/AtomComponent'

import { Box } from '../components/layout/box/Box'

const homepageMeta = {
	title: 'Homepage',
	description: 'Homepage',
	url: '/'
}

const IndexPage: NextPage = () => {
	return (
		<GeneralLayout metaTags={homepageMeta}>
			<h1>Next.js Template</h1>
			<AtomComponent padding="xlarge">kkkk</AtomComponent>
			<Box>Something goes here</Box>
			<Box as="a" href="#">
				Anchor
			</Box>
		</GeneralLayout>
	)
}

export default IndexPage
