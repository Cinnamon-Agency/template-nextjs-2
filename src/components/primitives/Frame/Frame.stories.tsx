import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { SampleBox } from 'storybook/SampleBox'

import { Frame as FramePrimitive } from './Frame'

export default {
	title: 'Components/Primitives/Frame',
	component: FramePrimitive,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'centered'
	},
	args: {
		shape: 'square'
	},
	argTypes: {
		// Remove styled components default props
		as: { table: { disable: true } },
		theme: { table: { disable: true } }
	}
} as ComponentMeta<typeof FramePrimitive>

export const Frame: ComponentStory<typeof FramePrimitive> = args => (
	<FramePrimitive {...args}>
		<SampleBox size="fillContainer" />
	</FramePrimitive>
)
