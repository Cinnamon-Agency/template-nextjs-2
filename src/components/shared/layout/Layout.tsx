import { Head } from 'components/shared/head'
import { ComponentProps, ReactNode } from 'react'

type Props = ComponentProps<typeof Head> & {
	children: ReactNode
}

export const Layout = ({ metaTags, children }: Props) => {
	return (
		<div>
			<Head metaTags={metaTags} />
			{children}
		</div>
	)
}