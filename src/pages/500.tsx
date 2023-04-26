import { NextPage } from 'next'
import { GeneralLayout } from 'components/layout'

const serverErrorMeta = {
	title: 'Something went wrong',
	description: ''
}

const Custom500: NextPage = () => {
	return (
		<GeneralLayout metaTags={serverErrorMeta}>
			<main>
				<h1>500</h1>
				<p>Server error occurred.</p>
			</main>
		</GeneralLayout>
	)
}

export default Custom500
