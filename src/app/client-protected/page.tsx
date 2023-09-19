/* eslint-disable @next/next/no-img-element */

'use client'

import { redirect } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { cache, use } from 'react'

import { LoadingBoundary } from '@/components/utils/loading-boundary'

type User = {
	id: number
	name: string
	email: string
}

const getUsers = cache(() => fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()))

const Users = () => {
	const users = use<User[]>(getUsers())

	return (
		<>
			{users.map(user => (
				<div key={user.id} style={{ border: '1px solid #ccc', textAlign: 'center' }}>
					<img
						src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
						alt={user.name}
						style={{ height: 180, width: 180 }}
					/>
					<h3>{user.name}</h3>
				</div>
			))}
		</>
	)
}

const ClientProtected = () => {
	const { status } = useSession({
		required: true,
		onUnauthenticated() {
			redirect('/api/auth/signin')
		}
	})

	if (status === 'loading') {
		return <p>Loading....</p>
	}

	return (
		<main style={{ maxWidth: 1200, marginInline: 'auto', padding: 20 }}>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '1fr 1fr 1fr 1fr',
					gap: 20
				}}>
				<LoadingBoundary loader={<div />}>
					<Users />
				</LoadingBoundary>
			</div>
		</main>
	)
}

export default ClientProtected
