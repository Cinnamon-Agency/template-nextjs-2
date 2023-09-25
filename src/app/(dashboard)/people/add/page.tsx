'use client'

// import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

import { Stack } from '@/components/layout/stack'
import { useOverridePageTitle } from '@/hooks/override-page-title'

import { Actions } from './actions'
import { Documents } from './documents'
import { EmploymentDetails } from './employment-details'
import { Intro } from './intro'
import { JobDetails } from './job-details'
import { PersonalDetails } from './personal-details'
import { FormValues, formSchema } from './schema'

const AddEmployee = () => {
	useOverridePageTitle('Add Employee')

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
			<Actions />
			{/* <DevTool control={form.control} /> */}
		</FormProvider>
	)
}

export default AddEmployee
