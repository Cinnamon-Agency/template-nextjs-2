'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/data-display/accordion'

export const Documents = () => {
	return (
		<Accordion type="single" collapsible>
			<AccordionItem value="documents">
				<AccordionTrigger>Documents</AccordionTrigger>
				<AccordionContent>Accordion Content</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}
