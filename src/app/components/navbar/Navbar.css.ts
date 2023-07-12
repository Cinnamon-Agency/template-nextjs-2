import { style } from '@vanilla-extract/css'

import { tokens } from '../../../style/theme.css'

export const navbar = style({
	paddingTop: tokens.spacing.medium,
	paddingBottom: tokens.spacing.medium,
	backgroundImage: 'url(/pattern.png)',
	backgroundColor: '#1C1C1C'
})

export const link = style({
	color: tokens.colors['shades.00'],
	fontWeight: tokens.typography.weight.bold,
	textDecoration: 'none',
	':hover': { color: tokens.colors['primary.500'] }
})
