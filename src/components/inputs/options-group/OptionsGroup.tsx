import React, {  useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { Box } from '@/components/layout/box'
import { Inline } from '@/components/layout/inline'
import { Stack } from '@/components/layout/stack'
import { Text } from '@/components/typography/text'

import { AddOption } from './AddOption'
import { Option } from '../option/Option'
import { OptionBase } from '../option/optionBase'

interface Props {
	label: string
	name?: string
	data: OptionBase[]
	max?: number
	value?: string[]
	maxHeight?: number
}

export const OptionsGroup = ({ max, data, label, name, value, maxHeight }: Props) => {
	const formContext = useFormContext()
	const valueOptionArray: OptionBase[] = value
		? value?.map(item => {
				return { value: item, label: item }
		  })
		: []
	const initalData = [...(data ?? []), ...valueOptionArray].filter(
		(item, index, self) => index === self.findIndex(obj => obj.value === item.value)
	)
	const [optionsData, setOptionsData] = useState<OptionBase[]>(initalData)

	const handleAddOption = (option: string) => {
		setOptionsData([...optionsData, { value: option, label: option }])
		handleOption(option)
	}

	const handleOption = (optionValue: string) => {
		if (name) {
			const currentValue = value ?? []

			if (currentValue?.includes(optionValue)) {
				const trimmedValue: string[] = currentValue.filter((v: string) => v !== optionValue)
				formContext.setValue(name, trimmedValue)
			} else {
				formContext.setValue(name, [...currentValue, optionValue])
			}
		}
	}

	return (
		<Box paddingTop={1}>
			<Stack gap={2}>
				{max && <Text color="neutral.400" fontSize="xxsmall">{`Choose a maximum of ${max} options`}</Text>}
				<Box overflow="auto" style={{ maxHeight: maxHeight ? `${maxHeight}px` : 'none', scrollbarWidth: 'thin' }}>
					<Inline gap={2}>
						{optionsData?.map(item => (
							<Option
								label={item?.label}
								variant={value?.includes(item?.value) ? 'selected' : 'basic'}
								handleOption={() => handleOption(item.value)}
							/>
						))}
					</Inline>
				</Box>
				<AddOption label={label} handleAddOption={handleAddOption} />
			</Stack>
		</Box>
	)
}
