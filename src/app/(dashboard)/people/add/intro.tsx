import { Text } from '@/components/typography/text'

export const Intro = () => {
	return (
		<div style={{ maxWidth: '40rem' }}>
			<Text color="neutral.500">
				It is recommended that you{' '}
				<Text as="span" color="destructive.500">
					prioritize filling in the mandatory fields (*)
				</Text>{' '}
				first, as it is not imperative to complete all the information at once. Subsequently, you may opt to save the
				employee entry, and conveniently edit any missing details at a later time.
			</Text>
		</div>
	)
}
