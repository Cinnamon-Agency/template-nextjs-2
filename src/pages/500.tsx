import { Layout } from 'components/shared'
import { NextPage } from 'next'

const Custom500: NextPage = () => {
	return (
		<Layout>
			<main>
				<h1>500</h1>
				<p>Server error occurred.</p>
			</main>
		</Layout>
	)
}

export default Custom500
