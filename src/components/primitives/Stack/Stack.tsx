import styled from '@emotion/styled'

import { FlexFn, FlexProps, GapProp } from 'styles/theme'

type Props = GapProp & Pick<FlexProps, 'direction' | 'align' | 'justify'>

/**
 * https://every-layout.dev/layouts/stack/
 */
export const Stack = styled.div<Props>`
	flex-direction: column;
	${FlexFn};
`
