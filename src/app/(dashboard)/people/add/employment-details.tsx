'use client'

import { Controller, useFieldArray, useFormContext } from 'react-hook-form'

import { Counter } from '@/components/custom/counter'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/data-display/accordion'
import { DeleteIcon } from '@/components/icons/delete-icon'
import { PlusIcon } from '@/components/icons/plus-icon'
import { Button } from '@/components/inputs/button'
import { Checkbox } from '@/components/inputs/checkbox'
import { FormControl } from '@/components/inputs/form-control'
import { PatternInput } from '@/components/inputs/pattern-input'
import { RadioGroup } from '@/components/inputs/radio-group'
import { Select } from '@/components/inputs/select'
import { Box } from '@/components/layout/box'
import { Columns } from '@/components/layout/columns'
import { Divider } from '@/components/layout/divider'
import { Stack } from '@/components/layout/stack'
import { Text } from '@/components/typography/text'

const defaultValues = {
	firstEmployment: '',
	startOfWork: '',
	endOfWork: '',
	employmentType: '',
	workingHours: '',
	partTimeHours: 0,
	employmentDuration: '',
	probationPeriod: '',
	probationPeriodDate: '',
	vacationDays: 20,
	additionalRules: ''
}

export const EmploymentDetails = () => {
	const { control, watch } = useFormContext()
	const { fields, append, remove } = useFieldArray({ control, name: 'employmentDetails' })
	console.log(fields)

	return (
		<Accordion type="single" collapsible>
			<AccordionItem value="employment-details">
				<AccordionTrigger>Employment Details</AccordionTrigger>
				<AccordionContent>
					<Stack gap={4} alignItems="flex-start">
						{fields.map((field, index) => (
							<Box key={field.id} border="thin" borderColor="neutral.200" borderRadius="small" padding={6}>
								<Stack gap={6}>
									<Text fontWeight="semibold">Employment Period</Text>
									<Divider />
									<Stack gap={8}>
										<Box display="flex" align="flex-start" gap={6}>
											<div style={{ width: '10rem', flexShrink: 0, display: 'flex', justifyContent: 'flex-end' }}>
												<Text fontSize="small" fontWeight="semibold" as="label">
													First employment
												</Text>
											</div>
											<div style={{ flexGrow: 1 }}>
												<Columns gap={4}>
													<Columns.Item columns={6}>
														<Controller
															control={control}
															name={`employmentDetails[${index}].firstEmployment`}
															render={({ field }) => {
																return (
																	<RadioGroup
																		name={field.name}
																		value={field.value}
																		onChange={field.onChange}
																		options={[
																			{ label: 'Yes', value: 'yes' },
																			{ label: 'No', value: 'no' }
																		]}
																	/>
																)
															}}
														/>
													</Columns.Item>
												</Columns>
											</div>
										</Box>
										<Box display="flex" align="center" gap={6}>
											<div style={{ width: '10rem', flexShrink: 0, display: 'flex', justifyContent: 'flex-end' }}>
												<Text fontSize="small" fontWeight="semibold" as="label">
													Start of work*
												</Text>
											</div>
											<div style={{ flexGrow: 1 }}>
												<Columns gap={4}>
													<Columns.Item columns={6}>
														<FormControl name={`employmentDetails[${index}].startOfWork`}>
															<PatternInput format="##/##/####" mask="_" placeholder="DD/MM/YYYY" />
														</FormControl>
													</Columns.Item>
												</Columns>
											</div>
										</Box>
										<Box display="flex" align="center" gap={6}>
											<div style={{ width: '10rem', flexShrink: 0, display: 'flex', justifyContent: 'flex-end' }}>
												<Text fontSize="small" fontWeight="semibold" as="label">
													End of work
												</Text>
											</div>
											<div style={{ flexGrow: 1 }}>
												<Columns gap={4}>
													<Columns.Item columns={6}>
														<FormControl name={`employmentDetails[${index}].endOfWork`}>
															<PatternInput format="##/##/####" mask="_" placeholder="DD/MM/YYYY" />
														</FormControl>
													</Columns.Item>
												</Columns>
											</div>
										</Box>
										<Box display="flex" align="center" gap={6}>
											<div style={{ width: '10rem', flexShrink: 0, display: 'flex', justifyContent: 'flex-end' }}>
												<Text fontSize="small" fontWeight="semibold" as="label" lineHeight="small">
													Employment type
												</Text>
											</div>
											<div style={{ flexGrow: 1 }}>
												<Columns gap={4}>
													<Columns.Item columns={6}>
														<FormControl name={`employmentDetails[${index}].employmentType`}>
															<Select options={[{ label: 'Choose Type', value: '' }]} />
														</FormControl>
													</Columns.Item>
												</Columns>
											</div>
										</Box>
										<Box display="flex" align="flex-start" gap={6}>
											<div style={{ width: '10rem', flexShrink: 0, display: 'flex', justifyContent: 'flex-end' }}>
												<Text fontSize="small" fontWeight="semibold" as="label">
													Working hours
												</Text>
											</div>
											<Box style={{ flexGrow: 1 }} display="flex" gap={4}>
												<Controller
													control={control}
													name={`employmentDetails[${index}].workingHours`}
													render={({ field }) => {
														return (
															<RadioGroup
																name={field.name}
																value={field.value}
																onChange={field.onChange}
																options={[
																	{ label: 'Full-time', value: 'full-time' },
																	{ label: 'Part-time', value: 'part-time' }
																]}
															/>
														)
													}}
												/>
												{watch(`employmentDetails[${index}].workingHours`) === 'part-time' ? (
													<Box display="flex" align="flex-end">
														<Controller
															control={control}
															name={`employmentDetails[${index}].partTimeHours`}
															render={({ field }) => (
																<Counter value={field.value || 0} onChange={newValue => field.onChange(newValue)} />
															)}
														/>
													</Box>
												) : null}
											</Box>
										</Box>
										<Box display="flex" align="flex-start" gap={6}>
											<div style={{ width: '10rem', flexShrink: 0, display: 'flex', justifyContent: 'flex-end' }}>
												<Text fontSize="small" fontWeight="semibold" as="label">
													Employment duration
												</Text>
											</div>
											<div style={{ flexGrow: 1 }}>
												<Columns gap={4}>
													<Columns.Item columns={6}>
														<Controller
															control={control}
															name={`employmentDetails[${index}].employmentDuration`}
															render={({ field }) => {
																return (
																	<RadioGroup
																		name={field.name}
																		value={field.value}
																		onChange={field.onChange}
																		options={[
																			{ label: 'Temporary employment', value: 'temporary' },
																			{ label: 'Permanent employment', value: 'permanent' }
																		]}
																	/>
																)
															}}
														/>
													</Columns.Item>
												</Columns>
											</div>
										</Box>
										<Box display="flex" align="flex-start" gap={6}>
											<div style={{ width: '10rem', flexShrink: 0, display: 'flex', justifyContent: 'flex-end' }}>
												<Text fontSize="small" fontWeight="semibold" as="label">
													Probation period
												</Text>
											</div>
											<div style={{ flexGrow: 1 }}>
												<Columns gap={4}>
													<Columns.Item columns={6}>
														<Stack gap={3}>
															<Controller
																control={control}
																name={`employmentDetails[${index}].probationPeriod`}
																render={({ field }) => {
																	return (
																		<RadioGroup
																			name={field.name}
																			value={field.value}
																			onChange={field.onChange}
																			options={[
																				{ label: 'None', value: 'none' },
																				{ label: 'Until...', value: 'until' }
																			]}
																		/>
																	)
																}}
															/>
															{watch(`employmentDetails[${index}].probationPeriod`) === 'until' ? (
																<FormControl name={`employmentDetails[${index}].probationPeriodDate`}>
																	<PatternInput format="##/##/####" mask="_" placeholder="DD/MM/YYYY" />
																</FormControl>
															) : null}
														</Stack>
													</Columns.Item>
												</Columns>
											</div>
										</Box>
										<Box display="flex" align="center" gap={6}>
											<div style={{ width: '10rem', flexShrink: 0, display: 'flex', justifyContent: 'flex-end' }}>
												<Text fontSize="small" fontWeight="semibold" as="label" lineHeight="small">
													Vacation days
												</Text>
											</div>
											<div style={{ flexGrow: 1 }}>
												<Columns gap={4}>
													<Columns.Item columns={6}>
														<Controller
															control={control}
															name={`employmentDetails[${index}].vacationDays`}
															render={({ field }) => (
																<Counter value={field.value} onChange={newValue => field.onChange(newValue)} />
															)}
														/>
													</Columns.Item>
												</Columns>
											</div>
										</Box>
										<Box display="flex" align="center" gap={6}>
											<div style={{ width: '10rem', flexShrink: 0, display: 'flex', justifyContent: 'flex-end' }} />
											<div style={{ flexGrow: 1 }}>
												<Columns gap={4}>
													<Columns.Item columns={6}>
														<Controller
															control={control}
															name={`employmentDetails[${index}].additionalRules`}
															render={({ field }) => (
																<Checkbox
																	name={field.name}
																	value="yes"
																	onChange={() => {
																		if (field.value === 'yes') {
																			field.onChange('')
																			return
																		}

																		field.onChange('yes')
																	}}
																	label="Additional rules"
																	checked={field.value === 'yes'}
																/>
															)}
														/>
													</Columns.Item>
													{index !== 0 ? (
														<Columns.Item columns={6}>
															<Box display="flex" justify="flex-end">
																<Button variant="destructive" size="small" onClick={() => remove(index)}>
																	<DeleteIcon size="medium" />
																	Delete
																</Button>
															</Box>
														</Columns.Item>
													) : null}
												</Columns>
											</div>
										</Box>
									</Stack>
								</Stack>
							</Box>
						))}
						<Button variant="ghost" size="small" onClick={() => append(defaultValues)}>
							<PlusIcon size="medium" />
							Add employment period
						</Button>
					</Stack>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}
