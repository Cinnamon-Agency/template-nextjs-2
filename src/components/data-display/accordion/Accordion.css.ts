import { keyframes, style } from '@vanilla-extract/css'

import { tokens } from '@/style/theme.css'

const slideDown = keyframes({
	from: {
		height: 0
	},
	to: {
		height: 'var(--radix-accordion-content-height)'
	}
})

const slideUp = keyframes({
	from: {
		height: 'var(--radix-accordion-content-height)'
	},
	to: {
		height: 0
	}
})

export const header = style({
	display: 'flex'
})

export const trigger = style({
	all: 'unset',
	fontFamily: 'inherit',
	backgroundColor: 'transparent',
	flex: 1,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	fontSize: tokens.typography.size.medium,
	lineHeight: '150%',
	color: tokens.colors['neutral.600'],
	cursor: 'pointer'
})

export const content = style({
	overflow: 'hidden',
	background: tokens.colors['shades.00'],
	paddingTop: tokens.spacing['6'],

	selectors: {
		"&[data-state='open']": {
			animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1);`
		},
		"&[data-state='closed']": {
			animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1);`
		}
	}
})

export const item = style({
	borderRadius: tokens.borders.radius.small,
	border: `1px solid ${tokens.colors['neutral.200']}`,
	overflow: 'hidden',
	marginTop: '1px',
	padding: tokens.spacing['6']
})
