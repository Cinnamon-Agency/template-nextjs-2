import classnames from 'classnames'
import { ElementType, HTMLAttributes } from 'react'

import { Atoms, atoms } from 'style/atoms.css'
import { filterAtomsFromNativeAttributes } from 'style/utils/filterAtomsFromNativeAttributes'

type Variant = 'bodytext' | 'h1' | 'h2' | 'h3' | 'h4'

interface AtomsProps {
	fontSize?: Atoms['fontSize']
	fontWeight?: Atoms['fontWeight']
	lineHeight?: Atoms['lineHeight']
	fontFamily?: Atoms['fontFamily']
	textAlign?: Atoms['textAlign']
	color?: Atoms['color']
	textTransform?: Atoms['textTransform']
	textDecoration?: Atoms['textDecoration']
	fontStyle?: Atoms['fontStyle']
}

type Props<E extends ElementType> = { as?: E; variant?: Variant } & HTMLAttributes<E> & AtomsProps

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

	const mappedAtoms = {
		...defaultStyles,
		...atomsProps
	}

	return <Element className={classnames(atoms(mappedAtoms), className)} {...elementNativeProps} />
}
