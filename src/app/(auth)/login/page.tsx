'use client'

import { signIn } from 'next-auth/react'

import { Button } from '@/components/inputs/button'
import { Box } from '@/components/layout/box'

const Login = () => {
	const handleGoogleLogin = async () => {
		try {
			await signIn('google', { callbackUrl: '/' })
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Box display="flex" justify="center" align="center" style={{ height: '100vh', width: '100%' }}>
			<Button onClick={handleGoogleLogin}>Log in with your Cinnamon account.</Button>
		</Box>
	)
}

export default Login
