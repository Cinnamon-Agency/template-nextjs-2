import classnames from 'classnames'
import { ComponentType, SVGProps } from 'react'

import { Atoms, atoms } from 'style/atoms.css'

import { sizes } from './BlockIcon.css'

interface Props {
	icon: ComponentType<SVGProps<SVGSVGElement>>
	size?: keyof typeof sizes
	color?: Atoms['color']
}

export const BlockIcon = ({ icon: Icon, size = 'large', color }: Props) => {
	return <Icon className={classnames(sizes[size], atoms({ color }))} viewBox="0 0 24 24" />
}
