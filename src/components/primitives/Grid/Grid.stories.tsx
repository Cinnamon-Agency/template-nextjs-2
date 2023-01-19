import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { SampleBox } from 'storybook/SampleBox'
import { Grid as GridPrimitive } from './Grid'

export default {
	title: 'Components/Primitives/Grid',
	component: GridPrimitive,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen'
	},
	args: {
		gap: 'md'
	},
	argTypes: {
		// Remove styled components default props
		as: { table: { disable: true } },
		theme: { table: { disable: true } }
	}
} as ComponentMeta<typeof GridPrimitive>

export const Grid: ComponentStory<typeof GridPrimitive> = args => (
	<GridPrimitive {...args}>
		{[0, 1, 2, 3, 4, 5, 6].map(index => (
			<SampleBox key={index} />
		))}
	</GridPrimitive>
)
