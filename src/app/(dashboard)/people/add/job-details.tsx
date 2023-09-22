'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/data-display/accordion'

export const JobDetails = () => {
	return (
		<Accordion type="single" collapsible>
			<AccordionItem value="job-details">
				<AccordionTrigger>Job Details</AccordionTrigger>
				<AccordionContent>Accordion Content</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}
