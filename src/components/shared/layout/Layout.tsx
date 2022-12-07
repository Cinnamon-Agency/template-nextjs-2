import { MetaTagsModel } from 'models'
import { ReactNode } from 'react'
import { Head } from './Head'

interface Props {
	metaTags: MetaTagsModel
	children?: ReactNode
}

export const Layout = ({ metaTags, children }: Props) => {
	return (
		<>
			<Head metaTags={metaTags} />
			{children}
		</>
	)
}
