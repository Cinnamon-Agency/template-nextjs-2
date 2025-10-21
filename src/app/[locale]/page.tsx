import { useTranslations } from 'next-intl'
import { Box } from '@/components/layout/box'
import { Text } from '@/components/typography/text'
import { Stack } from '@/components/layout/stack'
import { LocaleSwitcher } from '@/components/utils/locale-switcher'

export default function HomePage() {
	const t = useTranslations()
	return (
		<Box display="flex" flexDirection="column" align="center" justify="center" style={{ height: '70vh' }}>
			<Stack alignItems="center" gap={8}>
				<Stack alignItems="center">
					<Text variant="h1" textTransform="uppercase">
						{t('cinnamonTemplate')}
					</Text>
					<Text variant="h3">{t('welcome')}</Text>
				</Stack>
				<LocaleSwitcher />
			</Stack>
		</Box>
	)
}
