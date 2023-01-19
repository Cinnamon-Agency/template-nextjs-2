import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { Flexbox as FlexboxPrimitive } from './Flexbox'

export default {
	title: 'Components/Primitives/Flexbox',
	component: FlexboxPrimitive,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'centered'
	},
	args: {
		// Defaults
		borderWidth: 'thick',
		borderColor: 'black',
		borderStyle: 'dashed',
		padding: 'md',
		borderRadius: 'none',
		background: 'white',
		color: 'black',
		shadow: 'lg',
		zIndex: 'default',
		display: 'flex'
	},
	argTypes: {
		// Remove styled components default props
		as: { table: { disable: true } },
		theme: { table: { disable: true } },
		// Remove unneeded props for storybook
		xs: { table: { disable: true } },
		sm: { table: { disable: true } },
		md: { table: { disable: true } },
		lg: { table: { disable: true } },
		xl: { table: { disable: true } },
		css: { table: { disable: true } },
		width: { table: { disable: true } },
		height: { table: { disable: true } },
		maxWidth: { table: { disable: true } },
		maxHeight: { table: { disable: true } },
		minWidth: { table: { disable: true } },
		minHeight: { table: { disable: true } }
	}
} as ComponentMeta<typeof FlexboxPrimitive>

export const Flexbox: ComponentStory<typeof FlexboxPrimitive> = args => (
	<FlexboxPrimitive {...args}>I am a customizable flexbox</FlexboxPrimitive>
)
