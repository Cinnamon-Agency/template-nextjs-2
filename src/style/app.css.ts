import { globalStyle } from '@vanilla-extract/css'

import { tokens } from './theme.css'

globalStyle('*', {
	boxSizing: 'border-box',
	margin: 0
})

globalStyle('body', {
	color: tokens.colors['shades.100']
})

globalStyle('h1, h2, h3, h4, h5, h6, p, span, strong', {
	color: 'inherit'
})
