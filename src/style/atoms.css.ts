import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'

import { tokens } from './theme.css'
import { breakpoints } from './tokens/breakpoints'

// Following properties can be used on different device sizes.
// Gives us ability to do stuff like this -> padding={{ mobile: "4", tablet: "6" }}.
// Do not add properties that you don't need based on different breakpoints as it will increase the size of generated CSS file.
const responsiveProperties = defineProperties({
	conditions: {
		mobile: {},
		tablet: { '@media': `screen and (min-width: ${breakpoints.tablet}px)` },
		desktop: { '@media': `screen and (min-width: ${breakpoints.desktop}px)` }
	},
	defaultCondition: 'mobile',
	responsiveArray: ['mobile', 'tablet', 'desktop'],
	properties: {
		display: ['none', 'inline', 'block', 'inline-block', 'flex', 'inline-flex'],
		flexDirection: ['row', 'column', 'column-reverse', 'row-reverse'],
		justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between', 'space-evenly'],
		alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
		flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
		flexShrink: ['0', '1'],
		flexGrow: ['0', '1'],
		textAlign: ['left', 'right', 'center', 'justify'],
		width: ['auto', '100%', '100vw'],
		height: ['auto', '100%', '100vh'],
		gap: tokens.spacing,
		paddingTop: tokens.spacing,
		paddingBottom: tokens.spacing,
		paddingLeft: tokens.spacing,
		paddingRight: tokens.spacing,
		fontSize: tokens.typography.size
	},
	shorthands: {
		padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
		paddingX: ['paddingLeft', 'paddingRight'],
		paddingY: ['paddingTop', 'paddingBottom'],
		direction: ['flexDirection'],
		justify: ['justifyContent'],
		wrap: ['flexWrap'],
		align: ['alignItems'],
		shrink: ['flexShrink'],
		grow: ['flexGrow']
	}
})

// Following properties work on all device sizes and can't be changed.
const staticProperties = defineProperties({
	properties: {
		overflow: ['visible', 'hidden', 'scroll', 'auto'],
		position: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
		top: ['auto', '0', '50%', '100%'],
		bottom: ['auto', '0', '50%', '100%'],
		left: ['auto', '0', '50%', '100%'],
		right: ['auto', '0', '50%', '100%'],
		color: tokens.colors,
		backgroundColor: tokens.colors,
		boxShadow: tokens.shadows,
		border: tokens.borders.border,
		borderRadius: tokens.borders.radius,
		borderColor: tokens.borders.color,
		borderStyle: ['none', 'solid', 'dashed'],
		zIndex: tokens.indices,
		// Typography tokens
		textTransform: ['none', 'capitalize', 'uppercase', 'lowercase'],
		textDecoration: ['none', 'underline'],
		fontStyle: ['normal', 'italic'],
		lineHeight: tokens.typography.lineHeight,
		fontWeight: tokens.typography.weight
	}
})

export const atoms = createSprinkles(responsiveProperties, staticProperties)

export type Atoms = Parameters<typeof atoms>[0]
