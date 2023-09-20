'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'

import { BlockIcon } from '@/components/icons/block-icon'
import { IconButton } from '@/components/inputs/icon-button'
import { Box } from '@/components/layout/box'
import { Divider } from '@/components/layout/divider'
import { Inline } from '@/components/layout/inline'
import { Stack } from '@/components/layout/stack'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/overlay/menu'
import { Text } from '@/components/typography/text'

import ChevronDownIcon from './assets/chevron-down-icon.svg'
import LogOutIcon from './assets/log-out-icon.svg'
import SettingsIcon from './assets/settings-icon.svg'

export const Actions = () => {
	const router = useRouter()
	const { data } = useSession()

	if (!data?.user) return null

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<IconButton variant="ghost" size="small">
					<BlockIcon icon={ChevronDownIcon} />
				</IconButton>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<Box padding={4} display="flex" gap={4}>
					<Image src={data.user.image} width={30} height={30} alt={data.user.name} style={{ borderRadius: '100%' }} />
					<Stack gap={1}>
						<Text fontWeight="semibold">{data.user.name}</Text>
						<Text color="neutral.400" fontSize="small">
							{data.user.email}
						</Text>
					</Stack>
				</Box>
				<Divider />
				<Box padding={4} display="flex" gap={3} direction="column">
					<DropdownMenuItem onClick={() => router.push('/settings')}>
						<Inline gap={2} alignItems="center">
							<BlockIcon icon={SettingsIcon} size="medium" />
							<Text fontSize="small" fontWeight="semibold">
								Settings
							</Text>
						</Inline>
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => signOut()}>
						<Inline gap={2} alignItems="center">
							<BlockIcon icon={LogOutIcon} size="medium" />
							<Text fontSize="small" fontWeight="semibold">
								Log Out
							</Text>
						</Inline>
					</DropdownMenuItem>
				</Box>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
