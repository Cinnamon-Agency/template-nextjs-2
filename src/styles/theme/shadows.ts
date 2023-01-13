import { css } from '@emotion/react'
import { CSSProperties } from 'react'

type Shadows = 'none' | 'xs' | 'md' | 'lg'

export type ShadowProp = { shadow?: Shadows }

const shadows: Record<Shadows, CSSProperties['boxShadow']> = {
	none: 'none',
	xs: '0px 0px 16px -2px #00000015',
	md: '0px 0px 20px -2px #00000025',
	lg: '0px 0px 24px -2px #00000035'
}

export const ShadowFn = ({ shadow }: ShadowProp) => css({ boxShadow: shadow && shadows[shadow] })
