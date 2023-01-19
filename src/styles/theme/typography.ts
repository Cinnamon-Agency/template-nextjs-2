import { CSSProperties } from 'react'
import { css } from '@emotion/react'

type FontSize = 'sm' | 'md' | 'lg'
type FontFamily = 'body' | 'heading'
type FontWeight = 'light' | 'normal' | 'bold'
type LineHeight = 'none' | 'base'
type LetterSpacing = 'tight' | 'normal' | 'wide'

export interface TextProps {
	fontSize: FontSize
	font: FontFamily
	fontWeight: FontWeight
	lineHeight: LineHeight
	letterSpacing: LetterSpacing
}

export const fonts: Record<FontFamily, CSSProperties['fontFamily']> = {
	body: 'system-ui, sans-serif',
	heading: 'Georgia, serif'
}

export const fontSizes: Record<FontSize, CSSProperties['fontSize']> = {
	sm: '0.875rem',
	md: '1rem',
	lg: '1.125rem'
}

export const fontWeights: Record<FontWeight, CSSProperties['fontWeight']> = {
	light: 300,
	normal: 400,
	bold: 700
}

export const lineHeights: Record<LineHeight, CSSProperties['lineHeight']> = {
	none: 1,
	base: 1.5
}

export const letterSpacings: Record<LetterSpacing, CSSProperties['letterSpacing']> = {
	tight: '-0.025em',
	normal: '0',
	wide: '0.025em'
}

export const TextFn = ({ font, fontWeight, fontSize, letterSpacing, lineHeight }: TextProps) =>
	css({
		fontFamily: font && fonts[font],
		fontSize: fontSize && fontSizes[fontSize],
		fontWeight: fontWeight && fontWeights[fontWeight],
		letterSpacing: letterSpacing && letterSpacings[letterSpacing],
		lineHeight: lineHeight && lineHeights[lineHeight]
	})
