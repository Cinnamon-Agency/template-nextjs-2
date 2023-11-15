import { style } from '@vanilla-extract/css'

import { tokens } from '@/style/theme.css'

export const dropdownMenuSubTrigger = style({
	display: 'flex',
	alignItems: 'center',
	outline: 'none',
	borderRadius: tokens.borders.radius.small,
	padding: tokens.spacing[4],
	fontSize: tokens.typography.size.small
})

export const dropdownMenuSubContent = style({
	zIndex: tokens.indices.over,
	minWidth: '8rem',
	overflow: 'hidden',
	borderRadius: tokens.spacing[4],
	border: '1px solid',
	padding: tokens.spacing[3]
})

export const dropdownMenuContent = style({
	minWidth: '19.3125rem',
	overflow: 'hidden',
	zIndex: tokens.indices.over,
	borderRadius: tokens.borders.radius.medium,
	backgroundColor: tokens.colors['shades.00'],
	border: `1px solid ${tokens.colors['neutral.300']}`
})

export const dropdownMenuItem = style({
	cursor: 'pointer',
	outline: 'none'
})

export const dropdownMenuCheckboxItem = style({
	position: 'relative',
	display: 'flex',
	alignItems: 'center',
	borderRadius: tokens.spacing[3]
})

export const dropdownMenuCheckboxItemIndicator = style({
	position: 'absolute',
	left: '8px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center'
})

export const dropdownMenuLabel = style({
	fontWeight: 'bold'
})
