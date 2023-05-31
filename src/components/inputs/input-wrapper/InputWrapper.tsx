/* eslint-disable no-undef */
import { ReactNode } from 'react'

import { tokens } from 'style/theme.css'

import { iconSlot, inputWrapper } from './InputWrapper.css'

interface Props {
	endIcon?: JSX.Element
	startIcon?: JSX.Element
	children: ReactNode
}

export const InputWrapper = ({ startIcon, endIcon, children }: Props) => {
	return (
		<div className={inputWrapper}>
			{startIcon && (
				<div className={iconSlot} style={{ left: tokens.spacing.small }}>
					{startIcon}
				</div>
			)}
			{children}
			{endIcon && (
				<div className={iconSlot} style={{ right: tokens.spacing.small }}>
					{endIcon}
				</div>
			)}
		</div>
	)
}