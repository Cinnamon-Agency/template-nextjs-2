import { ComponentProps } from 'react'

import DeleteIconAsset from './delete-icon.svg'
import { BlockIcon } from '../block-icon'

export const DeleteIcon = (props: Omit<ComponentProps<typeof BlockIcon>, 'icon'>) => {
	return <BlockIcon icon={DeleteIconAsset} {...props} />
}
