/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/button-has-type */
import classnames from 'classnames'
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

import { ButtonVariants, base } from './Button.css'

// Required props for both button and anchor
type RequiredProps = { children: ReactNode }
// When href prop is passed also allow other anchor attributes
type AnchorProps = { onClick?: never; href: string } & Pick<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	'target' | 'rel' | 'className'
>
// When onClick prop is passed also allow other button attributes
type ButtonProps = { onClick?: () => void; href?: never } & Pick<
	ButtonHTMLAttributes<HTMLButtonElement>,
	'type' | 'className' | 'disabled'
>
type Props = (AnchorProps | ButtonProps) & ButtonVariants & RequiredProps

export const Button = ({ variant = 'primary', size = 'large', href, className, ...rest }: Props) => {
	if (href) {
		return (
			<a
				href={href}
				className={classnames(base({ variant, size }), className)}
				style={{ textDecoration: 'none' }}
				{...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
			/>
		)
	}

	return (
		<button
			className={classnames(base({ variant, size }), className)}
			{...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
		/>
	)
}
