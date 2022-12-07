import Image from 'next/image'
import Link from 'next/link'
import React, { ComponentType, HTMLAttributeAnchorTarget } from 'react'
import { UrlObject } from 'url'
import { ButtonSize, ButtonVariant } from './Button.model'
import { ButtonLink, ButtonStyledProps, StyledButton, Text, WrapperIcon } from './Button.style'

interface CommonProps {
	text: string
	type?: 'button' | 'submit' | 'reset'
	size?: ButtonSize
	variant?: ButtonVariant
	icon?: any // need to use any to avoid potential conflicts with svgr-plugin
	iconFirst?: boolean
	color?: string
	disabled?: boolean
	fullWidth?: boolean
	disableMargin?: boolean
	disablePadding?: boolean
}

export type Props =
	| ({ onClick: () => void } & { href?: never; target?: never } & CommonProps)
	| ({ onClick?: never } & {
			href: UrlObject | string
			target: React.AnchorHTMLAttributes<HTMLAttributeAnchorTarget>['target']
	  } & CommonProps)

type ComponentProps = ButtonStyledProps & React.ButtonHTMLAttributes<HTMLButtonElement>

const handleButtonWrapping = (Component: ComponentType<ComponentProps>, props: Props) => {
	const {
		href,
		size,
		text,
		target,
		onClick,
		type,
		variant,
		icon,
		color,
		disabled,
		fullWidth = false,
		disableMargin,
		iconFirst,
		disablePadding
	} = props

	const button = (
		<Component
			color={color}
			fullWidth={fullWidth}
			size={size}
			type={type}
			variant={variant}
			disabled={disabled}
			disableMargin={disableMargin}
			iconFirst={iconFirst}
			disablePadding={disablePadding}
			onClick={() => onClick && onClick()}>
			<Text>{text}</Text>
			{icon ? (
				<WrapperIcon>
					<Image {...icon} />
				</WrapperIcon>
			) : null}
		</Component>
	)

	if (href) {
		return (
			<Link href={href} passHref>
				<ButtonLink target={target}>{button}</ButtonLink>
			</Link>
		)
	}
	return button
}

export const Button = (props: Props) => handleButtonWrapping(StyledButton, props)
