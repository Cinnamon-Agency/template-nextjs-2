'use client'

import { usePathname, useRouter } from 'next/navigation'

import { ArrowLeftIcon } from '@/components/icons/arrow-left-icon'
import { Button } from '@/components/inputs/button'
import { Box } from '@/components/layout/box'
import { Heading } from '@/components/typography/heading'
import { useTitleActionsStore } from '@/hooks/use-title-actions'
import { tokens } from '@/style/theme.css'

const recordOfTitles: Record<string, string> = {
	'/': 'Overview',
	'/people': 'People',
	'/off-work': 'Absence',
	'/admin': 'Admin'
}

export const Title = () => {
	const router = useRouter()
	const pathname = usePathname()
	const { enableBack, overriddenTitle } = useTitleActionsStore()

	return (
		<Box display="flex" align="center" gap={6}>
			{enableBack ? (
				<>
					<Button size="small" variant="secondary" onClick={() => router.back()}>
						<ArrowLeftIcon />
						Back
					</Button>
					<div style={{ width: '1px', height: '2rem', background: tokens.colors['neutral.200'] }} />
				</>
			) : null}
			{overriddenTitle ? (
				<Heading variant="h4" lineHeight="small">
					{overriddenTitle}
				</Heading>
			) : (
				<Heading variant="h2" lineHeight="small">
					{recordOfTitles[pathname]}
				</Heading>
			)}
		</Box>
	)
}
