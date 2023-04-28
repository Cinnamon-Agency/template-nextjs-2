import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'

import { SampleBox } from 'storybook/SampleBox'

import { Box } from '../Box'
import { Stack } from '../Stack'
import { Imposter as ImposterPrimitive } from './Imposter'

export default {
	title: 'Components/Primitives/Imposter',
	component: ImposterPrimitive,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen'
	},
	args: {
		layout: 'centered'
	},
	argTypes: {
		visible: { table: { disable: true } }
	}
} as ComponentMeta<typeof ImposterPrimitive>

export const Imposter: ComponentStory<typeof ImposterPrimitive> = ({ layout }) => {
	const [opened, setOpened] = useState(true)

	return (
		<div style={{ margin: '0 auto', width: '100%', maxWidth: '1200px', padding: '1rem' }}>
			<Stack gap="lg">
				<SampleBox />
				<SampleBox />
				<SampleBox />
				<SampleBox />
				<SampleBox />
				<button type="button" onClick={() => setOpened(true)}>
					Open me
				</button>
				<SampleBox />
				<SampleBox />
				<SampleBox />
				<SampleBox />
				<SampleBox />
			</Stack>
			<ImposterPrimitive layout={layout} visible={opened}>
				<Box
					padding="md"
					borderRadius="md"
					shadow="md"
					background="white"
					size={layout === 'filled' ? 'fillContainer' : undefined}>
					<Stack gap="base">
						<h2>Imposter title</h2>
						<p>
							Imposter description. Imposter description. Imposter description. Imposter description. Imposter
							description. Imposter description. Imposter description.
						</p>
						<p>
							Imposter description. Imposter description. Imposter description. Imposter description. Imposter
							description. Imposter description. Imposter description.
						</p>
						<p>
							Imposter description. Imposter description. Imposter description. Imposter description. Imposter
							description. Imposter description. Imposter description.
						</p>
						<p>
							Imposter description. Imposter description. Imposter description. Imposter description. Imposter
							description. Imposter description. Imposter description.
						</p>
						<p>
							Imposter description. Imposter description. Imposter description. Imposter description. Imposter
							description. Imposter description. Imposter description.
						</p>
						<p>
							Imposter description. Imposter description. Imposter description. Imposter description. Imposter
							description. Imposter description. Imposter description.
						</p>
						<button type="button" onClick={() => setOpened(false)}>
							Close me
						</button>
					</Stack>
				</Box>
			</ImposterPrimitive>
		</div>
	)
}
