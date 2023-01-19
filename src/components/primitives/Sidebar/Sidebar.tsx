import styled from '@emotion/styled'
import { CompositeComponent } from 'types/components'
import { CSSProperties } from 'react'
import { GapFn, GapProp } from 'styles/theme'

interface AsideProps {
	/**
	 * The width of the sidebar (undefined means not set; defaults to the content width)
	 */
	maxWidth?: CSSProperties['maxWidth']
}

export const Sidebar: CompositeComponent<GapProp, 'Aside' | 'Content', AsideProps> = ({ children, gap = 'none' }) => {
	return <SidebarCore gap={gap}>{children}</SidebarCore>
}

Sidebar.Aside = ({ children, maxWidth }) => <Aside maxWidth={maxWidth}>{children}</Aside>
Sidebar.Content = ({ children }) => <Content>{children}</Content>

const SidebarCore = styled.div<GapProp>`
	display: flex;
	flex-wrap: wrap;
	${GapFn};
`

const Aside = styled.div<AsideProps>(({ maxWidth }) => ({
	flexGrow: 1,
	flexBasis: maxWidth
}))

const Content = styled.div({
	flexBasis: 0,
	flexGrow: 999,
	minInlineSize: '50%'
})
