import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { SampleBox } from 'storybook/SampleBox'

import { Stack as StackPrimitive } from './Stack'

export default {
	title: 'Components/Primitives/Stack',
	component: StackPrimitive,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'centered'
	},
	args: {
		gap: 'md',
		direction: 'column',
		align: 'center',
		justify: 'center'
	},
	argTypes: {
		// Remove styled components default props
		as: { table: { disable: true } },
		theme: { table: { disable: true } }
	}
} as ComponentMeta<typeof StackPrimitive>

export const Stack: ComponentStory<typeof StackPrimitive> = args => (
	<StackPrimitive {...args}>
		<SampleBox />
		<SampleBox />
		<SampleBox />
		<SampleBox />
		<SampleBox />
	</StackPrimitive>
)
