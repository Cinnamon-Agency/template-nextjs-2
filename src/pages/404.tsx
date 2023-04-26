import { NextPage } from 'next'
import { GeneralLayout } from 'components/layout'

const notFoundMeta = {
	title: 'Page Not Found',
	description: ''
}

const Custom404: NextPage = () => {
	return (
		<GeneralLayout metaTags={notFoundMeta}>
			<h1>404</h1>
			<p>Page not found.</p>
		</GeneralLayout>
	)
}

export default Custom404
