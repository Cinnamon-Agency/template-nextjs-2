import type { CSSInterpolation } from '@emotion/serialize'
import { css } from '@emotion/react'
import { CSSProperties } from 'react'

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'fullWidth' | 'fullHeight' | 'fillContainer' | 'fillScreen'

export interface SizesProps {
	size?: Size
	width?: CSSProperties['width']
	height?: CSSProperties['height']
	maxWidth?: CSSProperties['maxWidth']
	maxHeight?: CSSProperties['maxHeight']
	minWidth?: CSSProperties['minWidth']
	minHeight?: CSSProperties['minHeight']
}

const sizes: Record<Size, CSSInterpolation> = {
	xs: { width: '1rem', height: '1rem' },
	sm: { width: '1.5rem', height: '1.5rem' },
	md: { width: '2rem', height: '2rem' },
	lg: { width: '3rem', height: '3rem' },
	xl: { width: '4rem', height: '4rem' },
	fullWidth: { width: '100%' },
	fullHeight: { height: '100%' },
	fillContainer: { width: '100%', height: '100%' },
	fillScreen: { width: '100vw', height: '100vh' }
}

// TODO: Have both dimensions and size work together
export const SizesFn = ({ size, width, height, maxWidth, minWidth, minHeight, maxHeight }: SizesProps) => {
	if (size) return sizes[size]

	return css({
		width,
		height,
		maxWidth,
		minWidth,
		maxHeight,
		minHeight
	})
}
