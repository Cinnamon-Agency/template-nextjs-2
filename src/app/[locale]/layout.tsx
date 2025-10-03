import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

type Props = {
	children: React.ReactNode
	params: { locale: string }
}

export default async function RootLayout({ children, params: { locale } }: Props) {
	const messages = await getMessages()

	return (
		<html lang={locale}>
			<body className={inter.className}>
				<NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
			</body>
		</html>
	)
}
