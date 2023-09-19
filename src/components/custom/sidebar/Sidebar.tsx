'use client'

import { usePathname, useRouter } from 'next/navigation'

import { BlockIcon } from '@/components/icons/block-icon'
import { IconButton } from '@/components/inputs/icon-button'
import { Box } from '@/components/layout/box'
import { Stack } from '@/components/layout/stack'

import CalendarIcon from './assets/calendar-icon.svg'
import CinnamonLogo from './assets/cinnamon-logo.svg'
import PeopleIcon from './assets/people-icon.svg'
import UserIcon from './assets/user-icon.svg'

export const Sidebar = () => {
	const router = useRouter()
	const pathname = usePathname()

	const routes = [
		{ href: '/people', icon: PeopleIcon, active: pathname === '/people' },
		{ href: '/off-work', icon: CalendarIcon, active: pathname === '/off-work' },
		{ href: '/admin', icon: UserIcon, active: pathname === '/admin' }
	]

	return (
		<Box
			display="flex"
			direction="column"
			paddingY={8}
			paddingX={4}
			backgroundColor="primary.500"
			style={{ height: '100vh' }}
			gap={12}>
			<IconButton onClick={() => router.push('/')} size="medium">
				<BlockIcon icon={CinnamonLogo} />
			</IconButton>
			<Stack gap={6}>
				{routes.map(route => (
					<IconButton key={route.href} onClick={() => router.push(route.href)} size="medium">
						<BlockIcon icon={route.icon} color={route.active ? 'shades.00' : 'primary.300'} />
					</IconButton>
				))}
			</Stack>
		</Box>
	)
}
