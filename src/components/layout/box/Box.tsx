/* eslint-disable no-undef */
import classnames from 'classnames'
import { ElementType, HTMLAttributes } from 'react'

import { Atoms, atoms } from 'style/atoms.css'

type Common<E extends ElementType> = HTMLAttributes<E> & { as?: E } & Atoms

type Props<E extends ElementType> = E extends keyof JSX.IntrinsicElements
	? JSX.IntrinsicElements[E] & Common<E>
	: Common<E>

export const Box = <E extends ElementType = 'div'>({ as, className, ...rest }: Props<E>) => {
	const Element = as || 'div'

	const atomsProps: Record<string, unknown> = {}
	const elementNativeProps: Record<string, unknown> = {}

	// Filter out non-atoms props
	Object.keys(rest).forEach(key => {
		if (atoms.properties.has(key as keyof Atoms)) {
			atomsProps[key] = rest[key as keyof typeof rest]
		} else {
			elementNativeProps[key] = rest[key as keyof typeof rest]
		}
	})

	return <Element className={classnames(atoms(atomsProps), className)} {...elementNativeProps} />
}
