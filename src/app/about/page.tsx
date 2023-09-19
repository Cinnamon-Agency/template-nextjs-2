import { Metadata } from 'next'

import { Box } from '@/components/layout/box'
import { Container } from '@/components/layout/container'

import { Actions } from './actions'

export const metadata: Metadata = {
	title: 'About | Cinnamon Agency',
	description: 'The one-stop shop to design, develop and deploy your next digital project.'
}

const AboutPage = () => (
	<Container>
		<Box paddingY={10}>
			<Actions />
		</Box>
	</Container>
)

export default AboutPage
