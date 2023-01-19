import { CSSProperties } from 'react'
import { css } from '@emotion/react'
import { spacing } from './spacing'
import type { Spacing } from './spacing'

type Gap = Spacing
export type GapProp = { gap?: Gap }

export interface FlexProps {
	display?: 'flex' | 'inline-flex'
	wrap?: CSSProperties['flexWrap']
	gap?: Gap
	direction?: CSSProperties['flexDirection']
	align?: CSSProperties['alignItems']
	justify?: CSSProperties['justifyContent']
	flex?: CSSProperties['flex']
	basis?: CSSProperties['flexBasis']
	grow?: CSSProperties['flexGrow']
	shrink?: CSSProperties['flexShrink']
	alignSelf?: CSSProperties['alignSelf']
	justifySelf?: CSSProperties['justifySelf']
	order?: CSSProperties['order']
}

export const GapFn = ({ gap = 'none' }: GapProp) => css({ gap: gap && spacing[gap] })

export const FlexFn = ({
	display = 'flex',
	wrap,
	gap,
	direction,
	align,
	justify,
	grow,
	shrink,
	basis,
	alignSelf,
	justifySelf,
	order
}: FlexProps) => {
	return css({
		display,
		flexWrap: wrap,
		gap: gap && spacing[gap],
		flexDirection: direction,
		alignItems: align,
		justifyContent: justify,
		flexGrow: grow,
		flexShrink: shrink,
		flexBasis: basis,
		justifySelf,
		alignSelf,
		order
	})
}
