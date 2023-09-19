import { getServerSession } from 'next-auth'

import { Box } from '@/components/layout/box'
import { Container } from '@/components/layout/container'
import { authOptions } from '@/lib/auth'
import { User } from 'app/components/user.component'

const Authorized = async () => {
	const session = await getServerSession(authOptions)

	return (
		<Container>
			<Box paddingY={10}>
				<h1>Server session:</h1>
				<pre>{JSON.stringify(session)}</pre>
			</Box>
			<User />
		</Container>
	)
}

export default Authorized
