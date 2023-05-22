import { globalStyle } from '@vanilla-extract/css'

import { tokens } from './theme.css'

globalStyle('*', {
	boxSizing: 'border-box',
	margin: 0
})

globalStyle('h1, h2, h3, h4, p, span, strong', {
	color: tokens.colors['common.black']
})