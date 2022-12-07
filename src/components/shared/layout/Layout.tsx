import { Head } from 'components/shared/head'
import { MetaTagsModel } from 'models'
import React from 'react'

interface LayoutProps {
	metaTags: MetaTagsModel
	children: React.ReactNode
}

export const Layout = ({ metaTags, children }: LayoutProps) => {
	return (
		<div>
			<Head metaTags={metaTags} />
			{children}
		</div>
	)
}
