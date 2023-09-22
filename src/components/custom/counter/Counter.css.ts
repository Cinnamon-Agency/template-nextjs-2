import { style } from '@vanilla-extract/css'

import { tokens } from '@/style/theme.css'

export const button = style({
	border: 'none',
	cursor: 'pointer',
	background: 'none',
	color: tokens.colors['primary.600'],
	padding: 0,
	display: 'flex'
})
