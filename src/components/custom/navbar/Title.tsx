'use client'

import { usePathname } from 'next/navigation'

import { Box } from '@/components/layout/box'
import { Heading } from '@/components/typography/heading'

const recordOfTitles: Record<string, string> = {
	'/': 'Overview',
	'/people': 'People',
	'/off-work': 'Absence',
	'/admin': 'Admin'
}

export const Title = () => {
	const pathname = usePathname()

	return (
		<Box>
			<Heading variant="h2">{recordOfTitles[pathname]}</Heading>
		</Box>
	)
}
