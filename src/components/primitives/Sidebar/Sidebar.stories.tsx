import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { SampleBox } from 'storybook/SampleBox'

import { Stack } from '../Stack'
import { Sidebar as SidebarPrimitive } from './Sidebar'

export default {
	title: 'Components/Primitives/Sidebar',
	component: SidebarPrimitive,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen'
	},
	args: {
		gap: 'md'
	}
} as ComponentMeta<typeof SidebarPrimitive>

export const Sidebar: ComponentStory<typeof SidebarPrimitive> = ({ gap }) => (
	<div style={{ margin: '0 auto', width: '100%', maxWidth: '1200px', padding: '1rem', background: 'lightgray' }}>
		<SidebarPrimitive gap={gap}>
			<SidebarPrimitive.Aside maxWidth="375px">
				<Stack gap="md">
					<SampleBox height="150px" background="white">
						Menu Item 1
					</SampleBox>
					<SampleBox height="150px" background="white">
						Menu Item 2
					</SampleBox>
				</Stack>
			</SidebarPrimitive.Aside>
			<SidebarPrimitive.Content>
				<SampleBox>
					<Stack gap="md">
						<SampleBox background="white" />
						<SampleBox background="white" />
						<SampleBox background="white" />
						<SampleBox background="white" />
						<SampleBox background="white" />
						<SampleBox background="white" />
						<SampleBox background="white" />
						<SampleBox background="white" />
						<SampleBox background="white" />
						<SampleBox background="white" />
					</Stack>
				</SampleBox>
			</SidebarPrimitive.Content>
		</SidebarPrimitive>
	</div>
)
