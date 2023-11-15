import { ComponentProps } from 'react'

import ChevronDownIconAsset from './chevron-down-icon.svg'
import { BlockIcon } from '../block-icon'

export const ChevronDownIcon = (props: Omit<ComponentProps<typeof BlockIcon>, 'icon'>) => {
	return <BlockIcon icon={ChevronDownIconAsset} {...props} />
}
