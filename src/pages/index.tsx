import { NextPage } from 'next'

import { GeneralLayout } from 'components/layout'
import { Heading } from 'components/typography/heading/Heading'
import { Text } from 'components/typography/text/Text'

const homepageMeta = {
	title: 'Homepage',
	description: 'Homepage',
	url: '/'
}

const IndexPage: NextPage = () => {
	return (
		<GeneralLayout metaTags={homepageMeta}>
			<Heading variant="h1">This is a heading.</Heading>
			<Heading variant="h2">This is a heading.</Heading>
			<Heading variant="h3">This is a heading.</Heading>
			<Heading variant="h4">This is a heading.</Heading>
			<Heading variant="h5">This is a heading.</Heading>
			<Text>This is a bodytext.</Text>
		</GeneralLayout>
	)
}

export default IndexPage
