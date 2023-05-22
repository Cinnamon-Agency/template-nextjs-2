import { Hidden } from './Hidden'
import { Box } from '../box/Box'
import { Stack } from '../stack/Stack'

export default {
	title: 'UI/Layout/Hidden',
	component: Hidden
}

export const Default = () => {
	return (
		<Stack gap="xlarge">
			<Hidden below="desktop">
				<Box
					padding="xlarge"
					borderRadius="medium"
					borderWidth="thick"
					borderStyle="dashed"
					backgroundColor="success.main">
					1. Hidden below desktop
				</Box>
			</Hidden>
			<Hidden below="tablet">
				<Box
					padding="xlarge"
					borderRadius="medium"
					borderWidth="thick"
					borderStyle="dashed"
					backgroundColor="info.main">
					2. Hidden below tablet
				</Box>
			</Hidden>
			<Hidden above="mobile">
				<Box
					padding="xlarge"
					borderRadius="medium"
					borderWidth="thick"
					borderStyle="dashed"
					color="common.white"
					backgroundColor="primary.dark">
					3. Hidden above mobile
				</Box>
			</Hidden>
			<Hidden above="tablet">
				<Box
					padding="xlarge"
					borderRadius="medium"
					borderWidth="thick"
					borderStyle="dashed"
					backgroundColor="secondary.main">
					4. Hidden above tablet
				</Box>
			</Hidden>
		</Stack>
	)
}
