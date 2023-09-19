import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
	session: {
		strategy: 'jwt'
	},
	pages: {
		signIn: '/login'
	},
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID ?? '',
			clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
		})
	],
	callbacks: {
		session: ({ session }) => {
			// console.log('Session Callback', { session, token })
			return session
		},
		jwt: ({ token }) => {
			// console.log('JWT Callback', { token, user })
			return token
		}
	}
}
