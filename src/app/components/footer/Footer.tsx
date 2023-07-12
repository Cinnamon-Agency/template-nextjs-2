import Image from 'next/image'

import { Box } from '../../../components/layout/box'
import { Columns } from '../../../components/layout/columns'
import { Container } from '../../../components/layout/container'
import { Stack } from '../../../components/layout/stack'
import { Pattern } from '../../../components/shared/pattern'
import { Text } from '../../../components/typography/text'

export const Footer = () => {
	return (
		<Pattern>
			<Container>
				<Box paddingY="xxlarge">
					<Stack>
						<Columns gap="medium">
							<Columns.Item columns={4}>
								<Image src="/cinnamon-logo.svg" alt="Home" width={160} height={20} />
							</Columns.Item>
							<Columns.Item columns={8}>
								<Stack gap="xxlarge">
									<Text variant="h2" color="shades.00">
										All software, zero bullshit.
									</Text>
									<Columns gap="medium">
										<Columns.Item columns={4}>
											<Stack gap="small">
												<Text color="shades.00">Zagreb</Text>
												<Text color="shades.00">Slavonska avenija 6, 10000, Zagreb, Croatia +385 95 382 9188</Text>
											</Stack>
										</Columns.Item>
										<Columns.Item columns={4}>
											<Stack gap="small">
												<Text color="shades.00">New York</Text>
												<Text color="shades.00">500 7th Ave, New York, NY 10018, United States</Text>
											</Stack>
										</Columns.Item>
										<Columns.Item columns={4}>
											<Stack gap="small">
												<Text color="shades.00">Belgrade</Text>
												<Text color="shades.00">Požeška 58 11000, Belgrade, Serbia</Text>
											</Stack>
										</Columns.Item>
									</Columns>
								</Stack>
							</Columns.Item>
						</Columns>
					</Stack>
				</Box>
			</Container>
		</Pattern>
	)
}
