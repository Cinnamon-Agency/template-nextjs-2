import { CSSProperties } from 'react'
import { css } from '@emotion/react'
import type { ColorKeys } from './colors'
import { colors } from './colors'

type BorderWidth = 'none' | 'thin' | 'medium' | 'thick'
type BorderStyle = 'none' | 'solid' | 'dashed'
type BorderColor = ColorKeys

export interface BorderProps {
	borderWidth?: BorderWidth
	borderStyle?: BorderStyle
	borderColor?: BorderColor
}

const borderWidths: Record<BorderWidth, CSSProperties['borderWidth']> = {
	none: '0',
	thin: '1px',
	medium: '2px',
	thick: '4px'
}

const borderStyles: Record<BorderStyle, CSSProperties['borderStyle']> = {
	none: 'none',
	solid: 'solid',
	dashed: 'dashed'
}

export const BorderFn = ({ borderWidth, borderStyle, borderColor }: BorderProps) =>
	css({
		borderWidth: borderWidth && borderWidths[borderWidth],
		borderStyle: borderStyle && borderStyles[borderStyle],
		borderColor: borderColor && colors[borderColor]
	})
