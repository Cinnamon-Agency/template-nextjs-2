import { StoryFn } from '@storybook/react'
import { ComponentProps } from 'react'

import { Box } from './Box'

export default {
	title: 'UI/Layout/Box',
	component: Box
}

export const Playground: StoryFn<ComponentProps<typeof Box<'div'>>> = ({ children, ...rest }) => {
	return <Box {...rest}>{children}</Box>
}

Playground.args = {
	children: 'You can play around with controls to change how I look!',
	padding: 'xlarge'
}

export const WithPadding = () => (
	<Box padding="xlarge" boxShadow="medium" borderRadius="medium">
		Simple Box component with &quot;xlarge&quot; padding
	</Box>
)

export const WithResponsivePadding = () => (
	<Box padding={{ mobile: 'small', tablet: 'medium', desktop: 'xlarge' }} boxShadow="medium" borderRadius="medium">
		Simple Box component with padding that changes based on screen size
	</Box>
)

export const WithComponentAs = () => (
	<Box as="a" href="#" target="_self" padding="medium">
		This Box will act as HTML anchor
	</Box>
)

export const WithFlexProperties = () => (
	<Box display="flex" justifyContent="space-between" padding="xlarge" boxShadow="medium" borderRadius="medium">
		<Box padding="xxlarge" backgroundColor="primary.dark" color="primary.light" borderRadius="full">
			Left
		</Box>
		<Box padding="xxlarge" backgroundColor="secondary.dark" color="secondary.light" borderRadius="full">
			Right
		</Box>
	</Box>
)
