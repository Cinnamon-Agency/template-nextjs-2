import Image from 'next/image'
import { getServerSession } from 'next-auth'

import { Box } from '@/components/layout/box'
import { Text } from '@/components/typography/text'
import { authOptions } from '@/lib/auth'

import { Actions } from './Actions'
import { Title } from './Title'
import { Tag } from '../tag'

export const Navbar = async () => {
	const session = await getServerSession(authOptions)

	if (!session) return null

	return (
		<Box display="flex" justify="space-between" paddingX={6} paddingTop={8} paddingBottom={4}>
			<Title />
			<Box display="flex" align="center" gap={2}>
				<Image
					src={session.user.image}
					width={24}
					height={24}
					alt={session.user.name}
					style={{ borderRadius: '100%' }}
				/>
				<Text fontSize="small">{session.user.name}</Text>
				<Tag text="TL" />
				<Actions />
			</Box>
		</Box>
	)
}
