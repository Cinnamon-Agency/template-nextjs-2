import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { SampleBox } from 'storybook/SampleBox'

import { Center as CenterPrimitive } from './Center'

export default {
	title: 'Components/Primitives/Center',
	component: CenterPrimitive,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen'
	}
} as ComponentMeta<typeof CenterPrimitive>

export const Center: ComponentStory<typeof CenterPrimitive> = () => (
	<CenterPrimitive>
		<SampleBox>This is a centered box</SampleBox>
	</CenterPrimitive>
)
