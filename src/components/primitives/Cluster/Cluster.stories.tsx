import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { SampleBox } from 'storybook/SampleBox'

import { Cluster as ClusterPrimitive } from './Cluster'

export default {
	title: 'Components/Primitives/Cluster',
	component: ClusterPrimitive,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'centered'
	},
	args: {
		gap: 'md'
	},
	argTypes: {
		// Remove styled components default props
		as: { table: { disable: true } },
		theme: { table: { disable: true } }
	}
} as ComponentMeta<typeof ClusterPrimitive>

export const Cluster: ComponentStory<typeof ClusterPrimitive> = args => (
	<ClusterPrimitive {...args}>
		<SampleBox />
		<SampleBox />
		<SampleBox />
		<SampleBox />
	</ClusterPrimitive>
)
