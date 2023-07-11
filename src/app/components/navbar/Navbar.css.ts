import { style } from '@vanilla-extract/css'

import { tokens } from '../../../style/theme.css'

export const link = style({
	color: tokens.colors['shades.00'],
	fontWeight: tokens.typography.weight.bold,
	textDecoration: 'none',
	':hover': { color: tokens.colors['primary.500'] }
})
