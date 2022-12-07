import { MetaTagsModel } from 'models'
import _Head from 'next/head'

interface Props {
	metaTags: MetaTagsModel
}

export const Head = ({ metaTags }: Props) => {
	const { title, description } = metaTags

	return (
		<_Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<meta name="description" content={description} />
		</_Head>
	)
}
