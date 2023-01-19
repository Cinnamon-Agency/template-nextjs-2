import styled from '@emotion/styled'
import { GapFn, GapProp } from 'styles/theme'

type Props = GapProp

/**
 * https://every-layout.dev/layouts/cluster/
 */
export const Cluster = styled.div<Props>`
	${GapFn};
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: center;
`
