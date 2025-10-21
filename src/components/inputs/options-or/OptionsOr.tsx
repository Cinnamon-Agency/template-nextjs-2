import React from 'react'

import { Box } from '@/components/layout/box'
import { Inline } from '@/components/layout/inline'
import { Text } from 'components/typography/text'

import { Option } from '../option/Option'
import { OptionBase } from '../option/optionBase'


interface Props {
	data: OptionBase[]
	value?: string
	onChange?: (value: string | undefined) => void
}

export const OptionsOr = ({ data, value, onChange }: Props) => {
	const handleOption = (e: React.MouseEvent<HTMLButtonElement>, optionValue: string) => {
		e.preventDefault()

		if (onChange) {
			const valueForsave = value === optionValue ? undefined : optionValue

			onChange(valueForsave)
		}
	}

	return (
		<Box paddingY={2}>
			<Inline gap={2} align="center">
				{data?.map((item: OptionBase, index: number) => (
					<React.Fragment key={item.value}>
						<Option
							icon={item?.icon}
							label={item?.label}
							size="small"
							variant={value?.includes(item?.value) ? 'selected' : 'or'}
							handleOption={e => handleOption(e, item.value)}
						/>
						{data.length > index + 1 && <Text color="neutral.600">or</Text>}
					</React.Fragment>
				))}
			</Inline>
		</Box>
	)
}
