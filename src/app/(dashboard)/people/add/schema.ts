import * as z from 'zod'

export const formSchema = z.object({
	// Personal Details
	lastName: z.string().min(1, { message: 'This field is required' }),
	firstName: z.string().min(1, { message: 'This field is required' }),
	office: z.string().min(1, { message: 'This field is required' }),
	gender: z.string(),
	oib: z
		.string()
		.regex(/^\d{11}$/)
		.or(z.literal('')),
	dateOfBirth: z
		.string()
		.regex(/^\d{2}\/\d{2}\/\d{4}$/, { message: 'Invalid date format. Use DD/MM/YYYY format.' })
		.or(z.literal('')),
	dateOfReligiousCelebration: z
		.string()
		.regex(/^\d{2}\/\d{2}\/\d{4}$/, { message: 'Invalid date format. Use DD/MM/YYYY format.' })
		.or(z.literal('')),
	address1: z.string(),
	address2: z.string(),
	workEmail: z
		.string()
		.regex(/^[A-Za-z0-9+_.-]+@(.+)$/, { message: 'Invalid email address format.' })
		.or(z.literal('')),
	personalEmail: z
		.string()
		.regex(/^[A-Za-z0-9+_.-]+@(.+)$/, { message: 'Invalid email address format.' })
		.or(z.literal('')),
	professionalQualification: z.string(),
	phoneNumber: z
		.string()
		.regex(/^\+\d{1,4}\d{1,15}$/, { message: 'Invalid phone number format.' })
		.or(z.literal('')),
	emergencyPhoneNumber: z
		.string()
		.regex(/^\+\d{1,4}\d{1,15}$/, { message: 'Invalid phone number format.' })
		.or(z.literal('')),
	emergencyContactName: z.string(),
	children: z.coerce.number().min(0),

	// Employment Details
	employmentDetails: z
		.array(
			z.object({
				firstEmployment: z.string(),
				startOfWork: z
					.string()
					.regex(/^\d{2}\/\d{2}\/\d{4}$/, { message: 'Invalid date format. Use DD/MM/YYYY format.' }),
				endOfWork: z
					.string()
					.regex(/^\d{2}\/\d{2}\/\d{4}$/, { message: 'Invalid date format. Use DD/MM/YYYY format.' })
					.or(z.literal('')),
				employmentType: z.string(),
				workingHours: z.string(),
				partTimeHours: z.number().optional(),
				employmentDuration: z.string(),
				probationPeriod: z.string(),
				probationPeriodDate: z.string(),
				vacationDays: z.number(),
				additionalRules: z.string()
			})
		)
		.min(1),

	// Job Details
	department: z.string().min(1, { message: 'This field is required' }),
	headOfDepartment: z.string(),
	teamLead: z.string(),
	workplace: z.string(),
	seniorityLevel: z.string(),
	roleInOperativa: z.string()
})

export type FormValues = z.infer<typeof formSchema>
