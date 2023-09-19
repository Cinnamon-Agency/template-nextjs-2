'use client'

import { signOut, useSession } from 'next-auth/react'

export const User = () => {
	const { data: session } = useSession()

	return (
		<>
			<h1>Client Session</h1>
			<pre>{JSON.stringify(session)}</pre>
			<button type="button" onClick={() => signOut()}>
				Sign out
			</button>
		</>
	)
}
