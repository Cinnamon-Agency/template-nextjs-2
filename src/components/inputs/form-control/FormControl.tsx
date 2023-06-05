import { ComponentProps, ReactNode } from 'react'
import { getChildByType } from 'react-nanny'

import { Stack } from 'components/layout/stack'
import { Text } from 'components/typography/text'

import { Label } from '../label'
import { NumericInput } from '../numeric-input'
import { PatternInput } from '../pattern-input'
import { Radio } from '../radio'
import { RadioGroup } from '../radio-group'
import { Select } from '../select'
import { TextInput } from '../text-input'

type Props = { children: ReactNode }

export const FormControl = ({ children }: Props) => {
	const label = getChildByType(children, [FormControl.Label])
	const errorMessage = getChildByType(children, [FormControl.Error])
	const input = getChildByType(children, [TextInput, Select, NumericInput, PatternInput, Radio, RadioGroup])

	return (
		<div>
			<Stack gap="xsmall">
				{label}
				{input}
			</Stack>
			{errorMessage}
		</div>
	)
}

FormControl.Label = ({ children, htmlFor }: ComponentProps<typeof Label>) => <Label htmlFor={htmlFor}>{children}</Label>

FormControl.Error = ({ children }: Props) => (
	<Text color="destructive.500" lineHeight="large">
		{children}
	</Text>
)
