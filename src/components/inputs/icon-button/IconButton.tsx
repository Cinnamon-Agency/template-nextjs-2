import clsx from 'clsx'
import { ButtonHTMLAttributes, forwardRef } from 'react'

import { IconButtonVariants, iconButton } from './IconButton.css'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & IconButtonVariants

export const IconButton = forwardRef<HTMLButtonElement, Props>(
	({ variant = 'primary', size = 'large', className, children, ...rest }, ref) => (
		<button ref={ref} type="button" className={clsx(iconButton({ variant, size }), className)} {...rest}>
			{children}
		</button>
	)
)
