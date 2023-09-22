import * as z from 'zod'

export const formSchema = z.object({
	// Personal Details
	lastName: z.string().min(1, { message: 'This field is required' }),
	firstName: z.string().min(1, { message: 'This field is required' }),
	office: z.string().min(1, { message: 'This field is required' }),
	gender: z.string(),
	oib: z.string(),
	dateOfBirth: z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/, { message: 'Invalid date format. Use DD/MM/YYYY format.' }),
	dateOfReligiousCelebration: z
		.string()
		.regex(/^\d{2}\/\d{2}\/\d{4}$/, { message: 'Invalid date format. Use DD/MM/YYYY format.' }),
	address1: z.string(),
	address2: z.string(),
	workEmail: z.string().regex(/^[A-Za-z0-9+_.-]+@(.+)$/, { message: 'Invalid email address format.' }),
	personalEmail: z.string().regex(/^[A-Za-z0-9+_.-]+@(.+)$/, { message: 'Invalid email address format.' }),
	professionalQualification: z.string(),
	phoneNumber: z.string().regex(/^\+\d{1,4}\d{1,15}$/, { message: 'Invalid phone number format.' }),
	emergencyPhoneNumber: z.string().regex(/^\+\d{1,4}\d{1,15}$/, { message: 'Invalid phone number format.' }),
	emergencyContactName: z.string(),
	children: z.coerce.number().min(0)
})

export type FormValues = z.infer<typeof formSchema>
