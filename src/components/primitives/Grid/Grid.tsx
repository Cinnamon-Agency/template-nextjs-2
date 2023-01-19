import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { GapFn, GapProp } from 'styles/theme'

type GridProps = { columnWidth?: number }
type Props = GapProp & GridProps

const columnWidth = ({ columnWidth = 250 }: GridProps) => css`
	grid-template-columns: repeat(auto-fit, minmax(min(${columnWidth}px, 100%), 1fr));
`

/**
 * https://every-layout.dev/layouts/grid/
 */
export const Grid = styled.div<Props>`
	display: grid;
	${GapFn};
	${columnWidth};
`
