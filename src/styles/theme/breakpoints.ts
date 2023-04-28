import type { CSSInterpolation } from '@emotion/serialize'
import { css } from '@emotion/react'

type Breakpoints = 'sm' | 'md' | 'lg'
export type BreakpointsProps = Partial<{ [Breakpoint in Breakpoints]: CSSInterpolation }>

// Desktop first breakpoints
// Intentionally from largest to smallest because media queries are applied to DOM in that way
export const breakpoints: Record<Breakpoints, number> = {
	lg: 1024,
	md: 768,
	sm: 560
}

// Could be changed in future due to how expensive it is to run it on every Box primitive
export const BreakpointsFn = (props: BreakpointsProps) => {
	const responsiveStyles = Object.keys(breakpoints)
		.filter(bp => props[bp as Breakpoints] !== undefined)
		.map(bp => ({ [`@media (max-width: ${breakpoints[bp as Breakpoints]}px)`]: props[bp as Breakpoints] }))

	return css(responsiveStyles)
}
