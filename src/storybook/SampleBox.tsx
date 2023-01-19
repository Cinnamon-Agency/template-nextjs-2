import { Box } from 'components/primitives'
import { ComponentProps, ReactNode } from 'react'

type Props = { children?: ReactNode } & ComponentProps<typeof Box>

export const SampleBox = ({ children, ...rest }: Props) => {
	return (
		<Box padding="md" borderStyle="dashed" borderWidth="thick" borderColor="black" {...rest}>
			{children || 'This is a sample box'}
		</Box>
	)
}
