'use client'

// import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { ConfirmDialog } from '@/components/custom/confirm-dialog'
import { Button } from '@/components/inputs/button'
import { Box } from '@/components/layout/box'
import { Stack } from '@/components/layout/stack'
import { useTitleActionsStore } from '@/hooks/use-title-actions'
import { useOpened } from '@/hooks/use-toggle'

import { Documents } from './documents'
import { EmploymentDetails } from './employment-details'
import { Intro } from './intro'
import { JobDetails } from './job-details'
import { PersonalDetails } from './personal-details'
import { FormValues, formSchema } from './schema'

const AddEmployee = () => {
	const { setOverriddenTitle, setEnableBack } = useTitleActionsStore()

	const form = useForm<FormValues>({
		mode: 'onBlur',
		resolver: zodResolver(formSchema),
		defaultValues: {
			lastName: '',
			firstName: '',
			office: '',
			gender: '',
			oib: '',
			dateOfBirth: '',
			dateOfReligiousCelebration: '',
			address1: '',
			address2: '',
			workEmail: '',
			personalEmail: '',
			professionalQualification: '',
			phoneNumber: '',
			emergencyPhoneNumber: '',
			emergencyContactName: '',
			children: 0
		}
	})

	const confirmDialog = useOpened()

	useEffect(() => {
		setOverriddenTitle('Add Employee')
		setEnableBack(true)

		return () => {
			setOverriddenTitle(undefined)
			setEnableBack(false)
		}
	}, [setOverriddenTitle, setEnableBack])

	const onSubmit = (data: FormValues) => {
		console.log(data)
	}

	const onReset = () => {
		form.reset()
	}

	return (
		<FormProvider {...form}>
			<Stack gap={6}>
				<Intro />
				<div style={{ maxWidth: '50rem' }}>
					<Stack gap={6}>
						<PersonalDetails />
						<EmploymentDetails />
						<Documents />
						<JobDetails />
					</Stack>
				</div>
			</Stack>
			<Box paddingY={10} />
			<Box
				position="fixed"
				boxShadow="medium"
				padding={2}
				display="flex"
				gap={4}
				paddingLeft={24}
				style={{ bottom: 0, left: 0, width: '100%', background: 'white' }}>
				<Button variant="ghost" type="button">
					Cancel
				</Button>
				<Button variant="secondary" type="button" onClick={onReset}>
					Reset
				</Button>
				<Button variant="primary" disabled={!form.formState.isValid} type="button" onClick={confirmDialog.toggleOpened}>
					Save
				</Button>
			</Box>
			<ConfirmDialog
				opened={confirmDialog.opened}
				title="Save employee?"
				description="The Employee that you filled will be added to the list of people in the table. Do you want to proceed this action?"
				onClose={confirmDialog.toggleOpened}
				onConfirm={() => onSubmit(form.getValues())}
			/>
			{/* <DevTool control={form.control} /> */}
		</FormProvider>
	)
}

export default AddEmployee
