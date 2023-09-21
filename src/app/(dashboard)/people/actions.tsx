'use client'

import { useRouter } from 'next/navigation'

import { ConfirmDialog } from '@/components/custom/confirm-dialog'
import { BlockIcon } from '@/components/icons/block-icon'
import { IconButton } from '@/components/inputs/icon-button'
import { Box } from '@/components/layout/box'
import { useOpened } from '@/hooks/use-toggle'

import DeleteIcon from './assets/delete-icon.svg'
import EditIcon from './assets/edit-icon.svg'
import type { PeopleColumn } from './columns'

interface Props {
	data: PeopleColumn
}

export const Actions = ({ data }: Props) => {
	const router = useRouter()
	const confirmDialog = useOpened()

	const onDelete = () => {
		confirmDialog.toggleOpened()
	}

	return (
		<>
			<Box display="flex" gap={2}>
				<IconButton size="small" variant="ghost" onClick={() => router.push(`/people/${data.id}`)}>
					<BlockIcon icon={EditIcon} />
				</IconButton>
				<IconButton size="small" variant="ghost" onClick={confirmDialog.toggleOpened}>
					<BlockIcon icon={DeleteIcon} />
				</IconButton>
			</Box>
			<ConfirmDialog
				opened={confirmDialog.opened}
				title="Delete employee?"
				description="If you delete this person, all data will be deleted and cannot be recovered."
				onClose={confirmDialog.toggleOpened}
				onConfirm={onDelete}
			/>
		</>
	)
}
