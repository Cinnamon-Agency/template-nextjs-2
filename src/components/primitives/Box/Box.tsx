import styled from '@emotion/styled'

import {
	BorderFn,
	BorderProps,
	BreakpointsFn,
	BreakpointsProps,
	CSSFn,
	CSSProp,
	ColorFn,
	ColorProps,
	CornersFn,
	CornersProp,
	PaddingFn,
	PaddingProps,
	ShadowFn,
	ShadowProp,
	SizesFn,
	SizesProps,
	ZIndexProp,
	zIndexFn
} from 'styles/theme'

type Props = PaddingProps &
	CornersProp &
	BorderProps &
	BreakpointsProps &
	ColorProps &
	SizesProps &
	ShadowProp &
	CSSProp &
	ZIndexProp

/**
 * https://every-layout.dev/layouts/box/
 */
export const Box = styled.div<Props>([
	PaddingFn,
	CornersFn,
	BorderFn,
	ColorFn,
	SizesFn,
	ShadowFn,
	BreakpointsFn,
	zIndexFn,
	CSSFn
])
