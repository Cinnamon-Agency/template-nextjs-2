import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { SampleBox } from 'storybook/SampleBox'
import { Switcher as SwitcherPrimitive } from './Switcher'

export default {
	title: 'Components/Primitives/Switcher',
	component: SwitcherPrimitive,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen'
	},
	args: {
		threshold: '60em',
		gap: 'md',
		limit: 10
	},
	argTypes: {
		// Remove styled components default props
		as: { table: { disable: true } },
		theme: { table: { disable: true } }
	}
} as ComponentMeta<typeof SwitcherPrimitive>

export const Switcher: ComponentStory<typeof SwitcherPrimitive> = args => (
	<SwitcherPrimitive {...args}>
		<SampleBox />
		<SampleBox />
		<SampleBox />
		<SampleBox />
		<SampleBox />
		<SampleBox />
		<SampleBox />
	</SwitcherPrimitive>
)
