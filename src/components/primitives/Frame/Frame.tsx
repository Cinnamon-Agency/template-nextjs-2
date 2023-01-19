import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { CSSProperties } from 'react'

type Shape = 'square' | 'landscape'
type Props = { shape?: Shape }

const shapeValues: Record<Shape, CSSProperties['aspectRatio']> = {
	square: '1 / 1',
	landscape: '16 / 9'
}

const aspectRatio = ({ shape = 'landscape' }: Props) => css({ aspectRatio: shapeValues[shape] })

/**
 * https://every-layout.dev/layouts/frame/
 */
export const Frame = styled.div<Props>`
	${aspectRatio};
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;

	> img,
	> video {
		inline-size: 100%;
		block-size: 100%;
		object-fit: cover;
	}
`
