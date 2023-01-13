import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { Box as BoxPrimitive } from './Box'

export default {
	title: 'Components/Primitives/Box',
	component: BoxPrimitive,
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
		zIndex: 'default'
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
} as ComponentMeta<typeof BoxPrimitive>

export const Box: ComponentStory<typeof BoxPrimitive> = args => (
	<BoxPrimitive {...args}>I am a customizable box</BoxPrimitive>
)
