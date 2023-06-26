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
				<Box padding="xlarge" borderRadius="medium" borderWidth="thick" borderStyle="dashed">
					1. Hidden below desktop
				</Box>
			</Hidden>
			<Hidden below="tablet">
				<Box padding="xlarge" borderRadius="medium" borderWidth="thick" borderStyle="dashed">
					2. Hidden below tablet
				</Box>
			</Hidden>
			<Hidden above="mobile">
				<Box padding="xlarge" borderRadius="medium" borderWidth="thick" borderStyle="dashed">
					3. Hidden above mobile
				</Box>
			</Hidden>
			<Hidden above="tablet">
				<Box padding="xlarge" borderRadius="medium" borderWidth="thick" borderStyle="dashed">
					4. Hidden above tablet
				</Box>
			</Hidden>
		</Stack>
	)
}
