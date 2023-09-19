'use client'

import { signIn } from 'next-auth/react'

import { Button } from '@/components/inputs/button'

export const Actions = () => {
	return (
		<div>
			<Button onClick={() => signIn()}>Sign In</Button>
		</div>
	)
}
