import { Projects } from './Projects'

import { Box } from '@/components/layout/box'
import { Container } from '@/components/layout/container'
import { Stack } from '@/components/layout/stack'
import { LoadingBoundary } from '@/components/utils/loading-boundary'

export const SuspendedProjects = () => {
	return (
		<Container>
			<Box paddingY={8}>
				<Stack gap={10}>
					<LoadingBoundary loader={<div />}>
						<Projects />
					</LoadingBoundary>
				</Stack>
			</Box>
		</Container>
	)
}
