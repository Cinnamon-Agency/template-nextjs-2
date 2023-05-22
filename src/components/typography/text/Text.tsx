/* eslint-disable no-undef */
import classnames from 'classnames'
import { ElementType, HTMLAttributes } from 'react'

import { Atoms, atoms } from 'style/atoms.css'
import { filterAtomsFromNativeAttributes } from 'style/utils/filterAtomsFromNativeAttributes'

import { TextAtomsProps } from '../types'

type Variant = 'bodytext' | 'h1' | 'h2' | 'h3' | 'h4'

type Common<E extends ElementType> = HTMLAttributes<E> & { as?: E; variant?: Variant } & TextAtomsProps

type Props<E extends ElementType> = E extends keyof JSX.IntrinsicElements
	? JSX.IntrinsicElements[E] & Common<E>
	: Common<E>

const defaultStylesMap: Record<Variant, Atoms> = {
	bodytext: {
		fontFamily: 'body',
		fontWeight: 'regular',
		fontSize: 'medium',
		lineHeight: 'large'
	},
	h1: {
		fontFamily: 'heading',
		fontWeight: 'bold',
		fontSize: { mobile: 'xxlarge', tablet: 'xxxlarge' },
		lineHeight: 'medium'
	},
	h2: {
		fontFamily: 'heading',
		fontWeight: 'bold',
		fontSize: { mobile: 'xlarge', tablet: 'xxlarge' },
		lineHeight: 'medium'
	},
	h3: {
		fontFamily: 'heading',
		fontWeight: 'bold',
		fontSize: { mobile: 'large', tablet: 'xlarge' },
		lineHeight: 'medium'
	},
	h4: {
		fontFamily: 'heading',
		fontWeight: 'bold',
		fontSize: { mobile: 'medium', tablet: 'large' },
		lineHeight: 'medium'
	}
}

export const Text = <E extends ElementType = 'p'>({ as, variant = 'bodytext', className, ...rest }: Props<E>) => {
	const Element = as || 'p'
	const defaultStyles = defaultStylesMap[variant]

	const { atomsProps, elementNativeProps } = filterAtomsFromNativeAttributes(rest)

	const joinedAtoms = {
		...defaultStyles,
		...atomsProps
	}

	return <Element className={classnames(atoms(joinedAtoms), className)} {...elementNativeProps} />
}
