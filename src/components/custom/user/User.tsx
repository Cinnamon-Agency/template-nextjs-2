'use client'

import { signOut, useSession } from 'next-auth/react'

export const User = () => {
	const { data: session } = useSession()

	return (
		<>
			<code>
				<pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(session)}</pre>
			</code>
			<button type="button" onClick={() => signOut()}>
				Sign out
			</button>
		</>
	)
}
