'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/utils/navigation'
import { locales } from '@/i18n/config'
import { Box } from '@/components/layout/box'
import { Inline } from '@/components/layout/inline'
import { Button } from '@/components/inputs/button'

const languageNames: Record<string, string> = {
	en: 'English',
	es: 'Español',
	hr: 'Hrvatski'
}

export function LocaleSwitcher() {
	const locale = useLocale()
	const router = useRouter()
	const pathname = usePathname()

	const handleLocaleChange = (newLocale: string) => {
		router.replace(pathname, { locale: newLocale })
	}

	return (
		<Box>
			<Inline gap={3}>
				{locales.map(loc => (
					<Button key={loc} onClick={() => handleLocaleChange(loc)} disabled={locale === loc}>
						{languageNames[loc]}
					</Button>
				))}
			</Inline>
		</Box>
	)
}
