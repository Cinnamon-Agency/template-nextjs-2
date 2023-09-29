'use client'

import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

import { tokens } from '@/style/theme.css'

type Props = {
	children: ReactNode
}

export const Providers = ({ children }: Props) => {
	return (
		<SessionProvider>
			{children}
			<Toaster
				position="bottom-right"
				toastOptions={{
					duration: 3000,
					style: {
						padding: `${tokens.spacing['4']} ${tokens.spacing['6']}`,
						background: tokens.colors['success.500'],
						color: tokens.colors['shades.00']
					}
				}}
			/>
		</SessionProvider>
	)
}
