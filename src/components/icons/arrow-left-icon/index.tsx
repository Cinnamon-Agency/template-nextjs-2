import { ComponentProps } from 'react'

import ArrowLeftIconAsset from './arrow-left-icon.svg'
import { BlockIcon } from '../block-icon'

export const ArrowLeftIcon = (props: Omit<ComponentProps<typeof BlockIcon>, 'icon'>) => {
	return <BlockIcon icon={ArrowLeftIconAsset} {...props} />
}
