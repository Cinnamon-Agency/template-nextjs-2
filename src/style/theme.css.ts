import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css'

import { borders } from './tokens/borders'
import { breakpoints } from './tokens/breakpoints'
import { backgrounds, colors } from './tokens/colors'
import { indices } from './tokens/indices'
import { shadows } from './tokens/shadows'
import { spacing } from './tokens/spacing'
import { typography } from './tokens/typography'

// https://www.lekoarts.de/javascript/writing-performant-css-with-vanilla-extract#theming
export const tokens = createThemeContract({
	borders,
	breakpoints,
	backgrounds,
	colors,
	indices,
	shadows,
	spacing,
	typography
})

// Injects CSS variables to HTML "body" element
createGlobalTheme(':root', tokens, {
	borders,
	breakpoints,
	backgrounds,
	colors,
	indices,
	shadows,
	spacing,
	typography
})
