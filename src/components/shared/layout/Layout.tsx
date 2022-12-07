import { Head } from 'components/shared/head'
import { MetaTags } from 'models'
import { ReactNode } from 'react'

type LayoutProps = {
	metaTags: MetaTags
	children: ReactNode
}

export const Layout = ({ metaTags, children }: LayoutProps) => {
	return (
		<div>
			<Head metaTags={metaTags} />
			{children}
		</div>
	)
}
