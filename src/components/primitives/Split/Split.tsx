import styled from '@emotion/styled'

import { GapFn, GapProp } from 'styles/theme'

/**
 * Separates the passed children by splitting them apart as much as possible.
 * Useful for aligning an element to each edge.
 */
export const Split = styled.div<GapProp>`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	${GapFn};
`
