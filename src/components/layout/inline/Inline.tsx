import { PropsWithChildren } from 'react'

import { Atoms } from 'style/atoms.css'

import { Box } from '../box/Box'

type Props = PropsWithChildren<Pick<Atoms, 'justify' | 'align' | 'wrap' | 'gap'>>

export const Inline = ({ children, wrap = 'wrap', ...rest }: Props) => (
	<Box display="flex" direction="row" wrap={wrap} {...rest}>
		{children}
	</Box>
)
