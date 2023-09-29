import { useRouter } from 'next/navigation'
import { useFormContext } from 'react-hook-form'
import toast from 'react-hot-toast'

import { ConfirmDialog } from '@/components/custom/confirm-dialog'
import { Button } from '@/components/inputs/button'
import { Box } from '@/components/layout/box'
import { useOpened } from '@/hooks/use-toggle'

export const Actions = () => {
	const formContext = useFormContext()
	const router = useRouter()
	const confirmDialog = useOpened()
	const cancelDialog = useOpened()

	const onSubmit = () => {
		const data = formContext.getValues()
		console.log(data)
		toast.success(`New Employee "${data.firstName} ${data.lastName}" saved!`)
	}

	const onReset = () => {
		formContext.reset()
	}

	const onCancel = () => {
		router.back()
	}

	return (
		<>
			<Box paddingY={10} />
			<Box
				position="fixed"
				boxShadow="medium"
				padding={2}
				display="flex"
				gap={4}
				paddingLeft={24}
				style={{ bottom: 0, left: 0, width: '100%', background: 'white' }}>
				<Button variant="ghost" type="button" onClick={cancelDialog.toggleOpened}>
					Cancel
				</Button>
				<Button variant="secondary" type="button" onClick={onReset}>
					Reset
				</Button>
				<Button
					variant="primary"
					disabled={!formContext.formState.isValid}
					type="button"
					onClick={confirmDialog.toggleOpened}>
					Save
				</Button>
			</Box>
			<ConfirmDialog
				opened={confirmDialog.opened}
				title="Save employee?"
				description="The Employee that you filled will be added to the list of people in the table. Do you want to proceed this action?"
				onClose={confirmDialog.toggleOpened}>
				<ConfirmDialog.Actions>
					<Button variant="secondary" onClick={confirmDialog.toggleOpened}>
						No, cancel
					</Button>
					<Button onClick={onSubmit}>Yes, save employee</Button>
				</ConfirmDialog.Actions>
			</ConfirmDialog>
			<ConfirmDialog
				opened={cancelDialog.opened}
				title="Cancel employee?"
				description="Canceling the “Add employee” form cannot be undone, and all the data within this form will be lost."
				onClose={cancelDialog.toggleOpened}>
				<ConfirmDialog.Actions>
					<Button variant="secondary" onClick={cancelDialog.toggleOpened}>
						Keep this form
					</Button>
					<Button onClick={onCancel}>Yes, cancel anyway</Button>
				</ConfirmDialog.Actions>
			</ConfirmDialog>
		</>
	)
}
