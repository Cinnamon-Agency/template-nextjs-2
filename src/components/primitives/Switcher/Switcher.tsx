import styled from '@emotion/styled'
import { css } from '@emotion/react'
import type { CSSInterpolation } from '@emotion/serialize'
import { CSSProperties } from 'react'
import { GapFn, GapProp } from 'styles/theme'

type Props = GapProp & SwitcherProps
interface SwitcherProps {
	/**
	 * The container width at which the component switches between a horizontal and vertical layout
	 */
	threshold?: CSSProperties['maxWidth']
	/**
	 * The maximum number of elements allowed to appear in the horizontal configuration
	 */
	limit?: number
}

const forceFullWidthIfContainerTooSmall = ({ threshold = '30em' }: SwitcherProps) => css`
	& > * {
		flex-grow: 1;
		flex-basis: calc((${threshold} - 100%) * 999);
	}
`

const ifNumChildrenAbove = (count: number = 4, styles: CSSInterpolation) => {
	const maxChildren = count + 1
	return css`
		& > :nth-last-child(n + ${maxChildren}),
		& > :nth-last-child(n + ${maxChildren}) ~ * {
			${styles};
		}
	`
}

const forceFullWidthIfTooManyChildren = ({ limit }: SwitcherProps) =>
	limit && ifNumChildrenAbove(limit, css({ flexBasis: '100%' }))

/**
 * https://every-layout.dev/layouts/switcher/
 */
export const Switcher = styled.div<Props>`
	display: flex;
	flex-wrap: wrap;
	${GapFn};
	${forceFullWidthIfContainerTooSmall};
	${forceFullWidthIfTooManyChildren};
`
