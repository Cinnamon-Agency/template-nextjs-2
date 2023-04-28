import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { SampleBox } from 'storybook/SampleBox'

import { Split as SplitPrimitive } from './Split'

export default {
	title: 'Components/Primitives/Split',
	component: SplitPrimitive,
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
} as ComponentMeta<typeof SplitPrimitive>

export const Split: ComponentStory<typeof SplitPrimitive> = ({ gap }) => (
	<SplitPrimitive gap={gap}>
		<SampleBox />
		<SampleBox />
	</SplitPrimitive>
)
