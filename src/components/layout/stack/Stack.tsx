import { PropsWithChildren } from 'react'

import { Atoms } from 'style/atoms.css'

import { Box } from '../box'

type Props = PropsWithChildren<Pick<Atoms, 'justify' | 'align' | 'gap'>>

export const Stack = ({ children, ...rest }: Props) => (
	<Box display="flex" direction="column" {...rest}>
		{children}
	</Box>
)
