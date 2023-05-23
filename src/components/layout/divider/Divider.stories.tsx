import { StoryFn } from '@storybook/react'
import { ComponentProps } from 'react'

import { Divider } from './Divider'
import { Box } from '../box/Box'
import { Stack } from '../stack/Stack'

export default {
	title: 'UI/Layout/Divider',
	component: Divider
}

export const Default: StoryFn<ComponentProps<typeof Divider>> = () => {
	return (
		<Stack gap="medium">
			<Box style={{ height: '50px' }} backgroundColor="neutral.light" />
			<Divider />
			<Box style={{ height: '50px' }} backgroundColor="info.light" />
		</Stack>
	)
}
