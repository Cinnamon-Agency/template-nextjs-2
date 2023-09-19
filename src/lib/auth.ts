import type { NextAuthOptions } from 'next-auth'
// import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
	session: {
		strategy: 'jwt'
	},
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID ?? '',
			clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
		})
		// CredentialsProvider({
		// 	name: 'Sign in',
		// 	credentials: {
		// 		email: {
		// 			label: 'Email',
		// 			type: 'email',
		// 			placeholder: 'example@example.com'
		// 		},
		// 		password: { label: 'Password', type: 'password' }
		// 	},
		// 	async authorize(credentials) {
		// 		console.log(credentials)
		// 		return { id: '1', name: 'Admin', email: 'admin@admin.com' }
		// 	}
		// })
	],
	callbacks: {
		session: ({ session, token }) => {
			console.log('Session Callback', { session, token })
			return session
		},
		jwt: ({ token, user }) => {
			console.log('JWT Callback', { token, user })
			return token
		}
	}
}
