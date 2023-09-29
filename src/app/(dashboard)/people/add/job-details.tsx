'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/data-display/accordion'
import { FormControl } from '@/components/inputs/form-control'
import { Select } from '@/components/inputs/select'
import { Box } from '@/components/layout/box'
import { Columns } from '@/components/layout/columns'
import { Divider } from '@/components/layout/divider'
import { Stack } from '@/components/layout/stack'
import { Text } from '@/components/typography/text'

import { departments, headOfDepartments, offices, roleInOperativa, seniorityLevels, teamLeads } from '../data'

export const JobDetails = () => {
	return (
		<Accordion type="single" collapsible>
			<AccordionItem value="job-details">
				<AccordionTrigger>Job Details</AccordionTrigger>
				<AccordionContent>
					<Stack gap={6}>
						<Divider />
						<Stack gap={8}>
							<Box display="flex" align="center" gap={6}>
								<div style={{ width: '10rem', flexShrink: 0, display: 'flex', justifyContent: 'flex-end' }}>
									<Text fontSize="small" fontWeight="semibold" as="label">
										Department*
									</Text>
								</div>
								<div style={{ flexGrow: 1 }}>
									<Columns gap={4}>
										<Columns.Item columns={6}>
											<FormControl name="department">
												<Select options={departments} />
											</FormControl>
										</Columns.Item>
									</Columns>
								</div>
							</Box>
							<Box display="flex" align="center" gap={6}>
								<div style={{ width: '10rem', flexShrink: 0, display: 'flex', justifyContent: 'flex-end' }}>
									<Text fontSize="small" fontWeight="semibold" as="label">
										Head of department
									</Text>
								</div>
								<div style={{ flexGrow: 1 }}>
									<Columns gap={4}>
										<Columns.Item columns={6}>
											<FormControl name="headOfDepartment">
												<Select options={headOfDepartments} />
											</FormControl>
										</Columns.Item>
									</Columns>
								</div>
							</Box>
							<Box display="flex" align="center" gap={6}>
								<div style={{ width: '10rem', flexShrink: 0, display: 'flex', justifyContent: 'flex-end' }}>
									<Text fontSize="small" fontWeight="semibold" as="label">
										Team lead
									</Text>
								</div>
								<div style={{ flexGrow: 1 }}>
									<Columns gap={4}>
										<Columns.Item columns={6}>
											<FormControl name="teamLead">
												<Select options={teamLeads} />
											</FormControl>
										</Columns.Item>
									</Columns>
								</div>
							</Box>
							<Box display="flex" align="center" gap={6}>
								<div style={{ width: '10rem', flexShrink: 0, display: 'flex', justifyContent: 'flex-end' }}>
									<Text fontSize="small" fontWeight="semibold" as="label">
										Workplace
									</Text>
								</div>
								<div style={{ flexGrow: 1 }}>
									<Columns gap={4}>
										<Columns.Item columns={6}>
											<FormControl name="workplace">
												<Select options={offices} />
											</FormControl>
										</Columns.Item>
									</Columns>
								</div>
							</Box>
							<Box display="flex" align="center" gap={6}>
								<div style={{ width: '10rem', flexShrink: 0, display: 'flex', justifyContent: 'flex-end' }}>
									<Text fontSize="small" fontWeight="semibold" as="label">
										Seniority level
									</Text>
								</div>
								<div style={{ flexGrow: 1 }}>
									<Columns gap={4}>
										<Columns.Item columns={6}>
											<FormControl name="seniorityLevel">
												<Select options={seniorityLevels} />
											</FormControl>
										</Columns.Item>
									</Columns>
								</div>
							</Box>
							<Box display="flex" align="center" gap={6}>
								<div style={{ width: '10rem', flexShrink: 0, display: 'flex', justifyContent: 'flex-end' }}>
									<Text fontSize="small" fontWeight="semibold" as="label">
										Role in Operativa
									</Text>
								</div>
								<div style={{ flexGrow: 1 }}>
									<Columns gap={4}>
										<Columns.Item columns={6}>
											<FormControl name="roleInOperativa">
												<Select options={roleInOperativa} />
											</FormControl>
										</Columns.Item>
									</Columns>
								</div>
							</Box>
						</Stack>
					</Stack>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}
