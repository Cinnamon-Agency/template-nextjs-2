import { StoryFn } from '@storybook/react'
import React, { ComponentProps } from 'react'

import { Placeholder } from 'components/utils/placeholder/Placeholder'

import { Tiles } from './Tiles'

export default {
	title: 'UI/Layout/Tiles',
	component: Tiles
}

export const Playground: StoryFn<ComponentProps<typeof Tiles>> = args => {
	return (
		<Tiles {...args} columns={2}>
			<Placeholder />
			<Placeholder />
			{/* <Placeholder height="100px" />
			<Placeholder height="100px" />
			<Placeholder height="100px" />
			<Placeholder height="100px" />
			<Placeholder height="100px" /> */}
		</Tiles>
	)
}

Playground.args = {}
