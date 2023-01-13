import styled from '@emotion/styled'
import { FlexFn, FlexProps } from 'styles/theme'
import { Box } from '../Box'

/**
 * A Box with the power of display: flex;
 */
export const Flexbox = styled(Box)<FlexProps>(FlexFn)
