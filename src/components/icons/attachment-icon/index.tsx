import { ComponentProps } from 'react'

import AttachmentIconAsset from './attachment-icon.svg'
import { BlockIcon } from '../block-icon'

export const AttachmentIcon = (props: Omit<ComponentProps<typeof BlockIcon>, 'icon'>) => {
	return <BlockIcon icon={AttachmentIconAsset} {...props} />
}
