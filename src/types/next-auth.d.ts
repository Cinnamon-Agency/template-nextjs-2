import { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
	/**
	 * Returned by `useSession`, `getSession`, `getServerSession`.
	 */
	interface Session extends JWT {
		user: {
			name: string
			email: string
			image: string
		}
	}
}
