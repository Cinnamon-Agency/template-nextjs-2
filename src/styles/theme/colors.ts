import { css } from '@emotion/react'

// Figure how design wants colors
export const colors = {
	white: '#FFFFFF',
	black: '#000000'
}

export type ColorKeys = keyof typeof colors

export interface ColorProps {
	background?: ColorKeys
	color?: ColorKeys
}

export const ColorFn = ({ color, background }: ColorProps) =>
	css({
		color: color && colors[color],
		background: background && colors[background]
	})
