import { Box } from '@/components/layout/box'

interface Props {
	text: string
}

export const Tag = ({ text }: Props) => {
	return (
		<Box
			padding={1}
			backgroundColor="tag.100"
			color="shades.100"
			fontSize="xsmall"
			fontWeight="bold"
			borderRadius="small">
			{text}
		</Box>
	)
}
