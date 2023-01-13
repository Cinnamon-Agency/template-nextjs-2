import styled from '@emotion/styled'
import {
	BorderFn,
	BorderProps,
	BreakpointsFn,
	BreakpointsProps,
	ColorFn,
	ColorProps,
	CornersFn,
	CornersProp,
	CSSFn,
	CSSProp,
	PaddingFn,
	PaddingProps,
	ShadowFn,
	ShadowProp,
	SizesFn,
	SizesProps,
	zIndexFn,
	ZIndexProp
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
