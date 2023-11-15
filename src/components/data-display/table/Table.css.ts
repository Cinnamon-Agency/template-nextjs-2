import { style } from '@vanilla-extract/css'

import { tokens } from '@/style/theme.css'

export const tableWrapper = style({
	width: '100%',
	overflow: 'auto'
})

export const table = style({
	width: '100%',
	borderSpacing: 0,
	borderCollapse: 'collapse',
	border: `1px solid ${tokens.colors['neutral.200']}`
})

export const tableHeader = style({
	borderBottom: `1px solid ${tokens.colors['neutral.200']}`,
	backgroundColor: tokens.colors['neutral.100']
})

export const tableBody = style({})

export const tableFooter = style({
	backgroundColor: tokens.colors['primary.100'],
	fontSize: tokens.typography.size.medium
})

export const tableRow = style({
	borderBottom: `1px solid ${tokens.colors['neutral.200']}`,
	':last-child': { borderBottom: 'none' }
})

export const tableHead = style({
	padding: `${tokens.spacing[4]} ${tokens.spacing[6]}`,
	fontSize: tokens.typography.size.medium,
	fontWeight: tokens.typography.weight.semibold,
	borderRight: `1px solid ${tokens.colors['neutral.200']}`,
	textAlign: 'left',
	color: tokens.colors['shades.100'],
	':last-child': { borderRight: 'none' }
})

export const tableCell = style({
	padding: `${tokens.spacing[4]} ${tokens.spacing[6]}`,
	borderRight: `1px solid ${tokens.colors['neutral.200']}`,
	color: tokens.colors['shades.100'],
	fontSize: tokens.typography.size.medium,
	lineHeight: tokens.typography.lineHeight.large,
	':last-child': { borderRight: 'none' }
})

export const tableCaption = style({
	marginTop: tokens.spacing[4],
	fontSize: tokens.typography.size.small
})
