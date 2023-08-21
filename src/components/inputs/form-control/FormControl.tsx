'use client'

import { ComponentProps, ReactNode } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { getChildByType, overridePropsDeep } from 'react-nanny'

import { Stack } from 'components/layout/stack'
import { Text } from 'components/typography/text'

import { Checkbox } from '../checkbox'
import { CheckboxGroup } from '../checkbox-group'
import { Label } from '../label'
import { NumericInput } from '../numeric-input'
import { PatternInput } from '../pattern-input'
import { Radio } from '../radio'
import { RadioGroup } from '../radio-group'
import { Select } from '../select'
import { TextInput } from '../text-input'

type Props = { name: string; children: ReactNode }

export const FormControl = ({ name, children }: Props) => {
	const {
		control,
		formState: { errors }
	} = useFormContext()
	const label = getChildByType(children, [FormControl.Label])
	const message = getChildByType(children, [FormControl.Message])
	const input = getChildByType(children, [
		TextInput,
		Select,
		NumericInput,
		PatternInput,
		Radio,
		RadioGroup,
		Checkbox,
		CheckboxGroup
	])

	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => {
				const errorMessage = errors[field.name]?.message?.toString()
				const overriddenInput = overridePropsDeep(input, () => ({
					hasError: errors[field.name] !== undefined,
					value: field.value,
					name: field.name,
					onChange: field.onChange,
					onBlur: field.onBlur
				}))

				return (
					<div style={{ width: '100%' }}>
						<Stack gap="xsmall">
							{label}
							{overriddenInput}
						</Stack>
						{overridePropsDeep(message, () => ({ children: errorMessage }))}
					</div>
				)
			}}
		/>
	)
}

FormControl.Label = ({ children, htmlFor }: ComponentProps<typeof Label>) => <Label htmlFor={htmlFor}>{children}</Label>

FormControl.Message = ({ children }: { children?: string }) => {
	if (children) {
		return (
			<Text color="destructive.500" lineHeight="large">
				{children}
			</Text>
		)
	}

	return null
}
