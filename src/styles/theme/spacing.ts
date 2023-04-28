import { css } from '@emotion/react'
import { breakpoints } from './breakpoints'

export type Spacing = 'none' | 'xs' | 'sm' | 'base' | 'md' | 'lg' | 'xl'

export interface PaddingProps {
	padding?: Spacing
	paddingY?: Spacing
	paddingX?: Spacing
}

type CSSVar = `var(--${string})`

// Tokens -> xs sm base md lg xl
// Desktop values -> 4px 8px 16px 32px 64px 128px
// Mobile values -> 3px 6px 12px 24px 48px 96px
// Adapt values per your need
// Used for Padding, Margin, Gap...
export const spacingCSSVars = css({
	'--space': '1rem',
	'--ratio': 2,

	'--space-xs': 'calc(var(--space-sm) / var(--ratio))',
	'--space-sm': 'calc(var(--space-base) / var(--ratio))',
	'--space-base': 'var(--space)',
	'--space-md': 'calc(var(--space-base) * var(--ratio))',
	'--space-lg': 'calc(var(--space-md) * var(--ratio))',
	'--space-xl': 'calc(var(--space-lg) * var(--ratio))',

	// Maybe we don't want this
	[`@media (max-width: ${breakpoints.md}px)`]: {
		'--space': '0.75rem'
	}
})

export const spacing: Record<Spacing, CSSVar | '0'> = {
	none: '0',
	xs: 'var(--space-xs)',
	sm: 'var(--space-sm)',
	base: 'var(--space-base)',
	md: 'var(--space-md)',
	lg: 'var(--space-lg)',
	xl: 'var(--space-xl)'
}

export const PaddingFn = ({ padding, paddingY, paddingX }: PaddingProps) =>
	css({
		padding: padding && spacing[padding],
		paddingTop: paddingY && spacing[paddingY],
		paddingBottom: paddingY && spacing[paddingY],
		paddingLeft: paddingX && spacing[paddingX],
		paddingRight: paddingX && spacing[paddingX]
	})
