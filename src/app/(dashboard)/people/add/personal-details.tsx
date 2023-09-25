import { Controller, useFormContext } from 'react-hook-form'

import { Counter } from '@/components/custom/counter'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/data-display/accordion'
import { FormControl } from '@/components/inputs/form-control'
import { PatternInput } from '@/components/inputs/pattern-input'
import { Select } from '@/components/inputs/select'
import { TextInput } from '@/components/inputs/text-input'
import { Box } from '@/components/layout/box'
import { Columns } from '@/components/layout/columns'
import { Divider } from '@/components/layout/divider'
import { Stack } from '@/components/layout/stack'
import { Text } from '@/components/typography/text'

import { genders, offices } from '../data'

export const PersonalDetails = () => {
	const { control } = useFormContext()

	return (
		<Accordion type="single" collapsible>
			<AccordionItem value="personal-details">
				<AccordionTrigger>Personal Details</AccordionTrigger>
				<AccordionContent>
					<Stack gap={6}>
						<Divider />
						<Stack gap={8}>
							<Box display="flex" align="center" gap={6}>
								<div style={{ width: '10rem', flexShrink: 0, display: 'flex', justifyContent: 'flex-end' }}>
									<Text fontSize="small" fontWeight="semibold" as="label">
										Last and first name*
									</Text>
								</div>
								<div style={{ flexGrow: 1 }}>
									<Columns gap={4}>
										<Columns.Item columns={6}>
											<FormControl name="lastName">
												<TextInput placeholder="Last name" />
											</FormControl>
										</Columns.Item>
										<Columns.Item columns={6}>
											<FormControl name="firstName">
												<TextInput placeholder="First name" />
											</FormControl>
										</Columns.Item>
									</Columns>
								</div>
							</Box>
							<Box display="flex" align="center" gap={6}>
								<div style={{ width: '10rem', flexShrink: 0, display: 'flex', justifyContent: 'flex-end' }}>
									<Text fontSize="small" fontWeight="semibold" as="label">
										Office*
									</Text>
								</div>
								<div style={{ flexGrow: 1 }}>
									<Columns gap={4}>
										<Columns.Item columns={6}>
											<FormControl name="office">
												<Select options={offices} />
											</FormControl>
										</Columns.Item>
									</Columns>
								</div>
							</Box>
							<Box display="flex" align="center" gap={6}>
								<div style={{ width: '10rem', flexShrink: 0, display: 'flex', justifyContent: 'flex-end' }}>
									<Text fontSize="small" fontWeight="semibold" as="label">
										Gender
									</Text>
								</div>
								<div style={{ flexGrow: 1 }}>
									<Columns gap={4}>
										<Columns.Item columns={6}>
											<FormControl name="gender">
												<Select options={genders} />
											</FormControl>
										</Columns.Item>
									</Columns>
								</div>
							</Box>
							<Box display="flex" align="center" gap={6}>
								<div style={{ width: '10rem', flexShrink: 0, display: 'flex', justifyContent: 'flex-end' }}>
									<Text fontSize="small" fontWeight="semibold" as="label">
										OIB
									</Text>
								</div>
								<div style={{ flexGrow: 1 }}>
									<Columns gap={4}>
										<Columns.Item columns={6}>
											<FormControl name="oib">
												<PatternInput format="###########" placeholder="e.g. 58839582349" />
											</FormControl>
										</Columns.Item>
									</Columns>
								</div>
							</Box>
							<Box display="flex" align="center" gap={6}>
								<div style={{ width: '10rem', flexShrink: 0, display: 'flex', justifyContent: 'flex-end' }}>
									<Text fontSize="small" fontWeight="semibold" as="label">
										Date of birth
									</Text>
								</div>
								<div style={{ flexGrow: 1 }}>
									<Columns gap={4}>
										<Columns.Item columns={6}>
											<FormControl name="dateOfBirth">
												<PatternInput format="##/##/####" mask="_" placeholder="DD/MM/YYYY" />
											</FormControl>
										</Columns.Item>
									</Columns>
								</div>
							</Box>
							<Box display="flex" align="center" gap={6}>
								<div style={{ width: '10rem', flexShrink: 0, display: 'flex', textAlign: 'right' }}>
									<Text fontSize="small" fontWeight="semibold" as="label" lineHeight="small">
										Date of religious celebration
									</Text>
								</div>
								<div style={{ flexGrow: 1 }}>
									<Columns gap={4}>
										<Columns.Item columns={6}>
											<FormControl name="dateOfReligiousCelebration">
												<PatternInput format="##/##/####" mask="_" placeholder="DD/MM/YYYY" />
											</FormControl>
										</Columns.Item>
									</Columns>
								</div>
							</Box>
							<Box display="flex" align="center" gap={6}>
								<div style={{ width: '10rem', flexShrink: 0, display: 'flex', justifyContent: 'flex-end' }}>
									<Text fontSize="small" fontWeight="semibold" as="label" lineHeight="small">
										Address (prebivalište)
									</Text>
								</div>
								<div style={{ flexGrow: 1 }}>
									<Columns gap={4}>
										<Columns.Item columns={6}>
											<FormControl name="address1">
												<TextInput placeholder="Slavonska avenija 6" />
											</FormControl>
										</Columns.Item>
									</Columns>
								</div>
							</Box>
							<Box display="flex" align="center" gap={6}>
								<div style={{ width: '10rem', flexShrink: 0, display: 'flex', justifyContent: 'flex-end' }}>
									<Text fontSize="small" fontWeight="semibold" as="label" lineHeight="small">
										Address (boravište)
									</Text>
								</div>
								<div style={{ flexGrow: 1 }}>
									<Columns gap={4}>
										<Columns.Item columns={6}>
											<FormControl name="address2">
												<TextInput placeholder="Slavonska avenija 6" />
											</FormControl>
										</Columns.Item>
									</Columns>
								</div>
							</Box>
							<Box display="flex" align="center" gap={6}>
								<div style={{ width: '10rem', flexShrink: 0, display: 'flex', justifyContent: 'flex-end' }}>
									<Text fontSize="small" fontWeight="semibold" as="label" lineHeight="small">
										Work email address
									</Text>
								</div>
								<div style={{ flexGrow: 1 }}>
									<Columns gap={4}>
										<Columns.Item columns={6}>
											<FormControl name="workEmail">
												<TextInput placeholder="someone@cinnamon.agency" />
											</FormControl>
										</Columns.Item>
									</Columns>
								</div>
							</Box>
							<Box display="flex" align="center" gap={6}>
								<div style={{ width: '10rem', flexShrink: 0, display: 'flex', justifyContent: 'flex-end' }}>
									<Text fontSize="small" fontWeight="semibold" as="label" lineHeight="small">
										Personal email address
									</Text>
								</div>
								<div style={{ flexGrow: 1 }}>
									<Columns gap={4}>
										<Columns.Item columns={6}>
											<FormControl name="personalEmail">
												<TextInput placeholder="someone@cinnamon.agency" />
											</FormControl>
										</Columns.Item>
									</Columns>
								</div>
							</Box>
							<Box display="flex" align="center" gap={6}>
								<div style={{ width: '10rem', flexShrink: 0, display: 'flex', textAlign: 'right' }}>
									<Text fontSize="small" fontWeight="semibold" as="label" lineHeight="small">
										Professional qualification
									</Text>
								</div>
								<div style={{ flexGrow: 1 }}>
									<Columns gap={4}>
										<Columns.Item columns={6}>
											<Select options={[{ label: 'Choose Type', value: '' }]} />
										</Columns.Item>
									</Columns>
								</div>
							</Box>
							<Box display="flex" align="center" gap={6}>
								<div style={{ width: '10rem', flexShrink: 0, display: 'flex', justifyContent: 'flex-end' }}>
									<Text fontSize="small" fontWeight="semibold" as="label" lineHeight="small">
										Phone number
									</Text>
								</div>
								<div style={{ flexGrow: 1 }}>
									<Columns gap={4}>
										<Columns.Item columns={6}>
											<FormControl name="phoneNumber">
												<PatternInput format="+############" placeholder="e.g. +385987352096" />
											</FormControl>
										</Columns.Item>
									</Columns>
								</div>
							</Box>
							<Box display="flex" align="center" gap={6}>
								<div style={{ width: '10rem', flexShrink: 0, display: 'flex', textAlign: 'right' }}>
									<Text fontSize="small" fontWeight="semibold" as="label" lineHeight="small">
										Emergency phone number
									</Text>
								</div>
								<div style={{ flexGrow: 1 }}>
									<Columns gap={4}>
										<Columns.Item columns={6}>
											<FormControl name="emergencyPhoneNumber">
												<PatternInput format="+############" placeholder="e.g. +385987352096" />
											</FormControl>
										</Columns.Item>
									</Columns>
								</div>
							</Box>
							<Box display="flex" align="center" gap={6}>
								<div style={{ width: '10rem', flexShrink: 0, display: 'flex', textAlign: 'right' }}>
									<Text fontSize="small" fontWeight="semibold" as="label" lineHeight="small">
										Emergency contact name
									</Text>
								</div>
								<div style={{ flexGrow: 1 }}>
									<Columns gap={4}>
										<Columns.Item columns={6}>
											<FormControl name="emergencyContactName">
												<TextInput placeholder="John Doe" />
											</FormControl>
										</Columns.Item>
									</Columns>
								</div>
							</Box>
							<Box display="flex" align="center" gap={6}>
								<div style={{ width: '10rem', flexShrink: 0, display: 'flex', justifyContent: 'flex-end' }}>
									<Text fontSize="small" fontWeight="semibold" as="label" lineHeight="small">
										Children
									</Text>
								</div>
								<div style={{ flexGrow: 1 }}>
									<Columns gap={4}>
										<Columns.Item columns={6}>
											<Controller
												control={control}
												name="children"
												render={({ field }) => {
													return <Counter value={field.value} onChange={newValue => field.onChange(newValue)} />
												}}
											/>
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
