/* eslint-disable no-undef */
import classnames from 'classnames'
import { ElementType, HTMLAttributes } from 'react'

import { Atoms, atoms } from 'style/atoms.css'
import { filterAtomsFromNativeAttributes } from 'style/utils/filterAtomsFromNativeAttributes'

type Common<E extends ElementType> = HTMLAttributes<E> & { as?: E } & Atoms

type Props<E extends ElementType> = E extends keyof JSX.IntrinsicElements
	? JSX.IntrinsicElements[E] & Common<E>
	: Common<E>

export const Box = <E extends ElementType = 'div'>({ as, className, ...rest }: Props<E>) => {
	const Element = as || 'div'
	const { atomsProps, elementNativeProps } = filterAtomsFromNativeAttributes(rest)

	return <Element className={classnames(atoms(atomsProps), className)} {...elementNativeProps} />
}
