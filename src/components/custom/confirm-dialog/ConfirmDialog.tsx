import { Button } from '@/components/inputs/button'
import { Box } from '@/components/layout/box'
import { Stack } from '@/components/layout/stack'
import { Dialog } from '@/components/overlay/dialog'
import { Text } from '@/components/typography/text'
import { useMounted } from '@/hooks/use-mounted'

interface Props {
	opened: boolean
	loading?: boolean
	title: string
	description: string
	onClose: () => void
	onConfirm: () => void
}

export const ConfirmDialog = ({ opened, loading, title, description, onClose, onConfirm }: Props) => {
	const mounted = useMounted()

	if (!mounted) return null

	return (
		<Dialog opened={opened} onClose={onClose}>
			<Stack gap={6}>
				<Stack gap={2}>
					<Text variant="h4">{title}</Text>
					<Text color="neutral.500">{description}</Text>
				</Stack>
				<Box display="flex" justifyContent="flex-end" gap={4}>
					<Button variant="secondary" onClick={onClose} disabled={loading}>
						Cancel
					</Button>
					<Button onClick={onConfirm} disabled={loading}>
						Delete
					</Button>
				</Box>
			</Stack>
		</Dialog>
	)
}
