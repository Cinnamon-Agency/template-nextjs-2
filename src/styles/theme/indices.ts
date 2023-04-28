import { CSSProperties } from 'react'
import { css } from '@emotion/react'

type Indices = 'under' | 'over' | 'default'
export type ZIndexProp = { zIndex?: Indices }

const zIndices: Record<Indices, CSSProperties['zIndex']> = {
	default: 0,
	over: 100,
	under: -100
}

export const zIndexFn = ({ zIndex }: ZIndexProp) => css({ zIndex: zIndex && zIndices[zIndex] })
