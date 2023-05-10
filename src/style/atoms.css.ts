import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'

import { tokens } from './theme.css'
import { breakpoints } from './tokens/breakpoints'

// Following properties can be used on different device sizes.
// Gives us ability to do stuff like this -> padding={{ mobile: "small", tablet: "large" }}.
// Do not add properties that you don't need based on different breakpoints as it will increase the size of generated CSS file.
const responsiveProperties = defineProperties({
	conditions: {
		mobile: {},
		tablet: { '@media': `screen and (min-width: ${breakpoints.tablet}px)` },
		desktop: { '@media': `screen and (min-width: ${breakpoints.desktop}px)` }
	},
	defaultCondition: 'mobile',
	properties: {
		display: ['none', 'inline', 'block', 'inline-block', 'flex', 'inline-flex'],
		flexDirection: ['row', 'column', 'column-reverse', 'row-reverse'],
		justifyContent: ['stretch', 'flex-start', 'center', 'flex-end', 'space-around', 'space-between', 'space-evenly'],
		alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
		flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
		gap: tokens.spacing,
		paddingTop: tokens.spacing,
		paddingBottom: tokens.spacing,
		paddingLeft: tokens.spacing,
		paddingRight: tokens.spacing
	},
	shorthands: {
		padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
		paddingX: ['paddingLeft', 'paddingRight'],
		paddingY: ['paddingTop', 'paddingBottom']
	}
})

// Following properties work on all device sizes and can't be changed.
const staticProperties = defineProperties({
	properties: {
		overflow: ['visible', 'hidden', 'scroll', 'auto'],
		position: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
		borderStyle: ['none', 'solid', 'dashed'],
		color: tokens.colors,
		backgroundColor: tokens.colors,
		background: tokens.backgrounds,
		boxShadow: tokens.shadows,
		borderRadius: tokens.borders.radius,
		borderWidth: tokens.borders.width,
		borderColor: tokens.borders.color,
		zIndex: tokens.indices,
		// Typography tokens
		textAlign: ['left', 'right', 'center', 'justify'],
		textTransform: ['none', 'capitalize', 'uppercase', 'lowercase'],
		textDecoration: ['none', 'underline', 'overline'],
		fontStyle: ['normal', 'italic'],
		lineHeight: tokens.typography.lineHeight,
		fontWeight: tokens.typography.weight,
		fontFamily: tokens.typography.family,
		fontSize: tokens.typography.size
	}
})

export const atoms = createSprinkles(responsiveProperties, staticProperties)

export type Atoms = Parameters<typeof atoms>[0]
