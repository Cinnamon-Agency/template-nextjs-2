import { css as emotionCSS } from '@emotion/react'
import type { CSSInterpolation } from '@emotion/serialize'

export type CSSProp = { css?: CSSInterpolation }

export const CSSFn = ({ css }: CSSProp) => emotionCSS(css)
