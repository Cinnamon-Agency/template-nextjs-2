import { CSSProperties } from 'react'
import { css } from '@emotion/react'

type Radii = 'none' | 'xs' | 'md' | 'lg' | 'full'

export type CornersProp = { borderRadius?: Radii }

const radii: Record<Radii, CSSProperties['borderRadius']> = {
	none: 0,
	xs: '0.5rem',
	md: '1rem',
	lg: '1.5rem',
	full: '9999px'
}

export const CornersFn = ({ borderRadius }: CornersProp) => css({ borderRadius: borderRadius && radii[borderRadius] })
