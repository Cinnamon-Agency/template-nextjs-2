/* eslint-disable no-undef */
import classnames from 'classnames'
import { InputHTMLAttributes } from 'react'

import { tokens } from 'style/theme.css'

import { endIconSpacing, iconSlot, input, inputHasError, inputWrapper, startIconSpacing } from './TextInput.css'

interface CustomInputProps {
	hasError?: boolean
	endIcon?: JSX.Element
	startIcon?: JSX.Element
}

type Props = InputHTMLAttributes<HTMLInputElement> & CustomInputProps

export const TextInput = ({ hasError, startIcon, endIcon, ...rest }: Props) => {
	return (
		<div className={inputWrapper}>
			{startIcon && (
				<div className={iconSlot} style={{ left: tokens.spacing.small }}>
					{startIcon}
				</div>
			)}
			<input
				{...rest}
				className={classnames(
					input,
					hasError && inputHasError,
					endIcon && endIconSpacing,
					startIcon && startIconSpacing
				)}
			/>
			{endIcon && (
				<div className={iconSlot} style={{ right: tokens.spacing.small }}>
					{endIcon}
				</div>
			)}
		</div>
	)
}
