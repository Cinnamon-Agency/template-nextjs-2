'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/data-display/accordion'
import { AttachmentIcon } from '@/components/icons/attachment-icon'
import { Button } from '@/components/inputs/button'
import { Box } from '@/components/layout/box'
import { Divider } from '@/components/layout/divider'
import { Stack } from '@/components/layout/stack'
import { Text } from '@/components/typography/text'

export const Documents = () => {
	return (
		<Accordion type="single" collapsible>
			<AccordionItem value="documents">
				<AccordionTrigger>Documents</AccordionTrigger>
				<AccordionContent>
					<Stack gap={8}>
						<Divider />
						<Box display="flex" gap={6}>
							<div
								style={{
									width: '10rem',
									flexShrink: 0,
									display: 'flex',
									justifyContent: 'flex-end',
									alignItems: 'center'
								}}>
								<Text fontSize="small" fontWeight="semibold" as="label">
									PK Kartica (optional)
								</Text>
							</div>
							<div style={{ flexGrow: 1 }}>
								<Button variant="secondary" size="small">
									<AttachmentIcon size="small" />
									Add an attachment
								</Button>
							</div>
						</Box>
						<Box display="flex" align="flex-start" gap={6}>
							<div style={{ width: '10rem', flexShrink: 0, display: 'flex', textAlign: 'right' }}>
								<Text fontSize="small" fontWeight="semibold" as="label">
									Additional document (optional)
								</Text>
							</div>
							<div style={{ flexGrow: 1 }}>
								<Button variant="secondary" size="small">
									<AttachmentIcon size="small" />
									Add an attachment
								</Button>
							</div>
						</Box>
					</Stack>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}
