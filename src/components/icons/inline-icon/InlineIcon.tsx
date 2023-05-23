import { ComponentType, SVGProps } from 'react'

import { Atoms, atoms } from 'style/atoms.css'

interface Props {
	icon: ComponentType<SVGProps<SVGSVGElement>>
	color?: Atoms['color']
}

export const InlineIcon = ({ icon: Icon, color }: Props) => {
	return <Icon width="0.75em" height="0.75em" className={atoms({ color })} />
}
