'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/data-display/accordion'

export const EmploymentDetails = () => {
	return (
		<Accordion type="single" collapsible>
			<AccordionItem value="employment-details">
				<AccordionTrigger>Employment Details</AccordionTrigger>
				<AccordionContent>Accordion Content</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}
