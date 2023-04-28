import { css } from '@emotion/react'
import type { CSSInterpolation } from '@emotion/serialize'
import styled from '@emotion/styled'
import { PropsWithChildren } from 'react'

type Layout = 'centered' | 'filled'
type LayoutProps = { layout?: Layout }
type VisibilityProps = { visible?: boolean }
type Props = PropsWithChildren<LayoutProps & VisibilityProps>

const layoutObject: Record<Layout, CSSInterpolation> = {
	centered: css({
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)'
	}),
	filled: css({
		top: 0,
		left: 0,
		width: '100%',
		height: '100%'
	})
}

const layout = ({ layout = 'filled' }: LayoutProps) => layoutObject[layout]
const visibility = ({ visible = true }: VisibilityProps) => css({ display: visible ? 'block' : 'none' })

const ImposterCore = styled.div<LayoutProps & VisibilityProps>`
	position: absolute;
	${layout};
	${visibility};
`

/**
 * https://every-layout.dev/layouts/imposter/
 * TODO: Should probably use react portal to render children outside DOM hierarchy
 */
export const Imposter = ({ children, layout, visible }: Props) => {
	return (
		<ImposterCore layout={layout} visible={visible}>
			{children}
		</ImposterCore>
	)
}
